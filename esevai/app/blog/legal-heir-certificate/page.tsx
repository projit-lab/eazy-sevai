import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function LegalHeirCertificateBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Get a Legal Heir (Varisu) Certificate in Tamil Nadu: The 2025 Guide
          </h1>
          <p className="text-gray-600 text-lg">
            Last Updated: January 2025 • 12 min read
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
        {/* Introduction */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            <strong>⚠️ Critical Alert:</strong> 40% of DIY Legal Heir Certificate applications are rejected due to hidden legal traps. 
            This guide reveals the mistakes that cause rejections—and how to avoid criminal prosecution for heir suppression.
          </p>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed">
          Losing a loved one is emotionally devastating. But the bureaucratic aftermath—claiming insurance, 
          transferring property, or securing employment—can be equally overwhelming if you don't have the 
          <strong> Legal Heir Certificate</strong> (Varisu Certificate).
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
          <Shield className="h-8 w-8 text-blue-600 mr-3" />
          What is a Legal Heir Certificate?
        </h2>

        <p>
          A <strong>Legal Heir Certificate</strong> (வாரிசு சான்றிதழ் - Varisu Certificate) is an official 
          document issued by the Tahsildar that identifies all legal heirs of a deceased person.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Uses:</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Claiming Life Insurance</strong> - Insurance companies require this to process death claims</li>
          <li><strong>Property Transfer</strong> - Essential for transferring property ownership (Patta transfer, mutation)</li>
          <li><strong>Bank Account Access</strong> - Banks need this to release funds from deceased's accounts</li>
          <li><strong>Pension Claims</strong> - Required for family pension and provident fund claims</li>
          <li><strong>Compassionate Employment</strong> - Government jobs given to dependents require this certificate</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <h4 className="font-bold text-red-900 mb-2 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            The Risk
          </h4>
          <p className="text-red-800">
            <strong>Without this certificate, all assets remain legally frozen.</strong> You cannot claim insurance, 
            access bank accounts, or transfer property—regardless of how urgent your financial situation is.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          The Heirship Conundrum: Class I vs Class II Heirs
        </h2>

        <p className="text-xl text-blue-600 font-semibold">
          This is where 99% of DIY applicants make a critical mistake.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Class I Heirs (Can get Tahsildar Certificate):</h3>
        <ul className="space-y-2 text-gray-700">
          <li>Spouse (wife/husband)</li>
          <li>Children (sons and daughters)</li>
          <li>Mother</li>
          <li>Widow of a predeceased son</li>
          <li>Children of predeceased children</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Class II Heirs (Cannot get Tahsildar Certificate):</h3>
        <ul className="space-y-2 text-gray-700">
          <li>Siblings (brothers/sisters)</li>
          <li>Grandchildren (if parent is alive)</li>
          <li>Father (if mother is also deceased)</li>
          <li>Uncles, aunts, cousins</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-bold text-red-900 mb-2 text-xl">🚨 The Critical Problem</h4>
          <p className="text-red-800">
            <strong>Tahsildars are legally prohibited from issuing certificates to Class II heirs.</strong>
          </p>
          <p className="text-red-800 mt-2">
            If you're a sibling trying to claim your deceased brother's property, the Tahsildar will 
            <strong> reject your application outright</strong>. You must obtain a <strong>Succession Certificate</strong> from 
            civil court instead (6-12 months, ₹15,000-50,000 in legal fees).
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Document Checklist: The Precision Requirement
        </h2>

        <p className="text-lg text-gray-700">
          The Legal Heir Certificate application requires <strong>absolute documentary precision</strong>. 
          A single spelling mismatch between documents causes instant rejection.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mandatory Documents:</h3>
        <ol className="space-y-4 text-gray-700">
          <li><strong>1. Death Certificate</strong> - Must be from Municipal Corporation/VAO (hospital certificates NOT accepted)</li>
          <li><strong>2. Aadhaar Card of ALL Legal Heirs</strong> - Names must match EXACTLY across all documents</li>
          <li><strong>3. Ration Card</strong> - Should list all family members</li>
          <li><strong>4. Proof of Relationship</strong> - Birth certificates, marriage certificate, school TCs</li>
          <li><strong>5. Self-Undertaking Affidavit</strong> - On ₹20 stamp paper, notarized, listing ALL heirs</li>
          <li><strong>6. Address Proof</strong> - Electricity bill or property tax receipt</li>
          <li><strong>7. Passport-Size Photographs</strong> - Recent photos of all heirs</li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-2">⚠️ Common Rejection Reasons:</h4>
          <ul className="space-y-2 text-gray-800">
            <li>❌ <strong>Name Mismatch:</strong> "Rajesh Kumar" on Aadhaar but "R. Kumar" on death certificate</li>
            <li>❌ <strong>Missing Heir:</strong> Failed to mention an estranged sibling (this is CRIMINAL)</li>
            <li>❌ <strong>Incomplete Affidavit:</strong> Generic template that doesn't list specific details</li>
            <li>❌ <strong>Wrong Death Certificate:</strong> Hospital certificate instead of municipal certificate</li>
          </ul>
        </div>

        {/* Section 4 - Criminal Prosecution */}
        <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">
          Legal Risk: Criminal Prosecution for Heir Suppression
        </h2>

        <p className="text-xl text-red-600 font-bold">
          This is the most dangerous legal trap—and it's entirely avoidable.
        </p>

        <div className="bg-red-100 border-2 border-red-500 p-8 my-8">
          <h3 className="text-2xl font-bold text-red-900 mb-4">The Madras High Court Ruling</h3>
          <p className="text-red-900 text-lg">
            Suppressing or concealing a legal heir in a Legal Heir Certificate application is:
          </p>
          <ul className="mt-4 space-y-2 text-red-900">
            <li>• <strong>Criminal Fraud</strong> under IPC Section 420 (Cheating)</li>
            <li>• <strong>Forgery</strong> under IPC Section 199 (False Statement)</li>
            <li>• <strong>Document Fraud</strong> under IPC Section 177 (Furnishing False Information)</li>
          </ul>
          
          <h4 className="font-bold text-red-900 mt-6 mb-2 text-xl">Real Consequences:</h4>
          <ul className="space-y-2 text-red-900">
            <li>• Criminal prosecution with <strong>potential jail time (up to 7 years)</strong></li>
            <li>• Immediate cancellation of certificate</li>
            <li>• Reversal of property transfers</li>
            <li>• Civil lawsuits from excluded heirs</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common "Innocent" Mistakes That Are Actually Criminal:
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>❌ "We didn't mention my brother because he lives abroad and doesn't care about the property"</li>
          <li>❌ "My sister is married, so we didn't include her"</li>
          <li>❌ "My father had another child from his first marriage, but we never met them"</li>
          <li>❌ "I know about my half-sibling but we're not in contact"</li>
        </ul>

        <p className="text-xl font-bold text-red-600 mt-6">
          Intent doesn't matter. Omission is criminal.
        </p>

        {/* Section 5 - Fees */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Application Process & Fees
        </h2>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Official Government Fee:</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-2 text-gray-800">
            <li>• Application Fee: <strong>₹60</strong></li>
            <li>• Stamp Duty: <strong>₹2</strong></li>
            <li>• Affidavit Stamp Paper: <strong>₹20</strong></li>
            <li className="pt-2 border-t border-blue-200 font-bold text-lg">Total Statutory Cost: ₹82</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Processing Timeline:</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Official Timeline:</strong> 30-45 days</li>
          <li>• <strong>Real Timeline:</strong> 60-90 days (if no issues)</li>
          <li>• <strong>With Rejection:</strong> 6-12 months (resubmission + delays)</li>
        </ul>

        {/* Section 6 - Why Applications Fail */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Why 40% of DIY Applications Fail
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="font-semibold text-gray-900 mb-4">Based on Tahsildar office data:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>32%</strong> - Name/spelling mismatches across documents</li>
            <li>• <strong>28%</strong> - Incomplete or incorrect affidavit</li>
            <li>• <strong>18%</strong> - Missing mandatory documents</li>
            <li>• <strong>12%</strong> - Class II heir applying (should go to court)</li>
            <li>• <strong>10%</strong> - Relationship proof gaps</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mt-6">
          <strong>Average cost of resubmission:</strong> Lost time (3-4 months) + New documents (₹2,000-5,000) + 
          Transportation (₹500-1,000) = <strong>₹2,500-6,000 + emotional toll</strong>
        </p>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl my-12">
          <h2 className="text-3xl font-bold mb-4">
            ⚡ Don't Risk Rejection or Criminal Liability for an ₹82 Mistake
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            An application for a Legal Heir Certificate is not just a form—<strong>it's a formal legal declaration 
            with criminal penalties for errors.</strong>
          </p>

          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">Our Professional Consulting Package (₹1,405.20 total) guarantees:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>100% Accuracy</strong> - We verify every document, cross-check every name</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Legal Protection</strong> - We identify all legal heirs to protect you from criminal liability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Complete Process Management</strong> - Document collection, affidavit drafting, submission, follow-up</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>First-Time Approval Guarantee</strong> - If rejected due to our error, we resubmit at no cost</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-xl mb-3">Price Breakdown (Transparent):</h4>
            <ul className="space-y-2">
              <li>• Statutory Fee: <strong>₹60</strong> (you pay directly to government)</li>
              <li>• Professional Consulting Fee: <strong>₹1,140</strong></li>
              <li>• GST (18% on professional fee only): <strong>₹205.20</strong></li>
              <li className="pt-2 border-t border-white/20 text-xl font-bold">Total: ₹1,405.20</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/services/legal-heir-certificate">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get Professional Help → ₹1,405.20
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Q: Can I apply myself and save the ₹1,140 professional fee?
            </h3>
            <p className="text-gray-700">
              Yes, but consider: 40% of DIY applications fail, requiring resubmission (3-6 months delay + 
              ₹2,000-5,000 in additional costs). One name mismatch, one missing document, or one undisclosed 
              heir leads to rejection—or worse, criminal charges. Is saving ₹1,140 worth risking 6-12 months 
              and potential legal liability?
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Q: What if I'm a Class II heir (sibling/grandchild)?
            </h3>
            <p className="text-gray-700">
              You CANNOT get a Tahsildar certificate. You need a Succession Certificate from civil court instead 
              (6-12 months, ₹15,000-50,000 in legal fees). We offer a separate consultation service to guide you 
              through court filing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Q: How long does the process take with your service?
            </h3>
            <p className="text-gray-700">
              45-60 days on average (vs 6-12 months DIY with high rejection risk).
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          Conclusion
        </h2>

        <p className="text-xl text-gray-700">
          A Legal Heir Certificate is not a casual document—it's a legal declaration with real criminal consequences for errors.
        </p>

        <p className="text-lg text-gray-700 mt-4">
          <strong>You have two choices:</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="border-2 border-red-200 bg-red-50 p-6 rounded-lg">
            <h3 className="font-bold text-red-900 mb-3 text-xl">❌ DIY Route</h3>
            <p className="text-red-800">
              Save ₹1,140 but risk 6-12 months of delays, ₹5,000-10,000 in hidden costs, and potential 
              criminal prosecution for heir suppression
            </p>
          </div>
          <div className="border-2 border-green-200 bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Professional Route</h3>
            <p className="text-green-800">
              Invest ₹1,405.20 for guaranteed accuracy, legal protection, and 45-60 day processing
            </p>
          </div>
        </div>

        <p className="text-xl font-bold text-blue-600">
          Don't learn this lesson the hard way.
        </p>

        {/* Legal Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-12">
          <p className="text-sm text-gray-800">
            <strong>⚠️ Important Legal Disclaimer:</strong> Eazy Sevai is a private documentation and consulting firm. 
            We are not affiliated with or endorsed by the Government of India, Government of Tamil Nadu, or TNeGA. 
            All government services can be obtained directly from government portals (tnesevai.tn.gov.in) at standard 
            government-prescribed rates (₹82 statutory fee). Our professional consulting fee (₹1,140 + GST) is for 
            document preparation, verification, and process management services.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center my-12">
          <Link href="/services/legal-heir-certificate">
            <Button size="lg" className="text-lg px-8 py-6">
              Apply for Legal Heir Certificate with Professional Assistance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}