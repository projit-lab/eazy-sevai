"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Service } from '@/lib/services';
import { getServiceFormConfig } from '@/lib/service-form-configs';
import { getServiceDocuments, getMandatoryDocuments, getOptionalDocuments } from '@/lib/service-documents';
import { RequiredDocument } from '@/types/document';
import { FileUp, CheckCircle2, AlertCircle, FileText, X } from 'lucide-react';

interface ApplicationFormProps {
  service: Service;
}

interface UploadedFile {
  file: File;
  documentName: string;
  cloudinaryUrl?: string;
  fileId?: string;
}

export default function ApplicationForm({ service }: ApplicationFormProps) {
  const router = useRouter();
  const formConfig = getServiceFormConfig(service.slug);
  const allDocuments = getServiceDocuments(service.slug);
  const mandatoryDocs = getMandatoryDocuments(service.slug);
  const optionalDocs = getOptionalDocuments(service.slug);

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  
  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    aadhaar: '',
    mobile: '',
    email: '',
    address: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (documentName: string, doc: RequiredDocument, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Clear previous error
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[documentName];
      return newErrors;
    });

    // Validate file format
    const fileExtension = file.name.split('.').pop()?.toUpperCase();
    if (fileExtension && !doc.formats.includes(fileExtension)) {
      setErrors(prev => ({
        ...prev,
        [documentName]: `Invalid format. Accepted: ${doc.formats.join(', ')}`
      }));
      return;
    }

    // Validate file size
    const maxSizeInBytes = parseFileSize(doc.maxSize);
    if (file.size > maxSizeInBytes) {
      setErrors(prev => ({
        ...prev,
        [documentName]: `File too large. Maximum: ${doc.maxSize}`
      }));
      return;
    }

    // Store the uploaded file
    setUploadedFiles(prev => ({
      ...prev,
      [documentName]: { file, documentName }
    }));
  };

  const parseFileSize = (sizeStr: string): number => {
    const match = sizeStr.match(/(\d+)(KB|MB|GB)/i);
    if (!match) return 0;

    const value = parseInt(match[1]);
    const unit = match[2].toUpperCase();

    switch (unit) {
      case 'KB': return value * 1024;
      case 'MB': return value * 1024 * 1024;
      case 'GB': return value * 1024 * 1024 * 1024;
      default: return 0;
    }
  };

  const removeFile = (documentName: string) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[documentName];
      return newFiles;
    });
  };

  // Generate IDs
  const generateApplicationId = () => {
    return `APP-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  };

  const generateLeadId = () => {
    return `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  };

  // Upload files to Cloudinary
  const uploadFilesToCloudinary = async (applicationId: string, leadId: string) => {
    const fileEntries = Object.entries(uploadedFiles);
    const uploadedUrls: Record<string, string> = {};

    if (fileEntries.length === 0) {
      return uploadedUrls;
    }

    setUploadProgress(`Uploading documents (0/${fileEntries.length})...`);

    for (let i = 0; i < fileEntries.length; i++) {
      const [documentName, uploadedFile] = fileEntries[i];
      
      setUploadProgress(`Uploading ${documentName} (${i + 1}/${fileEntries.length})...`);

      const formData = new FormData();
      formData.append('file', uploadedFile.file);
      formData.append('serviceSlug', service.slug);
      formData.append('documentName', documentName);
      formData.append('leadId', leadId);

      try {
        const response = await fetch('/api/upload-documents/documents', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload ${documentName}`);
        }

        const data = await response.json();
        
        if (data.success) {
          uploadedUrls[documentName] = data.data.url;
          
          // Update the uploaded file with Cloudinary info
          setUploadedFiles(prev => ({
            ...prev,
            [documentName]: {
              ...prev[documentName],
              cloudinaryUrl: data.data.url,
              fileId: data.data.fileId
            }
          }));
        } else {
          throw new Error(data.error || `Failed to upload ${documentName}`);
        }
      } catch (error) {
        console.error(`Error uploading ${documentName}:`, error);
        throw new Error(`Failed to upload ${documentName}. Please try again.`);
      }
    }

    setUploadProgress('All documents uploaded successfully!');
    return uploadedUrls;
  };

  // Create Razorpay payment order
  const createPaymentOrder = async (applicationId: string) => {
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: service.totalPayable,
        serviceName: service.name,
        serviceSlug: service.slug,
        applicationId,
        userData: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment order');
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to create payment order');
    }

    return data;
  };

  // Verify payment
  const verifyPayment = async (paymentResponse: any) => {
    const response = await fetch('/api/payment/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentResponse),
    });

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    const data = await response.json();
    return data.success;
  };

  // Submit application to N8N
  const submitApplicationToN8N = async (
    applicationId: string,
    orderId: string,
    paymentId: string,
    uploadedUrls: Record<string, string>
  ) => {
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        applicationId,
        orderId,
        serviceSlug: service.slug,
        serviceId: service.id,
        serviceName: service.name,
        paymentId,
        userData: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
          address: formData.address,
        },
        formData: {
          ...formData,
          ...uploadedUrls, // Include uploaded document URLs
        },
        // Service feasibility flags for N8N workflow
        serviceFeasibility: {
          isFullyOnline: service.isFullyOnline || false,
          requiresPhysicalPresence: service.requiresPhysicalPresence || false,
          requiresSiteInspection: service.requiresSiteInspection || false,
          isStatutoryFeeVariable: service.isStatutoryFeeVariable || false,
          operationalComplexity: service.operationalComplexity || 'medium',
        },
        // Pricing breakdown for N8N workflow
        pricing: {
          statutoryFee: service.statutoryFee || 0,
          professionalFee: service.professionalFee || 0,
          gst: service.gst || 0,
          totalPayable: service.totalPayable || 0,
        },
        // Timestamp
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('N8N submission failed, but payment was successful');
    }

    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all mandatory documents are uploaded
    const missingDocs = mandatoryDocs.filter(doc => !uploadedFiles[doc.name]);
    
    if (missingDocs.length > 0) {
      alert(`Please upload all mandatory documents. Missing: ${missingDocs.map(d => d.name).join(', ')}`);
      return;
    }

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setUploadProgress('Starting submission...');

    try {
      // Step 1: Generate IDs
      const applicationId = generateApplicationId();
      const leadId = generateLeadId();
      
      console.log('Generated IDs:', { applicationId, leadId });

      // Step 2: Upload files to Cloudinary
      setUploadProgress('Uploading documents...');
      const uploadedUrls = await uploadFilesToCloudinary(applicationId, leadId);
      console.log('Files uploaded:', uploadedUrls);

      // Step 3: Create payment order
      setUploadProgress('Creating payment order...');
      const paymentOrder = await createPaymentOrder(applicationId);
      console.log('Payment order created:', paymentOrder);

      // Step 4: Open Razorpay checkout
      setUploadProgress('Opening payment gateway...');
      
      const options = {
        key: paymentOrder.razorpayKeyId,
        amount: paymentOrder.amount,
        currency: 'INR',
        name: 'Eazy Sevai',
        description: service.name,
        order_id: paymentOrder.orderId,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: '#0d9488', // Teal color to match your design
        },
        handler: async function (response: any) {
          try {
            setUploadProgress('Verifying payment...');
            
            // Verify payment
            const verified = await verifyPayment(response);
            
            if (verified) {
              setUploadProgress('Submitting application...');
              
              // Submit to N8N
              await submitApplicationToN8N(
                applicationId,
                paymentOrder.orderId,
                response.razorpay_payment_id,
                uploadedUrls
              );

              // Redirect to success page
              router.push(`/thank-you?applicationId=${applicationId}&orderId=${paymentOrder.orderId}`);
            } else {
              alert('Payment verification failed. Please contact support at service@vysegroup.com');
            }
          } catch (error) {
            console.error('Post-payment error:', error);
            alert('Payment successful but there was an error processing your application. Please contact support at service@vysegroup.com with your payment ID.');
          }
        },
        modal: {
          ondismiss: function () {
            setIsSubmitting(false);
            setUploadProgress('');
            alert('Payment cancelled. Your application has not been submitted.');
          },
        },
      };

      // @ts-ignore - Razorpay is loaded via script tag
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error: any) {
      console.error('Submission error:', error);
      alert(error.message || 'Failed to submit application. Please try again or contact support at service@vysegroup.com');
      setIsSubmitting(false);
      setUploadProgress('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Application Form: {service.name}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-teal-500">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                pattern="[0-9]{12}"
                value={formData.aadhaar}
                onChange={(e) => handleInputChange('aadhaar', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="12-digit Aadhaar number"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="10-digit mobile number"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your complete address"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* Mandatory Documents Section */}
        {mandatoryDocs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-red-500">
              Required Documents <span className="text-red-500">*</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              All documents marked with <span className="text-red-500 font-semibold">*</span> are mandatory for your application.
            </p>
            <div className="space-y-4">
              {mandatoryDocs.map((doc, index) => (
                <DocumentUploadCard
                  key={`mandatory-${index}`}
                  document={doc}
                  uploadedFile={uploadedFiles[doc.name]}
                  error={errors[doc.name]}
                  onUpload={(e) => handleFileUpload(doc.name, doc, e)}
                  onRemove={() => removeFile(doc.name)}
                  disabled={isSubmitting}
                />
              ))}
            </div>
          </div>
        )}

        {/* Optional Documents Section */}
        {optionalDocs.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-blue-500">
              Optional Documents
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              These documents are optional but may strengthen your application.
            </p>
            <div className="space-y-4">
              {optionalDocs.map((doc, index) => (
                <DocumentUploadCard
                  key={`optional-${index}`}
                  document={doc}
                  uploadedFile={uploadedFiles[doc.name]}
                  error={errors[doc.name]}
                  onUpload={(e) => handleFileUpload(doc.name, doc, e)}
                  onRemove={() => removeFile(doc.name)}
                  disabled={isSubmitting}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Documents Message */}
        {allDocuments.length === 0 && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              No additional documents required for this service. Please fill in your personal information and submit.
            </p>
          </div>
        )}

        {/* Progress Message */}
        {uploadProgress && (
          <div className="mb-4 p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-teal-800 text-center font-medium">
              {uploadProgress}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                {uploadProgress || 'Processing...'}
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Proceed to Payment - ₹{service.totalPayable}
              </>
            )}
          </button>
        </div>
      </form>

      {/* Load Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    </div>
  );
}

// DocumentUploadCard Component
interface DocumentUploadCardProps {
  document: RequiredDocument;
  uploadedFile?: UploadedFile;
  error?: string;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  disabled?: boolean;
}

function DocumentUploadCard({ document, uploadedFile, error, onUpload, onRemove, disabled }: DocumentUploadCardProps) {
  const isUploaded = !!uploadedFile;
  const inputId = `file-${document.name.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`border-2 rounded-lg p-4 transition-all duration-200 ${
      isUploaded 
        ? 'border-green-500 bg-green-50' 
        : error 
        ? 'border-red-500 bg-red-50'
        : 'border-gray-300 bg-gray-50'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-800">{document.name}</h4>
            {document.mandatory ? (
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">
                Mandatory
              </span>
            ) : (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                Optional
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{document.description}</p>
          
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Formats: {document.formats.join(', ')}
            </span>
            <span>Max Size: {document.maxSize}</span>
          </div>

          {document.example && (
            <p className="text-xs text-gray-500 italic">
              Example: {document.example}
            </p>
          )}

          {document.notes && (
            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-xs text-yellow-800 flex items-start gap-1">
                <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>{document.notes}</span>
              </p>
            </div>
          )}
        </div>

        {isUploaded && (
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
        )}
      </div>

      {error && (
        <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded">
          <p className="text-xs text-red-700 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {error}
          </p>
        </div>
      )}

      <div className="flex items-center gap-2">
        {!isUploaded ? (
          <>
            <label
              htmlFor={inputId}
              className={`px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 cursor-pointer transition-colors duration-200 flex items-center gap-2 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FileUp className="w-4 h-4" />
              Choose File
            </label>
            <input
              id={inputId}
              type="file"
              accept={document.formats.map(f => `.${f.toLowerCase()}`).join(',')}
              onChange={onUpload}
              disabled={disabled}
              className="hidden"
            />
          </>
        ) : (
          <div className="flex items-center gap-2 flex-1">
            <div className="flex-1 px-3 py-2 bg-white border border-green-300 rounded text-sm text-gray-700">
              ✓ {uploadedFile.file.name} ({(uploadedFile.file.size / 1024).toFixed(1)} KB)
            </div>
            <button
              type="button"
              onClick={onRemove}
              disabled={disabled}
              className={`px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-1 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <X className="w-4 h-4" />
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}