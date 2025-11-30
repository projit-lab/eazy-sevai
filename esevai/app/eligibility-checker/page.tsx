'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, XCircle, ArrowRight, AlertTriangle, Loader2 } from 'lucide-react';
import Link from 'next/link';

type PensionType = 'oap' | 'widow' | null;
type EligibilityResult = 'high' | 'low' | null;

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
}

interface QuizAnswers {
  pensionType: PensionType;
  // OAP Questions
  age60Plus?: boolean;
  hasBPL?: boolean;
  assetsUnder50k?: boolean;
  // Widow Pension Questions
  age18PlusBPL?: boolean;
  hasDeathCert?: boolean;
  assetsUnder1lakh?: boolean;
}

export default function PensionEligibilityChecker() {
  const [step, setStep] = useState<'intro' | 'contact' | 'questions' | 'result'>('intro');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobile: '',
    email: '',
  });
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    pensionType: null,
  });
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.mobile) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate mobile number (10 digits)
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit lead to backend/CRM
      const response = await fetch('/api/leads/eligibility-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'pension_eligibility_checker',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      // Move to questions
      setStep('questions');
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate eligibility based on answers
  const calculateEligibility = (): EligibilityResult => {
    if (quizAnswers.pensionType === 'oap') {
      // OAP: Must pass ALL 3 gates
      if (
        quizAnswers.age60Plus === true &&
        quizAnswers.hasBPL === true &&
        quizAnswers.assetsUnder50k === true
      ) {
        return 'high';
      }
      return 'low';
    }

    if (quizAnswers.pensionType === 'widow') {
      // Widow: Must pass ALL 3 gates
      if (
        quizAnswers.age18PlusBPL === true &&
        quizAnswers.hasDeathCert === true &&
        quizAnswers.assetsUnder1lakh === true
      ) {
        return 'high';
      }
      return 'low';
    }

    return 'low';
  };

  // Handle quiz completion
  const handleQuizComplete = async () => {
    const result = calculateEligibility();
    setEligibilityResult(result);

    // Send result to backend for nurture sequence
    try {
      await fetch('/api/leads/eligibility-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobile: formData.mobile,
          email: formData.email,
          pensionType: quizAnswers.pensionType,
          eligibilityResult: result,
          answers: quizAnswers,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Error sending result:', error);
    }

    setStep('result');
  };

  // Render intro screen
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-blue-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Free 1-Minute Pension Eligibility Check
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Find out if you qualify for Old Age Pension or Widow Pension in just 60 seconds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Use This Checker?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Instant Results</strong> - Know your eligibility in 60 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Avoid Rejection</strong> - Don't waste months on ineligible applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Expert Guidance</strong> - Get personalized advice based on your situation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-800">
                    <strong>Note:</strong> The eligibility rules for pension schemes are complex, with multiple asset 
                    and income gates. This tool helps you understand your likelihood before applying.
                  </p>
                </div>

                <Button 
                  onClick={() => setStep('contact')} 
                  className="w-full" 
                  size="lg"
                >
                  Start Free Check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render contact form (Lead Capture)
  if (step === 'contact') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Step 1: Your Contact Information
              </CardTitle>
              <CardDescription>
                We'll send your eligibility results via SMS/WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-base font-semibold">
                    Full Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-base font-semibold">
                    Mobile Number <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    required
                    maxLength={10}
                    pattern="[6-9]\d{9}"
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    We'll send your results and expert guidance via WhatsApp
                  </p>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email Address <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    🔒 <strong>Privacy:</strong> Your information is secure and will only be used to send you 
                    eligibility results and pension guidance. We never share your data.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Check My Eligibility
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render eligibility questions
  if (step === 'questions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Step 2: Eligibility Questions
              </CardTitle>
              <CardDescription>
                Answer these questions to check your eligibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Question 0: Pension Type */}
              {!quizAnswers.pensionType && (
                <div>
                  <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                    Which pension are you applying for?
                  </Label>
                  <RadioGroup
                    value={quizAnswers.pensionType || ''}
                    onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, pensionType: value as PensionType })}
                  >
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer">
                      <RadioGroupItem value="oap" id="oap" />
                      <Label htmlFor="oap" className="cursor-pointer flex-1">
                        <div className="font-semibold">Old Age Pension (OAP)</div>
                        <div className="text-sm text-gray-600">For senior citizens aged 60+</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer">
                      <RadioGroupItem value="widow" id="widow" />
                      <Label htmlFor="widow" className="cursor-pointer flex-1">
                        <div className="font-semibold">Destitute Widow Pension</div>
                        <div className="text-sm text-gray-600">For widows in BPL category</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* OAP Questions */}
              {quizAnswers.pensionType === 'oap' && (
                <>
                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Q1: Is the applicant 60 years of age or older?
                    </Label>
                    <RadioGroup
                      value={quizAnswers.age60Plus?.toString() || ''}
                      onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, age60Plus: value === 'true' })}
                    >
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                        <RadioGroupItem value="true" id="age-yes" />
                        <Label htmlFor="age-yes" className="cursor-pointer">Yes, 60 or older</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                        <RadioGroupItem value="false" id="age-no" />
                        <Label htmlFor="age-no" className="cursor-pointer">No, under 60</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {quizAnswers.age60Plus !== undefined && (
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                        Q2: Does the applicant have a BPL (Below Poverty Line) card, or is their income very low?
                      </Label>
                      <RadioGroup
                        value={quizAnswers.hasBPL?.toString() || ''}
                        onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, hasBPL: value === 'true' })}
                      >
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="true" id="bpl-yes" />
                          <Label htmlFor="bpl-yes" className="cursor-pointer">Yes, has BPL card or low income</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="false" id="bpl-no" />
                          <Label htmlFor="bpl-no" className="cursor-pointer">No BPL card</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {quizAnswers.hasBPL !== undefined && (
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                        Q3: Are the applicant's total fixed assets (excluding a small home) valued at less than ₹50,000?
                      </Label>
                      <RadioGroup
                        value={quizAnswers.assetsUnder50k?.toString() || ''}
                        onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, assetsUnder50k: value === 'true' })}
                      >
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="true" id="assets-yes" />
                          <Label htmlFor="assets-yes" className="cursor-pointer">Yes, assets under ₹50,000</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="false" id="assets-no" />
                          <Label htmlFor="assets-no" className="cursor-pointer">No, assets over ₹50,000</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </>
              )}

              {/* Widow Pension Questions */}
              {quizAnswers.pensionType === 'widow' && (
                <>
                  <div>
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      Q1: Is the applicant 18 years of age or older and in the BPL category?
                    </Label>
                    <RadioGroup
                      value={quizAnswers.age18PlusBPL?.toString() || ''}
                      onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, age18PlusBPL: value === 'true' })}
                    >
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                        <RadioGroupItem value="true" id="widow-age-yes" />
                        <Label htmlFor="widow-age-yes" className="cursor-pointer">Yes, 18+ and BPL</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                        <RadioGroupItem value="false" id="widow-age-no" />
                        <Label htmlFor="widow-age-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {quizAnswers.age18PlusBPL !== undefined && (
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                        Q2: Does the applicant possess their deceased husband's Death Certificate?
                      </Label>
                      <RadioGroup
                        value={quizAnswers.hasDeathCert?.toString() || ''}
                        onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, hasDeathCert: value === 'true' })}
                      >
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="true" id="death-yes" />
                          <Label htmlFor="death-yes" className="cursor-pointer">Yes, have death certificate</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="false" id="death-no" />
                          <Label htmlFor="death-no" className="cursor-pointer">No death certificate</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {quizAnswers.hasDeathCert !== undefined && (
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                        Q3: Are the applicant's fixed assets valued at less than ₹1,00,000?
                      </Label>
                      <RadioGroup
                        value={quizAnswers.assetsUnder1lakh?.toString() || ''}
                        onValueChange={(value: string) => setQuizAnswers({ ...quizAnswers, assetsUnder1lakh: value === 'true' })}
                      >
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="true" id="widow-assets-yes" />
                          <Label htmlFor="widow-assets-yes" className="cursor-pointer">Yes, under ₹1,00,000</Label>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg">
                          <RadioGroupItem value="false" id="widow-assets-no" />
                          <Label htmlFor="widow-assets-no" className="cursor-pointer">No, over ₹1,00,000</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </>
              )}

              {/* Submit Button */}
              {((quizAnswers.pensionType === 'oap' && quizAnswers.assetsUnder50k !== undefined) ||
                (quizAnswers.pensionType === 'widow' && quizAnswers.assetsUnder1lakh !== undefined)) && (
                <Button 
                  onClick={handleQuizComplete} 
                  className="w-full" 
                  size="lg"
                >
                  View My Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render result page
  if (step === 'result' && eligibilityResult) {
    const pensionName = quizAnswers.pensionType === 'oap' ? 'Old Age Pension' : 'Destitute Widow Pension';
    const serviceSlug = quizAnswers.pensionType === 'oap' ? 'old-age-pension' : 'widow-pension';

    if (eligibilityResult === 'low') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-red-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <XCircle className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-red-900">
                  Low Likelihood of Eligibility
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Based on Asset Rules & Documentation Requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Why Low Likelihood?
                  </h3>
                  <p className="text-red-800">
                    Based on your answers, you may not meet one or more of the strict eligibility criteria for {pensionName}. 
                    The rules around age, BPL status, assets, and documentation are highly complex.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    ⚠️ Don't Give Up Yet
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Eligibility rules have exceptions and special cases. If you believe there's an error in the assessment, 
                    <strong> do not apply yourself</strong> without expert guidance.
                  </p>
                  <p className="text-gray-700">
                    A rejected application can delay your benefits by 6-12 months and makes reapplication more difficult.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3 text-xl">
                    Expert Review Consultation (₹590)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our pension eligibility experts can:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Manually review your documents and exact situation</li>
                    <li>• Identify alternative eligibility pathways</li>
                    <li>• Assess if you qualify under special circumstances</li>
                    <li>• Prevent costly application rejections</li>
                  </ul>
                  <Link href="/services/pension-consultation">
                    <Button className="w-full" size="lg">
                      Book Expert Review → ₹590
                    </Button>
                  </Link>
                </div>

                <p className="text-center text-sm text-gray-600">
                  💬 We'll also send detailed guidance via WhatsApp to {formData.mobile}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    // High Likelihood Result
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-green-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-900">
                High Likelihood of Eligibility!
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                You meet the basic criteria for {pensionName}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="font-semibold text-green-900 mb-2">
                  ✅ Great News!
                </h3>
                <p className="text-green-800">
                  Based on your answers, you appear to meet the eligibility criteria. However, the actual application 
                  process is complex and requires meticulous verification of BPL cards, asset declarations, and supporting documents.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ⚠️ Common Rejection Reasons
                </h3>
                <p className="text-gray-700 mb-3">
                  Even eligible applicants get rejected 35% of the time due to:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Missing or incorrect asset affidavits</li>
                  <li>• Incomplete BPL proof documentation</li>
                  <li>• Bank account details errors</li>
                  <li>• Name mismatches across documents</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl">
                <h3 className="font-bold mb-3 text-2xl">
                  Start Your Application Now
                </h3>
                <p className="text-blue-100 mb-6">
                  Don't risk rejection! Our Professional Consulting service (₹618.02 total) manages the entire process—including 
                  meticulous verification of your BPL and asset affidavits—to ensure you get your pension benefits faster.
                </p>

                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">What We Do:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Complete document verification and preparation</li>
                    <li>✓ Asset affidavit drafting (legally compliant)</li>
                    <li>✓ BPL card verification and supporting docs</li>
                    <li>✓ Bank account setup assistance</li>
                    <li>✓ Application submission and tracking</li>
                    <li>✓ First-time approval guarantee</li>
                  </ul>
                </div>

                <Link href={`/services/${serviceSlug}`}>
                  <Button size="lg" variant="secondary" className="w-full text-lg">
                    Apply with Professional Help → ₹618.02
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-center text-sm text-gray-600">
                💬 Detailed application guidance sent to WhatsApp: {formData.mobile}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}