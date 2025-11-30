// Service-specific form field configurations
// Based on Mandate 2: Service-Specific Document and Data Collection
// FIXED: Corrected slug mappings to match services.ts

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'file' | 'date' | 'select' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  
  // Documentation fields
  helpText?: string;   // Legacy support
  helperText?: string; // New standard
  
  // UI/UX fields
  rows?: number;
  accept?: string;     // For file inputs
  conditionalDisplay?: {
    field: string;
    values: string[];
  };

  // Validation
  validation?: {
    pattern?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    message?: string;
  };
}

export interface ServiceFormConfig {
  serviceCode: string;
  serviceName: string;
  requiredDocuments: string[];
  formFields: FormField[];
  complianceNotes?: string;
}

// ========================================
// GROUP 1: STUDENT & EDUCATION SOLUTIONS
// ========================================

export const COMMUNITY_CERTIFICATE_FORM: ServiceFormConfig = {
  serviceCode: 'REV-101',
  serviceName: 'Community Certificate',
  requiredDocuments: [
    'Applicant Passport Photo',
    'Proof of Address (Ration Card/Utility Bill)',
    'Community Certificate of Father/Mother/Sibling',
    'Self-Declaration Affidavit',
  ],
  formFields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name of Applicant',
      type: 'text',
      required: true,
      placeholder: 'As per Aadhaar',
    },
    {
      id: 'fatherName',
      name: 'fatherName',
      label: "Father's Full Name",
      type: 'text',
      required: true,
    },
    {
      id: 'motherName',
      name: 'motherName',
      label: "Mother's Full Name",
      type: 'text',
      required: true,
    },
    {
      id: 'siblings',
      name: 'siblings',
      label: 'Names of All Siblings (comma-separated)',
      type: 'textarea',
      required: true,
      placeholder: 'List all siblings, or write "None" if no siblings',
      helpText: 'Critical: List ALL siblings to prevent rejection',
    },
    {
      id: 'casteSubcaste',
      name: 'casteSubcaste',
      label: 'Caste/Sub-caste',
      type: 'text',
      required: true,
      placeholder: 'e.g., BC-Muslim, MBC, SC, ST',
    },
    {
      id: 'residencyDuration',
      name: 'residencyDuration',
      label: 'Duration of Residency in Tamil Nadu',
      type: 'text',
      required: true,
      placeholder: 'e.g., 20 years, Since birth',
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: false,
    },
  ],
};

export const INCOME_CERTIFICATE_FORM: ServiceFormConfig = {
  serviceCode: 'REV-103',
  serviceName: 'Income Certificate',
  requiredDocuments: [
    'Applicant Photo',
    'Address Proof',
    'Aadhaar Card',
    'Salary Slip (if employed) or Income Affidavit',
    'Ration Card',
    'Proof of Schooling (for students)',
  ],
  formFields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name of Applicant',
      type: 'text',
      required: true,
    },
    {
      id: 'annualIncome',
      name: 'annualIncome',
      label: 'Exact Annual Family Income (₹)',
      type: 'number',
      required: true,
      placeholder: 'Total yearly income',
      helpText: 'Include ALL sources: salary, business, agriculture, etc.',
    },
    {
      id: 'incomeSource',
      name: 'incomeSource',
      label: 'Source of Income (Breakdown)',
      type: 'textarea',
      required: true,
      placeholder: 'e.g., Salary: ₹2,00,000, Agriculture: ₹50,000',
    },
    {
      id: 'fatherOccupation',
      name: 'fatherOccupation',
      label: "Father's/Guardian's Occupation",
      type: 'text',
      required: true,
    },
    {
      id: 'numberOfDependents',
      name: 'numberOfDependents',
      label: 'Number of Dependents in Family',
      type: 'number',
      required: true,
      validation: { min: 0 },
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
};

export const FIRST_GRADUATE_FORM: ServiceFormConfig = {
  serviceCode: 'REV-104',
  serviceName: 'First Graduate Certificate',
  requiredDocuments: [
    "Applicant's Transfer Certificate (TC)",
    "Father's TC (proof of non-graduate status)",
    "Mother's TC (proof of non-graduate status)",
    'Affidavit declaring non-graduate status of parents',
    'TC/Educational Status of all siblings',
  ],
  formFields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name of Applicant',
      type: 'text',
      required: true,
    },
    {
      id: 'siblingsEducation',
      name: 'siblingsEducation',
      label: 'List ALL Siblings and Their Highest Educational Qualification',
      type: 'textarea',
      required: true,
      placeholder: 'e.g., Brother - Rajesh Kumar - 12th Pass, Sister - Priya Kumar - 10th Pass, OR write "None" if no siblings',
      helpText: '⚠️ CRITICAL: Sibling Trap Check - Any sibling with First Graduate Certificate = AUTOMATIC REJECTION',
    },
    {
      id: 'parentsEducation',
      name: 'parentsEducation',
      label: "Parents' Highest Educational Qualification",
      type: 'text',
      required: true,
      placeholder: 'e.g., Father: 8th Standard, Mother: 10th Standard',
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
  complianceNotes: 'Sibling Trap: Application will be rejected if ANY older sibling previously received First Graduate Certificate.',
};

// ========================================
// GROUP 2: PERSONAL & FAMILY SOLUTIONS
// ========================================

export const LEGAL_HEIR_FORM: ServiceFormConfig = {
  serviceCode: 'REV-114',
  serviceName: 'Legal Heir Certificate',
  requiredDocuments: [
    'Original Death Certificate of deceased',
    'Identity Proof of Applicant (Aadhaar/Voter ID)',
    'Identity Proof of ALL legal heirs',
    'Relationship Proofs (Birth/Marriage Certificates)',
    'Self-Undertaking Affidavit (₹20 stamp paper)',
  ],
  formFields: [
    {
      id: 'deceasedName',
      name: 'deceasedName',
      label: 'Full Name of Deceased',
      type: 'text',
      required: true,
    },
    {
      id: 'dateOfDeath',
      name: 'dateOfDeath',
      label: 'Date of Death',
      type: 'date',
      required: true,
    },
    {
      id: 'applicantName',
      name: 'applicantName',
      label: 'Applicant Name (Your Name)',
      type: 'text',
      required: true,
    },
    {
      id: 'relationToDeceased',
      name: 'relationToDeceased',
      label: 'Your Relationship to Deceased',
      type: 'select',
      required: true,
      options: [
        { value: 'spouse', label: 'Spouse (Wife/Husband)' },
        { value: 'son', label: 'Son' },
        { value: 'daughter', label: 'Daughter' },
        { value: 'mother', label: 'Mother' },
        { value: 'other', label: 'Other (Specify in notes)' },
      ],
    },
    {
      id: 'allLegalHeirs',
      name: 'allLegalHeirs',
      label: '⚠️ CRITICAL: Full Details of ALL Living Legal Heirs',
      type: 'textarea',
      required: true,
      placeholder: 'List EVERY legal heir:\n1. Name, Relationship, Age, Address\n2. Name, Relationship, Age, Address\n...',
      helpText: '🚨 WARNING: Suppressing ANY heir is a CRIMINAL OFFENSE (IPC 420, 199, 177). Leads to prosecution & jail time. Include ALL heirs even if estranged/abroad/uninterested.',
    },
    {
      id: 'confirmationCheckbox',
      name: 'confirmationCheckbox',
      label: 'I confirm ALL legal heirs are listed above',
      type: 'radio',
      required: true,
      options: [
        { value: 'yes', label: 'Yes, I have listed ALL legal heirs without exception' },
      ],
      helpText: 'False declaration can lead to criminal prosecution',
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
  complianceNotes: 'Criminal liability for heir suppression. Tahsildar conducts field verification.',
};

// ========================================
// GROUP 3: IDENTITY & RATION CARDS
// ========================================

export const VOTER_ID_FORM: ServiceFormConfig = {
  serviceCode: 'IDC-101',
  serviceName: 'Voter ID Card',
  requiredDocuments: [
    'Aadhaar Card',
    'Address Proof (Electricity Bill / Rental Agreement / Property Tax Receipt)',
    'Date of Birth Proof (Birth Certificate / School Certificate / Passport)',
    'Passport Size Photos (2 recent)',
    'Ration Card (if available)',
  ],
  formFields: [
    {
      id: 'applicationType',
      name: 'applicationType',
      label: 'Application Type',
      type: 'select',
      required: true,
      placeholder: 'Select application type',
      options: [
        { value: 'new', label: 'New Voter ID Enrollment' },
        { value: 'correction', label: 'Correction in Existing Card' },
        { value: 'address_change', label: 'Address Change (Within Same Constituency)' },
        { value: 'address_change_transfer', label: 'Address Change (Different Constituency)' },
        { value: 'duplicate', label: 'Duplicate Voter ID (Lost/Damaged)' },
        { value: 'deletion', label: 'Delete Duplicate/Wrong Entry' },
      ],
      helperText: 'Choose the type of application you want to submit',
    },
    
    // Personal Details
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name (as per Aadhaar)',
      type: 'text',
      required: true,
      placeholder: 'Enter full name',
      helperText: 'Must match exactly with your Aadhaar card',
    },
    {
      id: 'fatherHusbandName',
      name: 'fatherHusbandName',
      label: "Father's / Husband's Name",
      type: 'text',
      required: true,
      placeholder: "Enter father's or husband's name",
    },
    {
      id: 'dateOfBirth',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      required: true,
      helperText: 'You must be 18 years or older to apply',
    },
    {
      id: 'gender',
      name: 'gender',
      label: 'Gender',
      type: 'select',
      required: true,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
    },
    
    // Contact Details
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      placeholder: '10-digit mobile number',
      validation: {
        pattern: '^[6-9][0-9]{9}$',
        message: 'Enter valid 10-digit mobile number',
      },
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: false,
      placeholder: 'your.email@example.com',
      helperText: 'Optional - for application updates',
    },
    
    // Address Details
    {
      id: 'currentAddress',
      name: 'currentAddress',
      label: 'Current Residential Address',
      type: 'textarea',
      required: true,
      placeholder: 'House/Flat No, Street Name, Area',
      rows: 3,
      helperText: 'Provide complete address with landmarks',
    },
    {
      id: 'district',
      name: 'district',
      label: 'District',
      type: 'text',
      required: true,
      placeholder: 'Enter district name',
    },
    {
      id: 'constituency',
      name: 'constituency',
      label: 'Assembly Constituency',
      type: 'text',
      required: false,
      placeholder: 'If known',
      helperText: 'We will help identify if you are unsure',
    },
    {
      id: 'pincode',
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      required: true,
      placeholder: '6-digit pincode',
      validation: {
        pattern: '^[0-9]{6}$',
        message: 'Enter valid 6-digit pincode',
      },
    },
    
    // Existing Voter ID (for corrections/changes)
    {
      id: 'existingVoterId',
      name: 'existingVoterId',
      label: 'Existing Voter ID Number',
      type: 'text',
      required: false,
      placeholder: 'Enter your current Voter ID number',
      helperText: 'Required only for corrections, address changes, or duplicate requests',
      conditionalDisplay: {
        field: 'applicationType',
        values: ['correction', 'address_change', 'address_change_transfer', 'duplicate', 'deletion'],
      },
    },
    
    // Aadhaar Details
    {
      id: 'aadhaarNumber',
      name: 'aadhaarNumber',
      label: 'Aadhaar Number',
      type: 'text',
      required: true,
      placeholder: 'XXXX-XXXX-XXXX',
      validation: {
        pattern: '^[0-9]{12}$',
        message: 'Enter valid 12-digit Aadhaar number',
      },
      helperText: 'Your Aadhaar will be used for verification',
    },
    
    // Document Uploads
    {
      id: 'aadhaarDocument',
      name: 'aadhaarDocument',
      label: 'Upload Aadhaar Card (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Clear scan/photo of both sides',
    },
    {
      id: 'addressProof',
      name: 'addressProof',
      label: 'Upload Address Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Electricity bill, rent agreement, or property documents',
    },
    {
      id: 'ageProof',
      name: 'ageProof',
      label: 'Upload Age Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Birth certificate, school certificate, or passport',
    },
    {
      id: 'passport_photos',
      name: 'passport_photos',
      label: 'Upload Passport Size Photo',
      type: 'file',
      required: true,
      accept: '.jpg,.jpeg,.png',
      helperText: 'Recent color photo with white background',
    },
    
    // Additional Information
    {
      id: 'additionalNotes',
      name: 'additionalNotes',
      label: 'Additional Information / Special Requests',
      type: 'textarea',
      required: false,
      placeholder: 'Any specific requirements or clarifications',
      rows: 3,
    },
  ],
};

export const DRIVING_LICENSE_FORM: ServiceFormConfig = {
  serviceCode: 'IDC-102',
  serviceName: 'Driving License',
  requiredDocuments: [
    'Aadhaar Card',
    'Address Proof (Recent - within 3 months)',
    'Age Proof (Birth Certificate / School Certificate)',
    'Passport Size Photos (4 recent)',
    'Medical Certificate (for commercial licenses)',
    'Learner License (for permanent DL)',
    'Existing DL (for renewal/duplicate)',
  ],
  formFields: [
    {
      id: 'licenseType',
      name: 'licenseType',
      label: 'License Type',
      type: 'select',
      required: true,
      placeholder: 'Select license type',
      options: [
        { value: 'learner', label: "Learner's License (LL) - New" },
        { value: 'permanent_mcwg', label: 'Permanent DL - Two Wheeler (MCWG)' },
        { value: 'permanent_lmv', label: 'Permanent DL - Light Motor Vehicle (LMV/Car)' },
        { value: 'permanent_transport', label: 'Permanent DL - Transport Vehicle (LMV-TR/HMV)' },
        { value: 'add_vehicle_class', label: 'Add New Vehicle Class to Existing DL' },
        { value: 'renewal', label: 'License Renewal (Expired)' },
        { value: 'duplicate', label: 'Duplicate License (Lost/Damaged)' },
        { value: 'address_change', label: 'Address Change in Existing DL' },
        { value: 'international', label: 'International Driving Permit' },
      ],
      helperText: 'Choose the type of driving license application',
    },
    
    // Personal Details
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name (as per Aadhaar)',
      type: 'text',
      required: true,
      placeholder: 'Enter full name',
      helperText: 'Must match Aadhaar card exactly',
    },
    {
      id: 'fatherHusbandName',
      name: 'fatherHusbandName',
      label: "Father's / Husband's Name",
      type: 'text',
      required: true,
      placeholder: "Enter father's or husband's name",
    },
    {
      id: 'dateOfBirth',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      required: true,
      helperText: 'Minimum age: 16 for MCWG, 18 for LMV, 20 for Transport',
    },
    {
      id: 'bloodGroup',
      name: 'bloodGroup',
      label: 'Blood Group',
      type: 'select',
      required: true,
      options: [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
      ],
    },
    
    // Contact Details
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      placeholder: '10-digit mobile number',
      validation: {
        pattern: '^[6-9][0-9]{9}$',
        message: 'Enter valid 10-digit mobile number',
      },
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'your.email@example.com',
      helperText: 'Required for test slot booking and updates',
    },
    
    // Address Details
    {
      id: 'currentAddress',
      name: 'currentAddress',
      label: 'Current Residential Address',
      type: 'textarea',
      required: true,
      placeholder: 'House/Flat No, Street Name, Area',
      rows: 3,
    },
    {
      id: 'district',
      name: 'district',
      label: 'District',
      type: 'text',
      required: true,
      placeholder: 'Enter district name',
    },
    {
      id: 'pincode',
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      required: true,
      placeholder: '6-digit pincode',
      validation: {
        pattern: '^[0-9]{6}$',
        message: 'Enter valid 6-digit pincode',
      },
    },
    {
      id: 'preferredRto',
      name: 'preferredRto',
      label: 'Preferred RTO Office',
      type: 'select',
      required: true,
      options: [
        { value: 'chennai_central', label: 'Chennai Central RTO' },
        { value: 'chennai_north', label: 'Chennai North RTO' },
        { value: 'chennai_south', label: 'Chennai South RTO' },
        { value: 'chennai_east', label: 'Chennai East RTO' },
        { value: 'chennai_west', label: 'Chennai West RTO' },
        { value: 'ambattur', label: 'Ambattur RTO' },
        { value: 'other', label: 'Other Tamil Nadu RTO' },
      ],
      helperText: 'Choose the RTO office nearest to your address',
    },
    
    // Educational Qualification
    {
      id: 'educationalQualification',
      name: 'educationalQualification',
      label: 'Educational Qualification',
      type: 'select',
      required: true,
      options: [
        { value: 'below_8th', label: 'Below 8th Standard' },
        { value: '8th_pass', label: '8th Standard Pass' },
        { value: '10th_pass', label: '10th Standard Pass' },
        { value: '12th_pass', label: '12th Standard Pass' },
        { value: 'graduate', label: 'Graduate' },
        { value: 'postgraduate', label: 'Postgraduate' },
      ],
      helperText: 'Minimum 8th pass required for transport vehicles',
    },
    
    // Existing License Details (for renewal/duplicate/add class)
    {
      id: 'existingLicenseNumber',
      name: 'existingLicenseNumber',
      label: 'Existing License Number',
      type: 'text',
      required: false,
      placeholder: 'TN-01-XXXXXXXXXXXX',
      helperText: 'Required for renewal, duplicate, or adding vehicle class',
      conditionalDisplay: {
        field: 'licenseType',
        values: ['add_vehicle_class', 'renewal', 'duplicate', 'address_change', 'international'],
      },
    },
    {
      id: 'existingLicenseIssueDate',
      name: 'existingLicenseIssueDate',
      label: 'Existing License Issue Date',
      type: 'date',
      required: false,
      conditionalDisplay: {
        field: 'licenseType',
        values: ['renewal', 'duplicate', 'international'],
      },
    },
    
    // Learner License Details (for permanent DL)
    {
      id: 'learnerLicenseNumber',
      name: 'learnerLicenseNumber',
      label: "Learner's License Number",
      type: 'text',
      required: false,
      placeholder: 'LL Number',
      helperText: "Required for permanent DL - must be at least 30 days old",
      conditionalDisplay: {
        field: 'licenseType',
        values: ['permanent_mcwg', 'permanent_lmv', 'permanent_transport'],
      },
    },
    {
      id: 'learnerLicenseIssueDate',
      name: 'learnerLicenseIssueDate',
      label: "Learner's License Issue Date",
      type: 'date',
      required: false,
      helperText: 'Must be at least 30 days before permanent DL application',
      conditionalDisplay: {
        field: 'licenseType',
        values: ['permanent_mcwg', 'permanent_lmv', 'permanent_transport'],
      },
    },
    
    // Medical Fitness (for transport)
    {
      id: 'hasMedicalIssues',
      name: 'hasMedicalIssues',
      label: 'Any Medical Conditions?',
      type: 'radio',
      required: true,
      options: [
        { value: 'no', label: 'No Medical Issues' },
        { value: 'yes', label: 'Yes (Will provide medical certificate)' },
      ],
      helperText: 'Medical certificate mandatory for transport vehicles',
    },
    
    // Document Uploads
    {
      id: 'aadhaarDocument',
      name: 'aadhaarDocument',
      label: 'Upload Aadhaar Card (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Both sides of Aadhaar card',
    },
    {
      id: 'addressProof',
      name: 'addressProof',
      label: 'Upload Address Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Recent utility bill or rental agreement (within 3 months)',
    },
    {
      id: 'ageProof',
      name: 'ageProof',
      label: 'Upload Age Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Birth certificate, school certificate, or passport',
    },
    {
      id: 'passport_photos',
      name: 'passport_photos',
      label: 'Upload Passport Size Photos',
      type: 'file',
      required: true,
      accept: '.jpg,.jpeg,.png',
      helperText: 'Upload 4 recent color photos',
    },
    {
      id: 'learnerLicenseDocument',
      name: 'learnerLicenseDocument',
      label: "Upload Learner's License (PDF/JPG)",
      type: 'file',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Required for permanent DL application',
      conditionalDisplay: {
        field: 'licenseType',
        values: ['permanent_mcwg', 'permanent_lmv', 'permanent_transport'],
      },
    },
    {
      id: 'medicalCertificate',
      name: 'medicalCertificate',
      label: 'Upload Medical Certificate (PDF/JPG)',
      type: 'file',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Required for transport vehicles and if you have medical conditions',
      conditionalDisplay: {
        field: 'licenseType',
        values: ['permanent_transport'],
      },
    },
    
    // Additional Information
    {
      id: 'additionalNotes',
      name: 'additionalNotes',
      label: 'Additional Information',
      type: 'textarea',
      required: false,
      placeholder: 'Any specific requirements, test preferences, or questions',
      rows: 3,
    },
  ],
};

export const RATION_CARD_FORM: ServiceFormConfig = {
  serviceCode: 'IDC-103',
  serviceName: 'Ration Card',
  requiredDocuments: [
    'Aadhaar Cards (All family members)',
    'Address Proof (Electricity Bill / Property Tax Receipt / Rental Agreement)',
    'Income Proof (Salary Slip / IT Returns / Certificate from Employer)',
    'Passport Size Photos (All members)',
    'Gas Connection Proof (if available)',
    'Bank Passbook',
    'Existing Ration Card (for modifications)',
  ],
  formFields: [
    {
      id: 'applicationType',
      name: 'applicationType',
      label: 'Application Type',
      type: 'select',
      required: true,
      placeholder: 'Select application type',
      options: [
        { value: 'new', label: 'New Ration Card' },
        { value: 'add_member', label: 'Add Family Member to Existing Card' },
        { value: 'delete_member', label: 'Delete Member from Existing Card' },
        { value: 'address_change', label: 'Change Address (Within Same Taluk)' },
        { value: 'transfer', label: 'Transfer Card to Different Taluk/District' },
        { value: 'duplicate', label: 'Duplicate Card (Lost/Damaged)' },
        { value: 'surrender', label: 'Surrender Card' },
        { value: 'correction', label: 'Correction in Name/Details' },
        { value: 'conversion', label: 'Card Conversion (APL to BPL or vice versa)' },
      ],
      helperText: 'Choose the type of ration card service needed',
    },
    
    // Card Category
    {
      id: 'cardCategory',
      name: 'cardCategory',
      label: 'Ration Card Category',
      type: 'select',
      required: true,
      options: [
        { value: 'aay', label: 'AAY - Antyodaya Anna Yojana (Poorest of Poor)' },
        { value: 'bpl', label: 'BPL - Below Poverty Line' },
        { value: 'apl', label: 'APL - Above Poverty Line' },
        { value: 'phh', label: 'PHH - Priority Household' },
      ],
      helperText: 'Select based on your family income and eligibility',
      conditionalDisplay: {
        field: 'applicationType',
        values: ['new', 'conversion'],
      },
    },
    
    // Head of Family Details
    {
      id: 'headOfFamilyName',
      name: 'headOfFamilyName',
      label: 'Head of Family - Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter name as per Aadhaar',
      helperText: 'Usually the earning member or eldest person',
    },
    {
      id: 'headAadhaarNumber',
      name: 'headAadhaarNumber',
      label: 'Head of Family - Aadhaar Number',
      type: 'text',
      required: true,
      placeholder: 'XXXX-XXXX-XXXX',
      validation: {
        pattern: '^[0-9]{12}$',
        message: 'Enter valid 12-digit Aadhaar number',
      },
    },
    {
      id: 'headDateOfBirth',
      name: 'headDateOfBirth',
      label: 'Head of Family - Date of Birth',
      type: 'date',
      required: true,
    },
    {
      id: 'headGender',
      name: 'headGender',
      label: 'Head of Family - Gender',
      type: 'select',
      required: true,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
    },
    
    // Contact Details
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      placeholder: '10-digit mobile number',
      validation: {
        pattern: '^[6-9][0-9]{9}$',
        message: 'Enter valid 10-digit mobile number',
      },
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: false,
      placeholder: 'your.email@example.com',
      helperText: 'Optional - for updates',
    },
    
    // Address Details
    {
      id: 'currentAddress',
      name: 'currentAddress',
      label: 'Current Residential Address',
      type: 'textarea',
      required: true,
      placeholder: 'Door/House No, Street Name, Area/Village',
      rows: 3,
      helperText: 'Provide complete address with landmarks',
    },
    {
      id: 'district',
      name: 'district',
      label: 'District',
      type: 'text',
      required: true,
      placeholder: 'Enter district name',
    },
    {
      id: 'taluk',
      name: 'taluk',
      label: 'Taluk',
      type: 'text',
      required: true,
      placeholder: 'Enter taluk name',
    },
    {
      id: 'village',
      name: 'village',
      label: 'Village/Town',
      type: 'text',
      required: true,
      placeholder: 'Enter village or town name',
    },
    {
      id: 'pincode',
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      required: true,
      placeholder: '6-digit pincode',
      validation: {
        pattern: '^[0-9]{6}$',
        message: 'Enter valid 6-digit pincode',
      },
    },
    {
      id: 'rationShopPreference',
      name: 'rationShopPreference',
      label: 'Preferred Fair Price Shop',
      type: 'text',
      required: false,
      placeholder: 'Shop name or number',
      helperText: 'If you know the local PDS shop',
    },
    
    // Family Details
    {
      id: 'totalFamilyMembers',
      name: 'totalFamilyMembers',
      label: 'Total Number of Family Members',
      type: 'number',
      required: true,
      placeholder: 'Enter number',
      helperText: 'Including head of family, all living under same roof',
      validation: {
        min: 1,
        max: 15,
      },
    },
    {
      id: 'familyMembersDetails',
      name: 'familyMembersDetails',
      label: 'Family Members Details',
      type: 'textarea',
      required: true,
      placeholder: 'List all members: Name, Relationship, Age, Aadhaar (one per line)',
      rows: 6,
      helperText: 'Example: Rajesh Kumar, Son, 25, 1234-5678-9012',
    },
    
    // Income Details
    {
      id: 'annualIncome',
      name: 'annualIncome',
      label: 'Total Annual Family Income',
      type: 'number',
      required: true,
      placeholder: 'Enter amount in Rupees',
      helperText: 'Required for card category verification',
    },
    {
      id: 'occupationHead',
      name: 'occupationHead',
      label: 'Occupation of Head of Family',
      type: 'select',
      required: true,
      options: [
        { value: 'government', label: 'Government Service' },
        { value: 'private', label: 'Private Sector' },
        { value: 'self_employed', label: 'Self Employed/Business' },
        { value: 'agriculture', label: 'Agriculture/Farming' },
        { value: 'daily_wage', label: 'Daily Wage Labour' },
        { value: 'unemployed', label: 'Unemployed' },
        { value: 'retired', label: 'Retired' },
        { value: 'other', label: 'Other' },
      ],
    },
    
    // Existing Card Details (for modifications)
    {
      id: 'existingCardNumber',
      name: 'existingCardNumber',
      label: 'Existing Ration Card Number',
      type: 'text',
      required: false,
      placeholder: 'Enter current card number',
      helperText: 'Required for modifications, additions, deletions',
      conditionalDisplay: {
        field: 'applicationType',
        values: ['add_member', 'delete_member', 'address_change', 'transfer', 'duplicate', 'surrender', 'correction', 'conversion'],
      },
    },
    {
      id: 'memberToAddDelete',
      name: 'memberToAddDelete',
      label: 'Member Details (To Add/Delete)',
      type: 'textarea',
      required: false,
      placeholder: 'Name, Relationship, Aadhaar, Reason',
      rows: 3,
      helperText: 'Provide details of member being added or deleted',
      conditionalDisplay: {
        field: 'applicationType',
        values: ['add_member', 'delete_member'],
      },
    },
    {
      id: 'reasonForChange',
      name: 'reasonForChange',
      label: 'Reason for Change/Modification',
      type: 'textarea',
      required: false,
      placeholder: 'Explain why this change is needed',
      rows: 3,
      conditionalDisplay: {
        field: 'applicationType',
        values: ['delete_member', 'address_change', 'transfer', 'surrender', 'conversion'],
      },
    },
    
    // Bank Details
    {
      id: 'bankAccountNumber',
      name: 'bankAccountNumber',
      label: 'Bank Account Number',
      type: 'text',
      required: true,
      placeholder: 'Enter bank account number',
      helperText: 'For subsidy transfer and verification',
    },
    {
      id: 'ifscCode',
      name: 'ifscCode',
      label: 'IFSC Code',
      type: 'text',
      required: true,
      placeholder: 'Bank IFSC Code',
      validation: {
        pattern: '^[A-Z]{4}0[A-Z0-9]{6}$',
        message: 'Enter valid IFSC code',
      },
    },
    {
      id: 'bankName',
      name: 'bankName',
      label: 'Bank Name',
      type: 'text',
      required: true,
      placeholder: 'Name of bank',
    },
    
    // Gas Connection
    {
      id: 'hasGasConnection',
      name: 'hasGasConnection',
      label: 'Do you have LPG Gas Connection?',
      type: 'radio',
      required: true,
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'gasConnectionNumber',
      name: 'gasConnectionNumber',
      label: 'LPG Consumer Number',
      type: 'text',
      required: false,
      placeholder: 'Enter LPG consumer number',
      conditionalDisplay: {
        field: 'hasGasConnection',
        values: ['yes'],
      },
    },
    
    // Document Uploads
    {
      id: 'headAadhaarDocument',
      name: 'headAadhaarDocument',
      label: 'Upload Head of Family Aadhaar (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Both sides of Aadhaar',
    },
    {
      id: 'familyAadhaarDocuments',
      name: 'familyAadhaarDocuments',
      label: 'Upload All Family Members Aadhaar (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Combine all Aadhaar cards into one PDF or upload multiple images',
    },
    {
      id: 'addressProof',
      name: 'addressProof',
      label: 'Upload Address Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Electricity bill, property tax, or rental agreement',
    },
    {
      id: 'incomeProof',
      name: 'incomeProof',
      label: 'Upload Income Proof (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Salary slip, IT returns, or income certificate',
    },
    {
      id: 'bankPassbook',
      name: 'bankPassbook',
      label: 'Upload Bank Passbook/Statement (PDF/JPG)',
      type: 'file',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'First page with account details',
    },
    {
      id: 'familyPhotos',
      name: 'familyPhotos',
      label: 'Upload Family Photos',
      type: 'file',
      required: true,
      accept: '.jpg,.jpeg,.png',
      helperText: 'Passport size photos of all members',
    },
    {
      id: 'existingCardDocument',
      name: 'existingCardDocument',
      label: 'Upload Existing Ration Card (PDF/JPG)',
      type: 'file',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png',
      helperText: 'Required for modifications',
      conditionalDisplay: {
        field: 'applicationType',
        values: ['add_member', 'delete_member', 'address_change', 'transfer', 'duplicate', 'surrender', 'correction', 'conversion'],
      },
    },
    
    // Additional Information
    {
      id: 'additionalNotes',
      name: 'additionalNotes',
      label: 'Additional Information',
      type: 'textarea',
      required: false,
      placeholder: 'Any special circumstances or additional details',
      rows: 3,
    },
  ],
};

// ========================================
// GROUP 4: BUSINESS & LICENSING SOLUTIONS
// ========================================

export const TRADE_LICENSE_FORM: ServiceFormConfig = {
  serviceCode: 'COC-401',
  serviceName: 'Trade License (Chennai)',
  requiredDocuments: [
    'Notarized Sworn Affidavit on Non-Judicial Paper',
    'Proof of Premises (Lease/Property Tax Receipt)',
    'Business PAN',
    'Certificate of Incorporation (if Company)',
    'Passport Photo',
    'NOCs (Fire/PCB if applicable)',
  ],
  formFields: [
    {
      id: 'businessName',
      name: 'businessName',
      label: 'Business/Shop Name',
      type: 'text',
      required: true,
    },
    {
      id: 'tradeType',
      name: 'tradeType',
      label: 'Specific Trade Type',
      type: 'select',
      required: true,
      options: [
        { value: 'retail', label: 'Retail Shop' },
        { value: 'restaurant', label: 'Restaurant/Food Outlet' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'service', label: 'Service Center' },
        { value: 'wholesale', label: 'Wholesale' },
        { value: 'salon', label: 'Beauty Parlor/Salon' },
        { value: 'clinic', label: 'Medical Clinic' },
        { value: 'other', label: 'Other (Specify in notes)' },
      ],
    },
    {
      id: 'premisesArea',
      name: 'premisesArea',
      label: 'Area of Premises (Square Feet)',
      type: 'number',
      required: true,
      helpText: 'Accurate measurement required - affects fee calculation',
    },
    {
      id: 'numberOfEmployees',
      name: 'numberOfEmployees',
      label: 'Number of Employees',
      type: 'number',
      required: true,
      validation: { min: 0 },
    },
    {
      id: 'machineryHP',
      name: 'machineryHP',
      label: 'Horsepower of Machinery (if any)',
      type: 'number',
      required: false,
      helpText: 'For manufacturing units only',
    },
    {
      id: 'premisesAddress',
      name: 'premisesAddress',
      label: 'Complete Business Premises Address',
      type: 'textarea',
      required: true,
    },
    {
      id: 'ownerName',
      name: 'ownerName',
      label: 'Business Owner Name',
      type: 'text',
      required: true,
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
};

// ========================================
// GROUP 5: SOCIAL & PENSION SCHEMES
// ========================================

export const OLD_AGE_PENSION_FORM: ServiceFormConfig = {
  serviceCode: 'REV-201',
  serviceName: 'Old Age Pension (OAP)',
  requiredDocuments: [
    'Applicant Photo',
    'Aadhaar Card',
    'Proof of Age (Birth Certificate/School TC)',
    'BPL Card',
    'Bank Passbook',
    'Self-Declaration of Destitute Status',
  ],
  formFields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name of Applicant',
      type: 'text',
      required: true,
    },
    {
      id: 'dateOfBirth',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      required: true,
      helpText: 'Must be 60 years or older',
    },
    {
      id: 'bplCardNumber',
      name: 'bplCardNumber',
      label: 'BPL Card Number',
      type: 'text',
      required: true,
    },
    {
      id: 'destituteDeclaration',
      name: 'destituteDeclaration',
      label: 'Declaration of Destitute Status',
      type: 'textarea',
      required: true,
      placeholder: 'Explain: Do you have regular income/support? Who supports you financially?',
      helpText: 'Must prove no regular income or support',
    },
    {
      id: 'fixedAssets',
      name: 'fixedAssets',
      label: 'Value of Fixed Assets (excluding small home)',
      type: 'number',
      required: true,
      placeholder: 'Total value in ₹',
      helpText: '⚠️ Must be LESS than ₹50,000 to qualify',
      validation: { max: 50000 },
    },
    {
      id: 'bankAccountNumber',
      name: 'bankAccountNumber',
      label: 'Bank Account Number',
      type: 'text',
      required: true,
    },
    {
      id: 'bankIFSC',
      name: 'bankIFSC',
      label: 'Bank IFSC Code',
      type: 'text',
      required: true,
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
};

export const WIDOW_PENSION_FORM: ServiceFormConfig = {
  serviceCode: 'REV-207',
  serviceName: 'Destitute Widow Pension',
  requiredDocuments: [
    "Husband's Death Certificate",
    'Widow Certificate',
    'BPL Card',
    'Bank Passbook',
    'Proof of Age (18+)',
    'Income Affidavit',
  ],
  formFields: [
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Full Name of Applicant',
      type: 'text',
      required: true,
    },
    {
      id: 'dateOfBirth',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
      required: true,
      helpText: 'Must be 18 years or older',
    },
    {
      id: 'husbandName',
      name: 'husbandName',
      label: "Deceased Husband's Name",
      type: 'text',
      required: true,
    },
    {
      id: 'dateOfDeath',
      name: 'dateOfDeath',
      label: "Husband's Date of Death",
      type: 'date',
      required: true,
    },
    {
      id: 'incomeSource',
      name: 'incomeSource',
      label: 'Current Income Source',
      type: 'text',
      required: true,
      placeholder: 'e.g., Daily wage labor, Agriculture, None',
    },
    {
      id: 'monthlyIncome',
      name: 'monthlyIncome',
      label: 'Monthly Income Amount (₹)',
      type: 'number',
      required: true,
    },
    {
      id: 'fixedAssets',
      name: 'fixedAssets',
      label: 'Value of Fixed Assets',
      type: 'number',
      required: true,
      placeholder: 'Total value in ₹',
      helpText: '⚠️ Must be LESS than ₹1,00,000 to qualify',
      validation: { max: 100000 },
    },
    {
      id: 'bankAccountNumber',
      name: 'bankAccountNumber',
      label: 'Bank Account Number',
      type: 'text',
      required: true,
    },
    {
      id: 'bankIFSC',
      name: 'bankIFSC',
      label: 'Bank IFSC Code',
      type: 'text',
      required: true,
    },
    {
      id: 'mobileNumber',
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      validation: { pattern: '[6-9]\\d{9}' },
    },
  ],
};

// ========================================
// FORM CONFIG LOOKUP - ✅ FIXED SLUGS
// ========================================

export const SERVICE_FORM_CONFIGS: Record<string, ServiceFormConfig> = {
  // Existing Services
  'community-certificate': COMMUNITY_CERTIFICATE_FORM,
  'income-certificate': INCOME_CERTIFICATE_FORM,
  'first-graduate-certificate': FIRST_GRADUATE_FORM,
  'legal-heir-certificate': LEGAL_HEIR_FORM,
  'trade-license': TRADE_LICENSE_FORM,
  'old-age-pension': OLD_AGE_PENSION_FORM,
  'widow-pension': WIDOW_PENSION_FORM,

  // ✅ FIXED: New Identity Services (mapped by both code AND correct slug)
  'IDC-101': VOTER_ID_FORM,
  'voter-id-card': VOTER_ID_FORM,  // ✅ CORRECTED from 'voter-id' to 'voter-id-card'
  'IDC-102': DRIVING_LICENSE_FORM,
  'driving-license': DRIVING_LICENSE_FORM,  // ✅ Already correct
  'IDC-103': RATION_CARD_FORM,
  'ration-card': RATION_CARD_FORM,  // ✅ Already correct
};

export function getServiceFormConfig(slug: string): ServiceFormConfig | null {
  return SERVICE_FORM_CONFIGS[slug] || null;
}