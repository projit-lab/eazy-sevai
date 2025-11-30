import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const resultData = await req.json();

    const {
      mobile,
      email,
      pensionType,
      eligibilityResult, // 'high' or 'low'
      answers,
      timestamp,
    } = resultData;

    // TODO: Save result to database
    // Update lead record with quiz completion and result

    // TODO: Trigger nurture sequence based on result
    // This is where you integrate with your SMS/WhatsApp automation

    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_INQUIRY_WEBHOOK;
    
    if (n8nWebhookUrl) {
      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobile,
          email,
          pensionType,
          eligibilityResult,
          quizAnswers: answers,
          timestamp,
          leadType: 'eligibility_checker_completed',
          stage: eligibilityResult === 'high' ? 'qualified' : 'nurture',
        }),
      });
    }

    // CRITICAL: Trigger immediate SMS/WhatsApp based on result
    // 
    // For HIGH LIKELIHOOD:
    // Message: "Thank you for using the Checker! Here are your results (High Likelihood). 
    //           Ready to apply? Our experts are here to help: [LINK]"
    // 
    // For LOW LIKELIHOOD:
    // Message: "Thank you for using the Checker. Based on the complex rules, you may need 
    //           expert review. Book a consultation: [LINK]"

    // Example SMS/WhatsApp integration (via n8n, Twilio, MSG91, etc.)
    const message = eligibilityResult === 'high'
      ? `✅ Great news! You're likely eligible for ${pensionType === 'oap' ? 'Old Age Pension' : 'Widow Pension'}. 

Don't risk rejection - apply with professional help for guaranteed accuracy.

Click here to start: https://yourdomain.com/services/${pensionType === 'oap' ? 'old-age-pension' : 'widow-pension'}

- Eazy Sevai Team`
      : `⚠️ Based on the eligibility rules, you may face challenges. 

Don't apply without expert review - avoid 6-12 month delays.

Book expert consultation (₹590): https://yourdomain.com/services/pension-consultation

- Eazy Sevai Team`;

    // TODO: Actually send the SMS/WhatsApp message here
    // await sendWhatsAppMessage(mobile, message);

    return NextResponse.json({
      success: true,
      message: 'Result processed and nurture sequence triggered',
    });
  } catch (error) {
    console.error('Error processing result:', error);
    return NextResponse.json(
      { error: 'Failed to process result' },
      { status: 500 }
    );
  }
}