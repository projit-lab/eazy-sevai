# Eazy Sevai Setup Guide

This guide will help you get the Eazy Sevai website up and running.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file:
```bash
cp .env.example .env.local
```

Update `.env.local` with your actual values:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# n8n Webhooks (Essential for functionality)
NEXT_PUBLIC_N8N_FORM_WEBHOOK=https://your-n8n-instance.com/webhook/form-submission
NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK=https://your-n8n-instance.com/webhook/payment-confirmation
NEXT_PUBLIC_N8N_INQUIRY_WEBHOOK=https://your-n8n-instance.com/webhook/inquiry

# Payment Gateway (Choose one)
NEXT_PUBLIC_RAZORPAY_KEY=rzp_test_xxxxx
RAZORPAY_SECRET=xxxxx

# Analytics (Optional but recommended)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

### 3. Update Contact Information

Edit `lib/constants.ts` with your actual contact details:

```typescript
export const CONTACT = {
  phone: '+91-9876543210',
  whatsapp: '+91-9876543210',
  email: 'support@yourdomain.com',
  address: '123 Main Street, City, State - 123456'
};
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## n8n Workflow Setup

### Workflow 1: Form Submission Handler

**Webhook URL**: `/webhook/form-submission`

**Receives**:
```json
{
  "applicationId": "APP-xxx",
  "serviceId": "aadhaar-new",
  "userData": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "..."
  },
  "formData": { ... },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Actions**:
1. Create Zendesk ticket with status "pending_payment"
2. Send confirmation email to user
3. Store data for later processing

### Workflow 2: Payment Confirmation Handler

**Webhook URL**: `/webhook/payment-confirmation`

**Receives**:
```json
{
  "event": "payment.captured",
  "paymentId": "pay_xxx",
  "orderId": "ORDER-xxx",
  "amount": 150,
  "applicationId": "APP-xxx",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Actions**:
1. Update Zendesk ticket status to "Ready to Process"
2. Send WhatsApp message: "Payment received. We'll contact you within 24 hours."
3. Assign ticket to operator queue
4. Send payment receipt email

### Workflow 3: General Inquiry Handler

**Webhook URL**: `/webhook/inquiry`

**Receives**:
```json
{
  "inquiryId": "INQ-xxx",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Question about Passport",
  "message": "...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Actions**:
1. Create Zendesk ticket with type "General Inquiry"
2. Send auto-reply email to user
3. Notify support team via email/Slack

## Payment Gateway Setup

### Option 1: Razorpay (Recommended)

1. Sign up at [https://razorpay.com](https://razorpay.com)
2. Get API keys from Dashboard → Settings → API Keys
3. Add to `.env.local`
4. Uncomment Razorpay integration code in:
   - `app/api/create-payment/route.ts`
   - `app/payment/page.tsx`
5. Set up webhooks in Razorpay Dashboard:
   - Webhook URL: `https://yourdomain.com/api/payment-webhook`
   - Events: `payment.captured`, `payment.failed`

### Option 2: Instamojo

1. Sign up at [https://instamojo.com](https://instamojo.com)
2. Get API credentials
3. Implement integration (refer to Instamojo docs)

## WhatsApp Integration

### Via n8n + Twilio/360Dialog

1. Set up WhatsApp Business API with provider (Twilio/360Dialog)
2. In n8n, add WhatsApp nodes to workflows
3. Configure message templates in WhatsApp Business Manager
4. Test message delivery

**Example Messages**:

**After Payment**:
```
✅ Payment received!

Application ID: {applicationId}
Service: {serviceName}
Amount: ₹{amount}

Our representative will contact you within 24 hours for verification.

Need help? WhatsApp us or call +91-XXXXXXXXXX
```

**After Submission**:
```
🎉 Application submitted successfully!

Your {serviceName} application has been submitted to the government portal.

We'll keep you updated via WhatsApp.

Application ID: {applicationId}
```

## Zendesk Integration

### Setup

1. Create Zendesk account or use existing
2. Get API credentials:
   - Subdomain
   - Admin email
   - API token
3. Configure in n8n Zendesk nodes

### Custom Fields (Recommended)

Add these custom fields in Zendesk:
- `application_id` (Text)
- `service_type` (Dropdown)
- `payment_status` (Dropdown: pending/paid/refunded)
- `government_fee` (Text)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Add all variables from `.env.local` in:
Settings → Environment Variables

### Custom Domain

1. Add domain in Vercel
2. Update DNS records
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Services page shows all services
- [ ] Service detail pages work
- [ ] Application form submits successfully
- [ ] n8n receives form data
- [ ] Payment page loads
- [ ] Payment webhook works (test mode)
- [ ] Thank you page displays
- [ ] Contact form submits
- [ ] Analytics tracking works (check GA4/Meta)
- [ ] WhatsApp messages sent (via n8n)
- [ ] Zendesk tickets created

## Common Issues

### Forms not submitting
- Check n8n webhook URL is correct
- Verify n8n workflow is active
- Check browser console for errors

### Payment not working
- Verify payment gateway keys
- Check if test mode is enabled
- Review API logs

### WhatsApp not sending
- Verify WhatsApp Business API setup
- Check n8n WhatsApp node configuration
- Review message template approval status

## Support

For technical issues, check:
1. Browser console for errors
2. Next.js dev server logs
3. n8n execution logs
4. Payment gateway dashboard logs

Need help? Contact the development team.


