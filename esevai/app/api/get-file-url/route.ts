// app/api/get-file-url/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const { publicId, expiresInHours = 24 } = await request.json();

    if (!publicId) {
      return NextResponse.json({ error: 'Public ID required' }, { status: 400 });
    }

    // Generate signed URL with expiration
    const signedUrl = cloudinary.url(publicId, {
      sign_url: true,
      secure: true,
      type: 'authenticated',
      expires_at: Math.floor(Date.now() / 1000) + (expiresInHours * 60 * 60),
    });

    return NextResponse.json({
      success: true,
      url: signedUrl,
      expiresIn: `${expiresInHours} hours`,
    });

  } catch (error) {
    console.error('Error generating signed URL:', error);
    return NextResponse.json({ error: 'Failed to generate URL' }, { status: 500 });
  }
}