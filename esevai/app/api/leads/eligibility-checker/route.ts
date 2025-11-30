import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const leadData = await req.json();

    // Validate required fields
    if (!leadData.fullName || !leadData.mobile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Send to your CRM/Database
    // Example integrations:
    // 1. Save to database (Prisma, MongoDB, etc.)
    // 2. Send to n8n webhook
    // 3. Send to Google Sheets
    // 4. Send to CRM (Salesforce, HubSpot, etc.)

    // Example: Send to n8n webhook
    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK;
    
    if (n8nWebhookUrl) {
      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          leadType: 'eligibility_checker',
          stage: 'contacted', // Lead captured, quiz not completed yet
        }),
      });
    }

    // CRITICAL: Also send SMS/WhatsApp immediately
    // Example: Send via Twilio, MSG91, or n8n
    // This is the "immediate engagement" message

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
    });
  } catch (error) {
    console.error('Error capturing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}