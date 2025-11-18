// app/api/upload-file/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MAX_FILE_SIZE = 5242880; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

export async function POST(request: NextRequest) {
  try {
    console.log('📤 === FILE UPLOAD REQUEST RECEIVED ===');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const fieldName = formData.get('fieldName') as string;
    const applicationId = formData.get('applicationId') as string;

    console.log('📎 File details:', {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fieldName,
      applicationId
    });

    if (!file) {
      console.error('❌ No file provided');
      return NextResponse.json({ error: 'No file' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      console.error('❌ File too large:', file.size);
      return NextResponse.json({ error: 'File too large (max 5MB)' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      console.error('❌ Invalid file type:', file.type);
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    console.log('☁️ Uploading to Cloudinary with security...');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          // SECURITY: Upload to private folder
          folder: `esevai/private/${applicationId || 'temp'}`,
          resource_type: 'auto',
          public_id: `${fieldName}-${Date.now()}`,
          
          // SECURITY OPTIONS:
          type: 'authenticated', // Requires signature to access
          access_mode: 'authenticated', // Not publicly accessible
          
          // Metadata for tracking
          tags: [applicationId, fieldName, 'secure'].filter(Boolean),
          context: {
            application_id: applicationId,
            field_name: fieldName,
            upload_date: new Date().toISOString(),
          },
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary error:', error);
            reject(error);
          } else {
            console.log('✅ Upload success (secured):', result?.secure_url);
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    const uploadResult = result as any;

    // Generate a signed URL that expires in 7 days
    const signedUrl = cloudinary.url(uploadResult.public_id, {
      sign_url: true,
      secure: true,
      type: 'authenticated',
      expires_at: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days
    });

    return NextResponse.json({
      success: true,
      fileUrl: signedUrl, // Signed URL with expiration
      publicId: uploadResult.public_id,
      format: uploadResult.format,
      size: uploadResult.bytes,
      securityType: 'authenticated',
      expiresIn: '7 days',
    });

  } catch (error) {
    console.error('❌ Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}