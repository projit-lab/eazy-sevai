import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log('=== 🚀 FORM SUBMISSION RECEIVED ===');
    
    const formData = await request.formData();
    const serviceId = formData.get("serviceId") as string;
    const userData = JSON.parse(formData.get("userData") as string);
    const submittedFormData = JSON.parse(formData.get("formData") as string);

    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Map service ID to readable name
    const serviceNameMap: Record<string, string> = {
      'aadhaar-new': 'New Aadhaar Enrollment',
      'aadhaar-update': 'Aadhaar Update',
      'passport-new': 'New Passport Application',
      'passport-renewal': 'Passport Renewal',
      'birth-certificate': 'Birth Certificate',
      'death-certificate': 'Death Certificate',
      'marriage-certificate': 'Marriage Certificate',
    };

    const applicationData = {
      applicationId,
      serviceId,
      serviceName: serviceNameMap[serviceId] || serviceId,
      userData,
      formData: submittedFormData, // Includes file URLs
      timestamp: new Date().toISOString(),
      paymentStatus: 'pending',
    };

    console.log('🔍 EXACT DATA BEING SENT TO N8N:');
console.log(JSON.stringify(applicationData, null, 2));

    console.log('📦 Application Data:', JSON.stringify(applicationData, null, 2));
    console.log('🔗 n8n Webhook URL:', process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK);

    // Send to n8n immediately to create Zendesk ticket
    if (process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK) {
      console.log('⏳ Sending to n8n...');
      
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(applicationData),
        });

        const responseText = await response.text();
        console.log('✅ n8n Response Status:', response.status);
        console.log('📄 n8n Response Body:', responseText);

        if (!response.ok) {
          console.error('❌ n8n responded with error');
        }
      } catch (fetchError) {
        console.error('❌ Error calling n8n:', fetchError);
      }
    } else {
      console.log('⚠️ N8N webhook URL not configured!');
    }

    return NextResponse.json({
      success: true,
      applicationId,
    });
  } catch (error) {
    console.error("❌ Submission error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}