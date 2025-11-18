import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicationId, amount, serviceName, userData, gateway = 'razorpay' } = body;

    if (!applicationId || !amount || !serviceName || !userData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // RAZORPAY PAYMENT
    if (gateway === 'razorpay') {
      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        return NextResponse.json(
          { error: 'Razorpay not configured' },
          { status: 500 }
        );
      }

      const Razorpay = require('razorpay');
      
      const razorpay = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        receipt: applicationId,
        notes: {
          applicationId,
          serviceName,
          userName: userData.name,
          userEmail: userData.email,
          userPhone: userData.phone,
        },
      });

      return NextResponse.json({
        success: true,
        gateway: 'razorpay',
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      });
    }

    // STRIPE PAYMENT
    if (gateway === 'stripe') {
      if (!process.env.STRIPE_SECRET_KEY) {
        return NextResponse.json(
          { error: 'Stripe not configured' },
          { status: 500 }
        );
      }

      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: serviceName,
                description: `Application ID: ${applicationId}`,
              },
              unit_amount: Math.round((amount / 80) * 100), // Convert INR to USD cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?ref=${applicationId}&payment=success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment?applicationId=${applicationId}`,
        metadata: {
          applicationId,
          serviceName,
        },
      });

      return NextResponse.json({
        success: true,
        gateway: 'stripe',
        checkoutUrl: session.url,
        sessionId: session.id,
      });
    }

    return NextResponse.json(
      { error: 'Invalid payment gateway' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
