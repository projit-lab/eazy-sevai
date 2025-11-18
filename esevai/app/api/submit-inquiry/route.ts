import { NextRequest, NextResponse } from "next/server";
import { N8N_WEBHOOK_URLS } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate inquiry ID
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

    // Prepare data for n8n webhook
    const webhookPayload = {
      inquiryId,
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      type: "general_inquiry",
      source: "contact_form",
    };

    // Send to n8n webhook
    if (N8N_WEBHOOK_URLS.inquiryWebhook) {
      const webhookResponse = await fetch(N8N_WEBHOOK_URLS.inquiryWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error("n8n webhook failed:", await webhookResponse.text());
        // Continue even if webhook fails
      }
    }

    // This will trigger:
    // 1. Zendesk ticket creation
    // 2. Email notification to customer
    // 3. Internal team notification
    // All handled by n8n workflow

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: "Inquiry submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}


