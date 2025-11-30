export type ServiceCategory = 'aadhaar' | 'passport' | 'certificate' | 'personal-family' | 'business-licensing' | 'property-assets' | 'social-pension' | 'student-education';

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  description: string;
  shortDescription: string;
  fee: number;
  governmentFee: string;
  processingTime: string;
  requiredDocuments: string[];
  icon: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'file' | 'select' | 'textarea' | 'checkbox';
  required: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  accept?: string;
  maxSize?: number;
}

export interface ServiceForm {
  serviceId: string;
  fields: FormField[];
}

export interface FormSubmission {
  serviceId: string;
  userData: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  formData: Record<string, any>;
  files: File[];
  consent: boolean;
  timestamp: Date;
}


