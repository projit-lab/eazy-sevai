import { Service, ServiceForm, FormField } from '@/types/service';

export const SERVICES: Service[] = [
  // Aadhaar Services
  {
    id: 'aadhaar-new',
    name: 'New Aadhaar Enrollment',
    slug: 'new-aadhaar-enrollment',
    category: 'aadhaar',
    description: 'Get your new Aadhaar card with our complete assistance. We handle the entire process from documentation to biometric enrollment.',
    shortDescription: 'Complete assistance for new Aadhaar enrollment',
    fee: 150,
    governmentFee: 'Free (Government of India)',
    processingTime: '15-30 days',
    requiredDocuments: [
      'Proof of Identity (Birth Certificate, PAN Card, Passport, etc.)',
      'Proof of Address (Electricity Bill, Ration Card, etc.)',
      'Date of Birth Proof',
      'Recent Passport Size Photo'
    ],
    icon: 'FileText'
  },
  {
    id: 'aadhaar-update',
    name: 'Aadhaar Update',
    slug: 'aadhaar-update',
    category: 'aadhaar',
    description: 'Update your existing Aadhaar details including name, address, mobile number, or email. Quick and hassle-free service.',
    shortDescription: 'Update name, address, mobile, or email',
    fee: 100,
    governmentFee: '₹50 per update',
    processingTime: '7-15 days',
    requiredDocuments: [
      'Aadhaar Card (Original)',
      'Supporting documents for the update',
      'Recent Passport Size Photo (if updating photo)'
    ],
    icon: 'Edit'
  },
  {
    id: 'aadhaar-address-change',
    name: 'Aadhaar Address Change',
    slug: 'aadhaar-address-change',
    category: 'aadhaar',
    description: 'Change or update your address on Aadhaar card with complete documentation support.',
    shortDescription: 'Update address on Aadhaar',
    fee: 100,
    governmentFee: '₹50',
    processingTime: '7-15 days',
    requiredDocuments: [
      'Current Aadhaar Card',
      'New Address Proof (Electricity Bill, Rent Agreement, etc.)',
      'Recent Passport Size Photo'
    ],
    icon: 'MapPin'
  },
  {
    id: 'aadhaar-biometric-update',
    name: 'Biometric Update',
    slug: 'biometric-update',
    category: 'aadhaar',
    description: 'Update your fingerprints, iris scan, or photograph in Aadhaar database.',
    shortDescription: 'Update fingerprints, iris, or photo',
    fee: 120,
    governmentFee: '₹50',
    processingTime: '7-10 days',
    requiredDocuments: [
      'Aadhaar Card (Original)',
      'Mobile number linked to Aadhaar',
      'Recent Passport Size Photo'
    ],
    icon: 'Fingerprint'
  },

  // Passport Services
  {
    id: 'passport-new',
    name: 'New Passport Application',
    slug: 'new-passport-application',
    category: 'passport',
    description: 'Apply for a fresh passport with complete documentation and form filling assistance. We guide you through every step.',
    shortDescription: 'Apply for new passport',
    fee: 500,
    governmentFee: '₹1,500 (Normal) / ₹3,500 (Tatkal)',
    processingTime: '30-45 days (Normal) / 7-10 days (Tatkal)',
    requiredDocuments: [
      'Proof of Identity (Aadhaar, PAN, Voter ID)',
      'Proof of Address (Electricity Bill, Ration Card)',
      'Date of Birth Proof (Birth Certificate, 10th Certificate)',
      'Recent Passport Size Photos (white background)',
      'Annexures (if applicable)'
    ],
    icon: 'Plane'
  },
  {
    id: 'passport-renewal',
    name: 'Passport Renewal',
    slug: 'passport-renewal',
    category: 'passport',
    description: 'Renew your expired or expiring passport. Fast and efficient service with minimal documentation.',
    shortDescription: 'Renew expired passport',
    fee: 400,
    governmentFee: '₹1,500 (Normal) / ₹3,500 (Tatkal)',
    processingTime: '30-45 days (Normal) / 7-10 days (Tatkal)',
    requiredDocuments: [
      'Old/Expired Passport (Original)',
      'Current Address Proof',
      'Recent Passport Size Photos',
      'Aadhaar Card'
    ],
    icon: 'RefreshCw'
  },
  {
    id: 'passport-lost',
    name: 'Lost Passport Assistance',
    slug: 'lost-passport-assistance',
    category: 'passport',
    description: 'Report lost passport and apply for reissue with complete legal documentation support.',
    shortDescription: 'Report lost passport and reissue',
    fee: 600,
    governmentFee: '₹3,000 + ₹500 (Police Verification)',
    processingTime: '45-60 days',
    requiredDocuments: [
      'FIR Copy (Police Report)',
      'Affidavit for Lost Passport',
      'Proof of Identity and Address',
      'Recent Passport Size Photos',
      'Previous Passport Details (if available)'
    ],
    icon: 'AlertCircle'
  },

  // Certificate Services
  {
    id: 'income-certificate',
    name: 'Income Certificate',
    slug: 'income-certificate',
    category: 'certificate',
    description: 'Apply for income certificate issued by Tehsildar or Revenue Department.',
    shortDescription: 'Get income certificate',
    fee: 200,
    governmentFee: 'As per state norms',
    processingTime: '7-15 days',
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card',
      'Salary Slips / Income Proof',
      'Address Proof',
      'Recent Passport Size Photo'
    ],
    icon: 'IndianRupee'
  },
  {
    id: 'community-certificate',
    name: 'Community Certificate',
    slug: 'community-certificate',
    category: 'certificate',
    description: 'Apply for caste/community certificate for educational or employment purposes.',
    shortDescription: 'Get caste/community certificate',
    fee: 200,
    governmentFee: 'As per state norms',
    processingTime: '15-30 days',
    requiredDocuments: [
      'Aadhaar Card',
      'Birth Certificate',
      'Address Proof',
      'Parents Community Certificate (if available)',
      'Recent Passport Size Photo'
    ],
    icon: 'Users'
  },
  {
    id: 'nativity-certificate',
    name: 'Nativity Certificate',
    slug: 'nativity-certificate',
    category: 'certificate',
    description: 'Get nativity/domicile certificate proving your residence in the state.',
    shortDescription: 'Get domicile certificate',
    fee: 200,
    governmentFee: 'As per state norms',
    processingTime: '15-30 days',
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card',
      'Birth Certificate',
      'Address Proof (10+ years)',
      'Educational Certificates',
      'Recent Passport Size Photo'
    ],
    icon: 'Home'
  }
];

export const SERVICE_FORMS: Record<string, ServiceForm> = {
  'aadhaar-new': {
    serviceId: 'aadhaar-new',
    fields: [
      { name: 'fullName', label: 'Full Name (as per documents)', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'text', required: true, placeholder: 'DD/MM/YYYY' },
      { name: 'gender', label: 'Gender', type: 'select', required: true, options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
      ]},
      { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
      { name: 'currentAddress', label: 'Current Address', type: 'textarea', required: true },
      { name: 'proofOfIdentity', label: 'Proof of Identity', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'proofOfAddress', label: 'Proof of Address', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'dobProof', label: 'Date of Birth Proof', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'photo', label: 'Recent Passport Size Photo', type: 'file', required: true, accept: '.jpg,.jpeg,.png', maxSize: 2 }
    ]
  },
  'aadhaar-update': {
    serviceId: 'aadhaar-update',
    fields: [
      { name: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: true, placeholder: 'XXXX-XXXX-XXXX' },
      { name: 'updateType', label: 'What do you want to update?', type: 'select', required: true, options: [
        { label: 'Name', value: 'name' },
        { label: 'Address', value: 'address' },
        { label: 'Mobile Number', value: 'mobile' },
        { label: 'Email', value: 'email' },
        { label: 'Photo', value: 'photo' }
      ]},
      { name: 'currentDetails', label: 'Current Details (as on Aadhaar)', type: 'textarea', required: true },
      { name: 'newDetails', label: 'New/Updated Details', type: 'textarea', required: true },
      { name: 'aadhaarCopy', label: 'Aadhaar Card Copy', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'supportingDoc', label: 'Supporting Document for Update', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 }
    ]
  },
  'passport-new': {
    serviceId: 'passport-new',
    fields: [
      { name: 'fullName', label: 'Full Name (as per documents)', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'text', required: true, placeholder: 'DD/MM/YYYY' },
      { name: 'placeOfBirth', label: 'Place of Birth', type: 'text', required: true },
      { name: 'gender', label: 'Gender', type: 'select', required: true, options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
      ]},
      { name: 'maritalStatus', label: 'Marital Status', type: 'select', required: true, options: [
        { label: 'Single', value: 'single' },
        { label: 'Married', value: 'married' },
        { label: 'Divorced', value: 'divorced' },
        { label: 'Widowed', value: 'widowed' }
      ]},
      { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
      { name: 'motherName', label: "Mother's Name", type: 'text', required: true },
      { name: 'currentAddress', label: 'Current Address', type: 'textarea', required: true },
      { name: 'applicationType', label: 'Application Type', type: 'select', required: true, options: [
        { label: 'Normal', value: 'normal' },
        { label: 'Tatkal', value: 'tatkal' }
      ]},
      { name: 'identityProof', label: 'Proof of Identity', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'addressProof', label: 'Proof of Address', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'dobProof', label: 'Date of Birth Proof', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'photos', label: 'Passport Size Photos (2 copies)', type: 'file', required: true, accept: '.jpg,.jpeg,.png', maxSize: 2 }
    ]
  },
  'income-certificate': {
    serviceId: 'income-certificate',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'fatherName', label: "Father's Name", type: 'text', required: true },
      { name: 'occupation', label: 'Occupation', type: 'text', required: true },
      { name: 'annualIncome', label: 'Annual Income (₹)', type: 'text', required: true },
      { name: 'purpose', label: 'Purpose of Certificate', type: 'text', required: true, placeholder: 'e.g., Educational scholarship, Loan application' },
      { name: 'currentAddress', label: 'Current Address', type: 'textarea', required: true },
      { name: 'aadhaarCopy', label: 'Aadhaar Card Copy', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'incomeProof', label: 'Income Proof (Salary Slips/ITR)', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 },
      { name: 'addressProof', label: 'Address Proof', type: 'file', required: true, accept: '.pdf,.jpg,.jpeg,.png', maxSize: 2 }
    ]
  }
};

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(service => service.id === id);
}

export function getServicesByCategory(category: string): Service[] {
  return SERVICES.filter(service => service.category === category);
}

export function getServiceForm(serviceId: string): ServiceForm | undefined {
  return SERVICE_FORMS[serviceId];
}


