// app/api/submit-inquiry/route.ts
// ✅ For contact form / general inquiries
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, message, serviceInterest } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare payload for n8n
    const n8nPayload = {
      event: 'inquiry.submitted',
      inquiryId: `INQ-${Date.now()}`,
      timestamp: new Date().toISOString(),
      
      // Contact data
      contactData: {
        name,
        email,
        phone,
        message,
        serviceInterest: serviceInterest || 'General Inquiry',
      },
    };

    console.log('Sending inquiry to n8n:', n8nPayload);

    // Send to n8n webhook (different endpoint for inquiries)
    if (process.env.N8N_INQUIRY_WEBHOOK) {
      const n8nResponse = await fetch(process.env.N8N_INQUIRY_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(n8nPayload),
      });

      if (!n8nResponse.ok) {
        console.error('N8N inquiry webhook failed:', await n8nResponse.text());
        throw new Error('Failed to send inquiry to n8n');
      }
    }

    return NextResponse.json({
      success: true,
      inquiryId: n8nPayload.inquiryId,
      message: 'Thank you for your inquiry! We will contact you shortly.',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit inquiry', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}