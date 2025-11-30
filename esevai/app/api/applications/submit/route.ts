import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Extract basic info
    const serviceSlug = formData.get('serviceSlug') as string;
    const serviceName = formData.get('serviceName') as string;
    const servicePrice = formData.get('servicePrice') as string;

    // Generate application ID
    const applicationId = `APP-${Date.now()}-${randomUUID().slice(0, 8)}`;

    // Collect all form fields
    const applicationData: Record<string, any> = {
      applicationId,
      serviceSlug,
      serviceName,
      servicePrice: parseFloat(servicePrice),
      status: 'pending_payment',
      createdAt: new Date().toISOString(),
      formData: {},
      files: [],
    };

    // Process form fields
    for (const [key, value] of formData.entries()) {
      if (key !== 'serviceSlug' && key !== 'serviceName' && key !== 'servicePrice') {
        if (value instanceof File) {
          // Handle file upload
          const buffer = Buffer.from(await value.arrayBuffer());
          const filename = `${applicationId}-${key}-${value.name}`;
          const uploadDir = join(process.cwd(), 'uploads', applicationId);
          
          // Create upload directory
          await mkdir(uploadDir, { recursive: true });
          
          // Save file
          const filepath = join(uploadDir, filename);
          await writeFile(filepath, buffer);
          
          applicationData.files.push({
            field: key,
            filename: value.name,
            storedAs: filename,
            path: filepath,
            size: value.size,
            type: value.type,
          });
        } else {
          // Regular form field
          applicationData.formData[key] = value;
        }
      }
    }

    // TODO: Save to database
    // Example with Prisma:
    // const application = await prisma.application.create({
    //   data: {
    //     id: applicationId,
    //     serviceSlug,
    //     serviceName,
    //     price: parseFloat(servicePrice),
    //     status: 'pending_payment',
    //     formData: applicationData.formData,
    //     files: applicationData.files,
    //   }
    // });

    // TODO: Send to n8n webhook
    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK;
    
    if (n8nWebhookUrl) {
      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...applicationData,
          eventType: 'application_submitted',
        }),
      });
    }

    // TODO: Send confirmation SMS/WhatsApp to customer
    const mobile = applicationData.formData.mobileNumber || applicationData.formData.mobile;
    if (mobile) {
      // Send SMS: "Application submitted! ID: {applicationId}. Complete payment to proceed."
    }

    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit application',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}