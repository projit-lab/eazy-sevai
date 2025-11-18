# e-Sevai Franchise Website

A modern, full-stack Next.js application for government service facilitation including Aadhaar, Passport, and Certificate services.

## 🚀 Features

- **Service Management**: Comprehensive service listings for Aadhaar, Passport, and Certificates
- **Dynamic Forms**: Custom forms for each service with file upload support
- **OTP Verification**: Phone number verification with OTP
- **Payment Integration**: Ready for Razorpay/Instamojo integration
- **n8n Integration**: Webhook endpoints for automation workflows
- **Analytics**: Google Analytics 4 and Meta Pixel integration
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type-Safe**: Built with TypeScript for reliability
- **Modern UI**: shadcn/ui components for beautiful interfaces

## 📋 Prerequisites

- Node.js 18+ and npm
- n8n instance (for workflow automation)
- Payment gateway account (Razorpay or Instamojo)
- SMS gateway account (for OTP - optional)

## 🛠️ Installation

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
- n8n webhook URLs
- Payment gateway credentials
- Analytics IDs (GA4, Meta Pixel)
- SMS gateway credentials (optional)

3. **Run development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
esevai/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes for n8n integration
│   ├── services/             # Service pages and application forms
│   ├── payment/              # Payment page
│   ├── contact/              # Contact page
│   └── ...                   # Other pages
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── analytics/            # Analytics components
│   └── ...                   # Custom components
├── lib/                      # Utility functions and data
│   ├── services.ts           # Service definitions
│   ├── constants.ts          # App constants
│   └── metadata.ts           # SEO helpers
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

## 🔧 Configuration

### n8n Workflows Setup

Create the following workflows in n8n:

1. **Form Submission Workflow**:
   - Receives application data from website
   - Creates Zendesk ticket
   - Sends confirmation email

2. **Payment Confirmation Workflow**:
   - Receives payment webhook
   - Updates Zendesk ticket
   - Sends WhatsApp message
   - Assigns to support queue

3. **Inquiry Workflow**:
   - Receives contact form submissions
   - Creates Zendesk ticket for general inquiries
   - Sends confirmation email

Set the webhook URLs in `.env.local`:
```env
NEXT_PUBLIC_N8N_FORM_WEBHOOK=https://your-n8n.com/webhook/form
NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK=https://your-n8n.com/webhook/payment
NEXT_PUBLIC_N8N_INQUIRY_WEBHOOK=https://your-n8n.com/webhook/inquiry
```

### Payment Gateway Integration

#### Razorpay (Recommended)
1. Sign up at [Razorpay](https://razorpay.com)
2. Get API keys from Dashboard
3. Add to `.env.local`:
```env
NEXT_PUBLIC_RAZORPAY_KEY=rzp_test_xxxxx
RAZORPAY_SECRET=your_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```
4. Uncomment Razorpay code in `app/api/create-payment/route.ts`

#### Instamojo (Alternative)
1. Sign up at [Instamojo](https://instamojo.com)
2. Get API credentials
3. Add to `.env.local` and implement integration

### Analytics Setup

1. **Google Analytics 4**:
   - Create GA4 property
   - Add measurement ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```

2. **Meta Pixel**:
   - Create Meta Pixel in Events Manager
   - Add pixel ID to `.env.local`:
   ```env
   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
   ```

## 🎨 Customization

### Update Contact Information
Edit `lib/constants.ts`:
```typescript
export const CONTACT = {
  phone: '+91-XXXXXXXXXX',
  whatsapp: '+91-XXXXXXXXXX',
  email: 'support@yourdomain.com',
  address: 'Your Office Address'
};
```

### Add/Modify Services
Edit `lib/services.ts` to add or modify services and their forms.

### Styling
- Global styles: `app/globals.css`
- Theme colors: Modify CSS variables in `app/globals.css`
- Components: Built with Tailwind CSS utility classes

## 📱 API Routes

- `/api/submit-application` - Handle form submissions
- `/api/create-payment` - Create payment orders
- `/api/payment-webhook` - Receive payment confirmations
- `/api/submit-inquiry` - Handle contact form
- `/api/verify-otp` - OTP verification (needs SMS gateway integration)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

Set environment variables in your hosting platform's dashboard.

## 📝 Environment Variables

Required variables:
- `NEXT_PUBLIC_SITE_URL` - Your website URL
- `NEXT_PUBLIC_N8N_FORM_WEBHOOK` - n8n form webhook
- `NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK` - n8n payment webhook
- `NEXT_PUBLIC_N8N_INQUIRY_WEBHOOK` - n8n inquiry webhook

Optional but recommended:
- Payment gateway credentials
- Analytics IDs
- SMS gateway credentials

See `.env.example` for complete list.

## 🔒 Security

- All file uploads should be validated and scanned
- Implement rate limiting on API routes
- Use HTTPS in production
- Verify payment webhooks with signatures
- Store sensitive data encrypted
- Regular security audits

## 🤝 Support

For questions or issues:
- Email: support@esevai.com
- Phone: +91-XXXXXXXXXX

## 📄 License

Proprietary - All rights reserved

## ⚠️ Disclaimer

This is a facilitation service website and NOT an official government portal. All government fees are paid separately through official channels.
