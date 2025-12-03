import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, serviceName, serviceSlug, applicationId, userData } = body;

    // Validate required fields
    if (!amount || !serviceName || !serviceSlug || !applicationId || !userData) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert amount to paise (Razorpay uses smallest currency unit)
    const amountInPaise = Math.round(amount * 100);

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: applicationId,
      notes: {
        applicationId,
        serviceName,
        serviceSlug,
        customerName: userData.name,
        customerEmail: userData.email,
        customerPhone: userData.phone,
      },
    });

    // Send order created event to N8N (optional tracking)
    const n8nWebhook = process.env.N8N_ORDER_CREATED_WEBHOOK;
    if (n8nWebhook) {
      try {
        await fetch(n8nWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: order.id,
            applicationId,
            serviceName,
            serviceSlug,
            amount: amount,
            amountInPaise: amountInPaise,
            userData,
            createdAt: new Date().toISOString(),
            status: 'created',
          }),
        });
      } catch (webhookError) {
        console.error('N8N webhook error (non-critical):', webhookError);
      }
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      applicationId,
      razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });

  } catch (error: any) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create payment order' 
      },
      { status: 500 }
    );
  }
}