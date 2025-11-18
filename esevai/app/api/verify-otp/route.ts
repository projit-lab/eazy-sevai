import { NextRequest, NextResponse } from "next/server";

// This is a placeholder for OTP verification
// In production, integrate with SMS gateway (e.g., Twilio, MSG91, etc.)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, otp, action } = body;

    if (action === "send") {
      // TODO: Integrate with SMS gateway to send OTP
      /*
      const MSG91_API_KEY = process.env.MSG91_API_KEY;
      const MSG91_TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID;
      
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      const response = await fetch('https://api.msg91.com/api/v5/otp', {
        method: 'POST',
        headers: {
          'authkey': MSG91_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template_id: MSG91_TEMPLATE_ID,
          mobile: phone,
          otp: otpCode,
        }),
      });
      */

      // For demo purposes, generate and store OTP (in production, use Redis/Database)
      const otpCode = "123456"; // Mock OTP for testing

      return NextResponse.json(
        {
          success: true,
          message: "OTP sent successfully",
          // Don't send OTP in response in production
          debug_otp: process.env.NODE_ENV === "development" ? otpCode : undefined,
        },
        { status: 200 }
      );
    }

    if (action === "verify") {
      // TODO: Verify OTP from storage (Redis/Database)
      // For demo purposes, accept "123456" as valid OTP
      const isValid = otp === "123456";

      return NextResponse.json(
        {
          success: isValid,
          message: isValid ? "OTP verified successfully" : "Invalid OTP",
        },
        { status: isValid ? 200 : 400 }
      );
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { error: "OTP operation failed" },
      { status: 500 }
    );
  }
}


