import { NextRequest, NextResponse } from 'next/server';

// Import service data to get service details
interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  professionalFee: number;
  statutoryFee: number;
  gst: number;
  totalPayable: number;
  isFullyOnline?: boolean;
  requiresPhysicalPresence?: boolean;
  requiresSiteInspection?: boolean;
  isStatutoryFeeVariable?: boolean;
  statutoryFeeNote?: string;
  operationalComplexity?: 'low' | 'medium' | 'high';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicationId, orderId, serviceSlug, paymentId, userData, formData } = body;

    // Validate required fields
    if (!applicationId || !orderId || !serviceSlug || !userData) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // You'll need to import your services data to get full service details
    // For now, we'll send what we have
    const serviceDetails = {
      slug: serviceSlug,
      // These would come from your services.ts file
      isFullyOnline: false,
      requiresPhysicalPresence: false,
      requiresSiteInspection: false,
      isStatutoryFeeVariable: false,
      operationalComplexity: 'medium',
    };

    // Prepare application data for N8N
    const applicationData = {
      // Application Info
      applicationId,
      orderId,
      paymentId,
      serviceSlug,
      
      // User Data
      userName: userData.name,
      userEmail: userData.email,
      userPhone: userData.phone,
      userAddress: userData.address || '',
      
      // Form Data (documents, etc.)
      formData: formData || {},
      
      // Service Details
      ...serviceDetails,
      
      // Timestamp
      submittedAt: new Date().toISOString(),
      
      // Status
      status: 'submitted',
    };

    // Send to N8N webhook
    const n8nWebhook = process.env.N8N_WEBHOOK_URL;
    
    if (!n8nWebhook) {
      console.error('N8N_WEBHOOK_URL not configured');
      return NextResponse.json(
        { success: false, error: 'Webhook not configured' },
        { status: 500 }
      );
    }

    const n8nResponse = await fetch(n8nWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData),
    });

    if (!n8nResponse.ok) {
      throw new Error(`N8N webhook failed: ${n8nResponse.status}`);
    }

    const n8nData = await n8nResponse.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId,
      n8nResponse: n8nData,
    });

  } catch (error: any) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to submit application' 
      },
      { status: 500 }
    );
  }
}