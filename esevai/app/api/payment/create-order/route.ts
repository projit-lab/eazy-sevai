// app/api/create-order/route.ts
// ✅ CORRECTED - Use this version
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const { amount, serviceName, serviceSlug } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency: 'INR',
      receipt: `${serviceSlug}_${Date.now()}`,
      notes: {
        serviceName,
        serviceSlug,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ✅ CORRECT
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}