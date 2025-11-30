export const SITE_NAME = 'Eazy Sevai';
export const SITE_DESCRIPTION = 'Government Services Made Simple — Apply Online for Aadhaar & Passport Assistance';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://Eazy Sevai.com';

export const CONTACT = {
  phone: '7845495937',
  whatsapp: '061411888504',
  email: 'support@Eazy Sevai.com',
  address: 'Your Office Address, City, State - PIN CODE'
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/Eazy Sevai',
  twitter: 'https://twitter.com/Eazy Sevai',
  instagram: 'https://instagram.com/Eazy Sevai'
};

export const SERVICE_CATEGORIES = [
  {
    id: 'aadhaar',
    name: 'Aadhaar Services',
    description: 'New enrollment, updates, and corrections',
    icon: 'FileText'
  },
  {
    id: 'passport',
    name: 'Passport Services',
    description: 'New passport, renewal, and lost passport',
    icon: 'Plane'
  },
  {
    id: 'certificate',
    name: 'Certificate Services',
    description: 'Income, community, and nativity certificates',
    icon: 'Award'
  }
];

export const WORKING_HOURS = {
  weekdays: '9:00 AM - 6:00 PM',
  saturday: '9:00 AM - 2:00 PM',
  sunday: 'Closed'
};

export const N8N_WEBHOOK_URLS = {
  formSubmission: process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK || '',
  paymentWebhook: process.env.NEXT_PUBLIC_N8N_PAYMENT_WEBHOOK || '',
  inquiryWebhook: process.env.NEXT_PUBLIC_N8N_INQUIRY_WEBHOOK || ''
};

export const PAYMENT_CONFIG = {
  razorpayKey: process.env.NEXT_PUBLIC_RAZORPAY_KEY || '',
  instamojoKey: process.env.NEXT_PUBLIC_INSTAMOJO_KEY || ''
};

export const ANALYTICS_IDS = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || '',
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
};


