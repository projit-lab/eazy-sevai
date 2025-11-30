"use client";

import React, { useState } from 'react';
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
}

export default function ApplicationForm({ service }: ApplicationFormProps) {
  const formConfig = getServiceFormConfig(service.slug);
  const allDocuments = getServiceDocuments(service.slug);
  const mandatoryDocs = getMandatoryDocuments(service.slug);
  const optionalDocs = getOptionalDocuments(service.slug);

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, UploadedFile>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all mandatory documents are uploaded
    const missingDocs = mandatoryDocs.filter(doc => !uploadedFiles[doc.name]);
    
    if (missingDocs.length > 0) {
      alert(`Please upload all mandatory documents. Missing: ${missingDocs.map(d => d.name).join(', ')}`);
      return;
    }

    // Process form submission
    console.log('Form submitted with files:', uploadedFiles);
    alert('Application submitted successfully! (This is a demo)');
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your full name"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="12-digit Aadhaar number"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your complete address"
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

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Submit Application
          </button>
        </div>
      </form>
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
}

function DocumentUploadCard({ document, uploadedFile, error, onUpload, onRemove }: DocumentUploadCardProps) {
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
              className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 cursor-pointer transition-colors duration-200 flex items-center gap-2"
            >
              <FileUp className="w-4 h-4" />
              Choose File
            </label>
            <input
              id={inputId}
              type="file"
              accept={document.formats.map(f => `.${f.toLowerCase()}`).join(',')}
              onChange={onUpload}
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
              className="px-3 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-1"
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