// app/api/payment-webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = body.event;
    const paymentData = body.payload?.payment?.entity || {};

    if (event === 'payment.captured') {
      const paymentId = paymentData.id;
      const orderId = paymentData.order_id;
      const amount = paymentData.amount / 100;
      const applicationId = paymentData.notes?.applicationId;

      if (process.env.NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK) {
        await fetch(process.env.NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'payment.captured',
            paymentId,
            orderId,
            amount,
            applicationId,
            timestamp: new Date().toISOString(),
          }),
        });
      }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}