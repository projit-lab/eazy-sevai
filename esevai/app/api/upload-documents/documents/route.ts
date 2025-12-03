import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const serviceSlug = formData.get('serviceSlug') as string;
    const documentName = formData.get('documentName') as string;
    const leadId = formData.get('leadId') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds 10MB limit' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(base64File, {
      folder: `esevai/${serviceSlug}/${leadId}`,
      resource_type: 'auto',
      public_id: `${documentName}-${Date.now()}`,
    });

    // Send document info to N8N (optional tracking)
    const n8nWebhook = process.env.N8N_DOCUMENT_WEBHOOK;
    if (n8nWebhook) {
      try {
        await fetch(n8nWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadId,
            serviceSlug,
            documentName,
            fileUrl: uploadResult.secure_url,
            fileId: uploadResult.public_id,
            uploadedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error('N8N webhook error (non-critical):', webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        fileId: uploadResult.public_id,
        url: uploadResult.secure_url,
        uploadedAt: new Date().toISOString(),
      },
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to upload file' 
      },
      { status: 500 }
    );
  }
}