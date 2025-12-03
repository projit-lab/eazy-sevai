import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json(
        { success: false, error: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Parse the webhook body
    const webhookData = JSON.parse(body);
    const event = webhookData.event;
    const payload = webhookData.payload?.payment?.entity || webhookData.payload?.order?.entity;

    // Send webhook event to N8N for processing
    const n8nWebhook = process.env.N8N_PAYMENT_WEBHOOK;
    if (n8nWebhook) {
      try {
        await fetch(n8nWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event,
            payload,
            receivedAt: new Date().toISOString(),
            verified: true,
          }),
        });
      } catch (webhookError) {
        console.error('N8N webhook error:', webhookError);
      }
    }

    // Log the event
    console.log('Razorpay webhook received:', {
      event,
      orderId: payload?.order_id,
      paymentId: payload?.id,
      status: payload?.status,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to process webhook' 
      },
      { status: 500 }
    );
  }
}