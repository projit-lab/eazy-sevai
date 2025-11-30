import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const serviceSlug = formData.get('serviceSlug') as string;
    const documentName = formData.get('documentName') as string;
    const leadId = formData.get('leadId') as string;

    if (!file || !serviceSlug || !documentName || !leadId) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ success: false, error: 'Invalid file type' }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ success: false, error: 'File too large (max 10MB)' }, { status: 400 });
    }

    const timestamp = Date.now();
    const hash = crypto.createHash('md5').update(`${leadId}${documentName}${timestamp}`).digest('hex');
    const ext = file.name.split('.').pop();
    const key = `applications/${new Date().getFullYear()}/${serviceSlug}/${leadId}/${hash}.${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: key,
        Body: buffer,
        ContentType: file.type,
        Metadata: {
          leadId,
          serviceSlug,
          documentName,
          uploadedAt: new Date().toISOString(),
        },
      })
    );

    const url = await getSignedUrl(s3Client, new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: key,
    }), { expiresIn: 3600 });

    if (process.env.N8N_DOCUMENT_WEBHOOK) {
      await fetch(process.env.N8N_DOCUMENT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          documentName,
          s3Key: key,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          uploadedAt: new Date().toISOString(),
        }),
      }).catch(console.error);
    }

    return NextResponse.json({
      success: true,
      data: {
        fileId: key,
        fileName: file.name,
        fileSize: file.size,
        url,
        uploadedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}