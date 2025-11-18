"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";
import { PhoneInput } from "@/components/ui/phone-input";
import { getServiceBySlug, getServiceForm } from "@/lib/services";
import { FormField } from "@/types/service";
import { Loader2 } from "lucide-react";

export default function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const service = getServiceBySlug(slug);
  const serviceForm = service ? getServiceForm(service.id) : undefined;

  const [formData, setFormData] = useState<Record<string, any>>({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, boolean>>({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service || !serviceForm) {
    return (
      <div className="container py-12">
        <p>Service not found or form not available.</p>
      </div>
    );
  }

  // Handle file upload to Cloudinary
  const handleFileUpload = async (files: File[], fieldName: string) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    
    try {
      setUploadingFiles(prev => ({ ...prev, [fieldName]: true }));
      console.log('📤 Uploading file:', file.name);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fieldName', fieldName);
      formData.append('applicationId', 'temp-' + Date.now());

      const response = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const result = await response.json();
      console.log('✅ Upload success:', result.fileUrl);

      setUploadedFiles(prev => ({
        ...prev,
        [fieldName]: result.fileUrl
      }));

      handleFieldChange(fieldName, result.fileUrl);
      setUploadingFiles(prev => ({ ...prev, [fieldName]: false }));

    } catch (error) {
      console.error('❌ Upload error:', error);
      alert('Failed to upload file. Please try again.');
      setUploadingFiles(prev => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      alert("Please accept the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate application ID
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
      
      // Merge formData with uploaded file URLs
      const completeFormData = {
        ...formData,
        ...uploadedFiles
      };
      
      // Create complete application data
      const applicationData = {
        applicationId,
        serviceId: service.id,
        serviceName: serviceNameMap[service.id] || service.name,
        userData,
        formData: completeFormData,
        timestamp: new Date().toISOString(),
        paymentStatus: 'pending',
      };
      
      // Save to localStorage - will be sent to n8n AFTER payment
      localStorage.setItem('pendingApplication', JSON.stringify(applicationData));
      
      console.log('📦 Application data saved to localStorage');
      console.log('🔍 Application ID:', applicationId);
      console.log('📄 Service:', serviceNameMap[service.id]);
      console.log('📎 Files uploaded:', Object.keys(uploadedFiles).length);
      
      // Redirect directly to payment page (NO n8n call yet)
      router.push(`/payment?applicationId=${applicationId}&serviceId=${service.id}`);
      
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Failed to proceed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <Input
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
          />
        );
      
      case "tel":
        return (
          <PhoneInput
            required={field.required}
            onValueChange={(value) => handleFieldChange(field.name, value)}
          />
        );
      
      case "textarea":
        return (
          <Textarea
            placeholder={field.placeholder}
            required={field.required}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
          />
        );
      
      case "select":
        return (
          <Select
            required={field.required}
            onValueChange={(value) => handleFieldChange(field.name, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case "file":
        return (
          <div className="space-y-2">
            <FileUpload
              accept={field.accept}
              maxSize={field.maxSize || 5}
              onValueChange={(files) => handleFileUpload(files, field.name)}
            />
            {uploadingFiles[field.name] && (
              <p className="text-sm text-blue-600 flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </p>
            )}
            {uploadedFiles[field.name] && !uploadingFiles[field.name] && (
              <p className="text-sm text-green-600">✓ File uploaded successfully</p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Apply for {service.name}</h1>
          <p className="text-muted-foreground">
            Please fill in all the required details and upload the necessary documents
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Details */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
              <CardDescription>Your contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <PhoneInput
                  id="phone"
                  required
                  value={userData.phone}
                  onValueChange={(value) => setUserData({ ...userData, phone: value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  required
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Service-Specific Fields */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
              <CardDescription>Service-specific information and documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceForm.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>
                    {field.label} {field.required && "*"}
                  </Label>
                  {renderField(field)}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Consent */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label
                    htmlFor="consent"
                    className="cursor-pointer text-sm font-normal"
                  >
                    I understand this is a facilitation service and not the official government portal.
                    I consent to the processing of my personal data and documents for this application.
                    I have read and agree to the{" "}
                    <a href="/terms-of-service" className="text-primary underline" target="_blank">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-primary underline" target="_blank">
                      Privacy Policy
                    </a>
                    .
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1"
              disabled={isSubmitting || !consent || Object.values(uploadingFiles).some(v => v)}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : Object.values(uploadingFiles).some(v => v) ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Uploading files...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}