import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

/*
 * BLOG PAGE TEMPLATE
 * * Instructions:
 * 1. Copy this file to app/blog/[your-slug]/page.tsx
 * 2. Update the metadata object with your blog post details
 * 3. Fill in the content sections
 * 4. Update the CTA pricing and service link
 */

// STEP 1: Update this metadata
const blogMetadata = {
  title: "First Graduate Certificate Guide: Eligibility, Documents & How to Avoid the Sibling Trap",
  subtitle: "Don't lose ₹2 lakhs in scholarships",
  readTime: "10 min read",
  lastUpdated: "January 2025",
  serviceSlug: "first-graduate-certificate", // e.g., "first-graduate-certificate"
  servicePrice: "756.20", // e.g., "1,405.20"
  serviceName: "First Graduate Certificate", // e.g., "First Graduate Certificate"
  statutoryFee: "60", // Government fee amount
};

export default function BlogPageTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white border-b">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {blogMetadata.title}
          </h1>
          <p className="text-gray-600 text-lg">
            Last Updated: {blogMetadata.lastUpdated} • {blogMetadata.readTime}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* STEP 2: Add alert box (optional) */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            <strong>⚠️ Alert:</strong> The "Sibling Trap" is the #1 reason for rejection, causing 38% of families to lose a ₹2 lakh scholarship.
          </p>
        </div>

        {/* STEP 3: Introduction paragraph */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Planning for college admission in Tamil Nadu? The **First Graduate Certificate** could save your family **₹50,000-₹2,00,000** in tuition fees and give you priority in government job placements. But here's the problem: **38% of applications are rejected** due to a little-known rule we call the **"Sibling Trap."** This guide reveals the #1 reason for rejection and shows you how to navigate the complex application process successfully.
          </p>

          {/* STEP 4: Main content sections */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. What is the First Graduate Certificate?
          </h2>
          <p>The **First Graduate Certificate** (முதல் பட்டதாரி சான்றிதழ்) is an official document issued by the Tahsildar certifying that the applicant is the **first person in their entire family to pursue a degree** (undergraduate or higher education).</p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Dual Benefits:
          </h3>
          <ul className="space-y-2 text-gray-700 my-6">
            <li>**Massive Fee Concessions:** Tuition fee waivers ranging from 50-100%, 7.5% quota in TNEA, and scholarship priority. **Potential Savings: ₹50,000-₹2,00,000** over 4 years of engineering.</li>
            <li>**Government Job Priority:** Priority consideration in TNPSC recruitments and reservation benefits in state government employment.</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <h4 className="font-bold text-red-900 mb-2">⚠️ The Cost of Not Having It</h4>
            <p className="text-red-800">
              **Without this certificate, you lose scholarship opportunities worth ₹25,000-₹50,000/year and pay full tuition fees.** The total potential loss is **₹2,00,000-₹3,00,000** over your degree.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. The #1 Rule: The Sibling Trap
          </h2>
          <p>This is the most common reason for rejection. Most families don't know about it until it's too late.</p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            The Absolute Eligibility Rule:
          </h3>
          <p>You are eligible for First Graduate Certificate **ONLY** if:</p>
          <ul className="space-y-2 text-gray-700 my-6">
            <li>✅ Neither of your parents has a degree</li>
            <li>✅ **AND** none of your **older siblings have received this certificate** (even if they never used it)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            🚨 The Sibling Trap Explained
          </h3>
          <p>**Scenario: The Common Mistake**</p>
          <p>Your older brother applied and received the certificate in 2020 but didn't use the quota. Now you apply in 2025. **Result: AUTOMATIC REJECTION.** The government database tracks the issuance, making your family ineligible, regardless of use.</p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <h4 className="font-bold text-red-900 mb-2">⚠️ Bottom Line</h4>
            <p className="text-red-800">
              **If ANY sibling got this certificate before you, you cannot apply.** The government cross-checks previous applications, Aadhaar linking, and ration card data. Hidden or "forgotten" applications WILL be discovered.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. Document Complexity: The TC Challenge
          </h2>
          <p>The documentation requirements, especially for your parents, cause massive headaches for families.</p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Mandatory Documents:
          </h3>
          <p>For the Applicant: Transfer Certificate (TC) from 12th Standard, Marks Sheets (10th + 12th), Aadhaar, etc.</p>
          <p>For **BOTH Parents** (The Complicated Part):</p>
          <ul className="space-y-2 text-gray-700 my-6">
            <li>Option A: School Transfer Certificates (8th, 10th, or 12th) proving they did **NOT** complete a degree.</li>
            <li>Option B: If TC is lost, a Sworn Affidavit on **₹20 stamp paper** declaring non-graduate status.</li>
            <li>Aadhaar Cards of Both Parents, Ration Card (listing all family members).</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            🚨 The TC Problem
          </h3>
          <p>Your parents' school TCs are 20-30 years old. Most families have lost them. Getting a duplicate from a closed school or a school in another city can take **2-6 months** and cost **₹500-₹2,000** in travel and fees.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-gray-900 mb-3">Key Information: Name Matching</h4>
            <ul className="space-y-2 text-gray-800">
              <li>• Names must match **EXACTLY** across Aadhaar, Birth Certificate, School TC, and Ration Card.</li>
              <li>• "Suresh Kumar" vs "S. Kumar" = **Rejection**.</li>
              <li>• Fixing a name mismatch requires gazette notification (**3-6 months, ₹2,000-₹5,000 cost**).</li>
            </ul>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. The Application Process: Where DIY Goes Wrong
          </h2>
          <p>The application is submitted via the **TNeGA e-Sevai Portal** (Service Code: REV-104), requiring a **Citizen Access Number (CAN)**.</p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Processing Steps:
          </h3>
          <p>Online Application → Tahsildar office → Document Verification by Revenue Inspector (RI) → Educational Verification → Family Verification (Sibling Trap Check) → Final Approval.</p>
          
          <p>**Timeline:** Official: 30-45 days. **Reality: 60-90 days** (if smooth). With rejection: **4-6 months**.</p>
          
          <p>Common Rejection Reasons:</p>
          <ul className="space-y-2 text-gray-700 my-6">
            <li>**Sibling Trap (38%)** - Previous application by sibling found</li>
            <li>**Parent TC Missing/Incorrect (28%)** - Unable to prove non-graduate status</li>
            <li>**Name Mismatch (18%)** - Spelling variations across documents</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <h4 className="font-bold text-red-900 mb-2">⚠️ Critical Timing Issue</h4>
            <p className="text-red-800">
              College admissions don't wait. If your certificate is rejected in July, you’ve already missed the TNEA counseling for that year. **One rejection = One year delay + Full tuition fees + No scholarship.**
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. Why Students Lose ₹2 Lakhs on a Document Error
          </h2>
          <p>The **Total Savings** from the certificate can be **₹1,50,000-₹2,50,000** over four years. If rejected, you pay full fees, losing that entire amount.</p>
          
          <p className="text-lg text-gray-700">All because of one sibling trap oversight, one missing parent TC, or one name spelling mismatch.</p>
          
          <p className="text-xl font-bold text-blue-600 mt-6">Most families only discover these issues AFTER rejection—when the admission cycle is over.</p>


          {/* STEP 6: Main CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl my-12 not-prose">
            <h2 className="text-3xl font-bold mb-4">
              ⚡ Don't Risk Your Scholarship for a Document Error
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              The application is complex, and we eliminate the **38% rejection risk** to protect your **₹2 lakh scholarship.**
            </p>

            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                Our Professional Consulting Package (₹{blogMetadata.servicePrice} total) guarantees:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Sibling Trap Verification:</strong> We check government databases to confirm no previous sibling applications.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Document Precision:</strong> We verify all names and documents to eliminate mismatches (18% rejection cause).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Parent TC/Affidavit Management:</strong> We handle parent document procurement or draft legally compliant affidavits.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>First-Time Approval Guarantee:</strong> If rejected due to our error, we resubmit at no cost.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-xl mb-3">Price Breakdown (Transparent):</h4>
              <ul className="space-y-2">
                <li>• Statutory Fee: <strong>₹{blogMetadata.statutoryFee}</strong> (you pay directly to government)</li>
                <li>• Professional Consulting Fee: <strong>₹{parseFloat(blogMetadata.servicePrice) - parseFloat(blogMetadata.statutoryFee) - (parseFloat(blogMetadata.servicePrice) - parseFloat(blogMetadata.statutoryFee)) * 0.18}</strong></li>
                <li>• GST (18% on professional fee only): <strong>₹{((parseFloat(blogMetadata.servicePrice) - parseFloat(blogMetadata.statutoryFee)) * 0.18).toFixed(2)}</strong></li>
                <li className="pt-2 border-t border-white/20 text-xl font-bold">Total: ₹{blogMetadata.servicePrice}</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href={`/services/${blogMetadata.serviceSlug}`}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Get Professional Help → ₹{blogMetadata.servicePrice}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <p className="text-center text-sm mt-4 text-blue-200">
                **ROI: 11,800% - 33,000%** on your investment by protecting your potential scholarship savings.
            </p>
          </div>

          {/* STEP 7: FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: Can I apply myself and save the ₹590 professional fee?
              </h3>
              <p className="text-gray-700">
                Yes, but consider the risk: **38% rejection rate**, and if rejected, you lose an entire year of admission + pay full fees (₹90,000+). Saving **₹590** but risking **₹90,000** is mathematically poor decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: What if my older sibling got the certificate but never used it?
              </h3>
              <p className="text-gray-700">
                Doesn't matter. Your application will be rejected. The rule is based on **"certificate issued,"** not "certificate used."
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: My parents studied only up to 10th. Do I still need their TCs?
              </h3>
              <p className="text-gray-700">
                Yes. You need proof they did **NOT** complete a degree. Their 10th TC or school leaving certificate is perfect proof. If lost, a legally compliant affidavit is required.
              </p>
            </div>
          </div>

          {/* STEP 8: Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Conclusion
          </h2>

          <p className="text-xl text-gray-700">
            The First Graduate Certificate can save your family **₹2 lakhs** over 4 years of college. But 38% of applicants lose this benefit due to the Sibling Trap and document errors.
          </p>
          
          <p className="text-lg text-gray-700">
            The question is **"Can I afford to lose ₹2 lakhs over a ₹756 decision?"** Most families realize this after rejection—when it's too late to fix for the current admission year.
          </p>

          {/* Comparison Box */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border-2 border-red-200 bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3 text-xl">❌ DIY Route</h3>
              <p className="text-red-800">
                Save ₹756 but risk losing **₹2 lakhs** in scholarships if rejected. **38% chance of rejection.**
              </p>
            </div>
            <div className="border-2 border-green-200 bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Professional Route</h3>
              <p className="text-green-800">
                Invest **₹756.20** for guaranteed accuracy, verification of the Sibling Trap, and protection of your **₹2 lakh potential savings.**
              </p>
            </div>
          </div>

          {/* STEP 9: Legal Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-12">
            <p className="text-sm text-gray-800">
              <strong>⚠️ Important Legal Disclaimer:</strong> Eazy Sevai is a private documentation and consulting firm. 
              We are not affiliated with or endorsed by the Government of India, Government of Tamil Nadu, or TNeGA. 
              All government services can be obtained directly from government portals (tnesevai.tn.gov.in) at standard 
              government-prescribed rates (₹{blogMetadata.statutoryFee} statutory fee). Our professional consulting fee 
              is for document preparation, verification, and process management services.
            </p>
          </div>

          {/* STEP 10: Final CTA */}
          <div className="text-center my-12">
            <Link href={`/services/${blogMetadata.serviceSlug}`}>
              <Button size="lg" className="text-lg px-8 py-6">
                Apply for {blogMetadata.serviceName} with Professional Assistance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}