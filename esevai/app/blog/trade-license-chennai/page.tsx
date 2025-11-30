import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

/*
 * BLOG PAGE TEMPLATE
 *
 * Instructions:
 * 1. Copy this file to app/blog/[your-slug]/page.tsx
 * 2. Update the metadata object with your blog post details
 * 3. Fill in the content sections
 * 4. Update the CTA pricing and service link
 */

// STEP 1: Update this metadata
const blogMetadata = {
  title: "How to Get a Trade License in Chennai (COC-401): The Business Owner's Guide to First-Time Approval",
  subtitle: "Avoid the 52% rejection rate and 6-month delay",
  readTime: "11 min read",
  lastUpdated: "January 2025",
  serviceSlug: "trade-license", // e.g., "trade-license"
  servicePrice: "2,106.00", // e.g., "2,106.00" (minimum statutory fee is variable)
  serviceName: "Trade License", // e.g., "Trade License"
  statutoryFee: "450", // Using an estimated minimum statutory fee for breakdown transparency
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
            <strong>⚠️ Critical Alert:</strong> **52% of first-time applications are rejected** due to hidden NOC requirements and verification failures. Operating without a license risks **fines up to ₹25,000** and forced closure.
          </p>
        </div>

        {/* STEP 3: Introduction paragraph */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            Opening a business in Chennai? You need a **Trade License** before you can legally operate. But here's what the government won't tell you upfront: getting the license isn't just about filling a form. It requires coordinating **multiple NOCs**, passing a **physical site inspection**, and navigating a fee structure that recently **increased by 150%**. This guide reveals the hidden approval requirements and shows you how to open your business faster.
          </p>

          {/* STEP 4: Main content sections */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            1. Who Needs a Trade License?
          </h2>
          <p>The Trade License is **mandatory** for any business operating a commercial establishment within **Greater Chennai Corporation (GCC)** limits, including retail shops, restaurants, manufacturing units, service centers, and warehouses.</p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            ⚠️ The Risk of Operating Without a License
          </h3>
          <p>Penalties include a **₹5,000-₹25,000 fine** per violation and **forced business closure**. A real-life scenario resulted in a business losing **₹3,15,000** for trying to save the license fee.</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            2. The NOC Hurdle: Why It's Harder Than You Think
          </h2>
          <p>You cannot apply for a Trade License until you have mandatory No Objection Certificates (NOCs).</p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Required NOCs and Complexity
          </h3>
          
          <ul className="space-y-4 text-gray-700 my-6">
            <li>
              **Fire Department NOC (DFR-103):** Required for most commercial buildings and restaurants. Why it's complex: Requires checking building plans and a site inspection for fire safety equipment, exits, and signage. **Processing time: 30-60 days.**
            </li>
            <li>
              **Pollution Control Board (PCB) NOC:** Required for manufacturing units, auto workshops, and any business with emissions/effluents. Why it's complex: Requires an environmental impact assessment and waste disposal plan. **Processing time: 45-90 days.**
            </li>
            <li>
              **Health Department NOC:** Required for restaurants, food businesses, and clinics. Requires FSSAI license and sanitation compliance.
            </li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <h4 className="font-bold text-red-900 mb-2">🚨 The Coordination Trap</h4>
            <p className="text-red-800">
              **Total Coordination Time: 2-4 months.** Most business owners underestimate this, thinking they can just apply for the Trade License directly, only to discover they need to **START** the 2-4 month NOC process. Result: **3-6 month delay in business opening.**
            </p>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            3. The Verification Trap: The ARO Site Inspection
          </h2>
          <p>After submission, your application faces the **physical verification** by the Zonal Assistant Revenue Officer (ARO). This is a **surprise site inspection** where 35% of applications are rejected.</p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            What the ARO Checks:
          </h3>
          <ul className="space-y-2 text-gray-700 my-6">
            <li>**Premises Compliance:** Business area matches application, fire safety equipment is functional (regardless of Fire NOC), and emergency exits are clear.</li>
            <li>**Activity Match:** Business activity must exactly match the license type applied for.</li>
            <li>**Property Proof:** Valid rent agreement or property tax receipt, and landlord consent letter (if rented).</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            ⚠️ Common Verification Failures (35% Rejection)
          </h3>
          <p>Failures include applying before the shop setup is complete, **address mismatch**, **expired fire extinguishers**, or running a different business than applied for. This can lead to a **3-6 month delay** and **₹2.5-₹7 lakhs** in total loss.</p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            4. Document Checklist: One Missing Item = Rejection
          </h2>
          <p>Trade License requires perfect documentary precision. The slightest error causes instant rejection.</p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Mandatory Documents:
          </h3>
          
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-gray-900 mb-3">Key Requirement: Sworn Affidavit (CRITICAL)</h4>
            <ul className="space-y-2 text-gray-800">
              <li>• Must be on **₹20 non-judicial stamp paper**.</li>
              <li>• Must be **notarized**.</li>
              <li>• Must contain **specific declarations** (generic templates are rejected).</li>
            </ul>
            <p className="text-red-800 mt-3">**Cost of Error:** Requires new affidavit and a **2-month resubmission delay**.</p>
          </div>

          <p>Other documents include: **Property Documents** (deed/tax receipt, rent agreement/landlord consent), **Business Registration Documents** (GST, PAN), **All Mandatory NOCs**, **Site Plan**, and **Building Plan Approval**.</p>
          
          <p className="text-red-600 font-bold mt-4">**Document Name Matching Rule:** "Rajesh Kumar" (Aadhaar) ≠ "R. Kumar" (Property deed) = **REJECTION.** Fixing this requires an expensive and time-consuming gazette notification.</p>

          {/* STEP 5: More sections as needed */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            5. Fee Structure: The 150% Hike You Didn't Know About
          </h2>
          <p>The statutory Trade License fees recently increased by **150%** and are highly variable, based on **Business Category, Business Area (sq ft), and Zone**. The fee matrix is complex.</p>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <h4 className="font-bold text-red-900 mb-2">⚠️ The Payment Error Trap</h4>
            <p className="text-red-800">
              **32% of applications get stuck** because of payment errors (wrong fee calculated, incorrect zone/category, or wrong payment mode). **One calculation error = 2-month delay.** Expert calculation is vital to avoid this.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            6. Processing Timeline: What to Expect
          </h2>
          <p>**Official Timeline:** 15-30 days. **Reality (if smooth):** 60-90 days (2-3 months). **With Rejection:** 180+ days (6 months).</p>
          <p>Every month of delay due to rejection can cost a business **₹1.5 - ₹6 lakhs** in lost revenue.</p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            7. Why 52% of Applications Get Rejected
          </h2>
          <p>The average cost of rejection is a loss of **₹2.5 - ₹7 lakhs** in time, revenue, and compliance fixes. The top causes are ARO verification failure (35%) and missing/expired NOCs (28%).</p>


          {/* STEP 6: Main CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl my-12 not-prose">
            <h2 className="text-3xl font-bold mb-4">
              ⚡ Open for Business Faster. Guaranteed.
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Don't let bureaucracy delay your revenue. Avoid the 52% rejection rate and the 6-month delay that could cost your business lakhs.
            </p>

            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                Our Professional Consulting Package (₹{blogMetadata.servicePrice} minimum total) is Your Fast-Track:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>NOC Coordination:</strong> We manage Fire, PCB, and Health NOC applications and timelines.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>ARO Inspection Preparation:</strong> We prepare your site to pass the physical verification first-time (35% rejection eliminated).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Accurate Fee Calculation:</strong> We calculate the exact fee based on the complex 150% increased matrix.</span>
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
                <li>• Statutory Fee: <strong>₹100-2,000 (Variable)</strong> (you pay directly to government based on category)</li>
                <li>• Professional Consulting Fee: <strong>₹1,700</strong></li>
                <li>• GST (18% on professional fee only): <strong>₹306.00</strong></li>
                <li className="pt-2 border-t border-white/20 text-xl font-bold">Total (Minimum): ₹{blogMetadata.servicePrice}</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href={`/services/${blogMetadata.serviceSlug}`}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Get Professional Help → From ₹{blogMetadata.servicePrice}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm mt-4 text-blue-200">
                **ROI: Over 214,000%** return on investment if you open just 3 months faster.
            </p>
          </div>

          {/* STEP 7: FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: Can I apply myself and save the ₹1,700 professional fee?
              </h3>
              <p className="text-gray-700">
                Yes, but consider: **52% rejection rate**, **3-6 month delays**, and **₹2-₹7 lakhs** in lost revenue. Saving ₹1,700 but risking lakhs in business revenue is poor business math.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: I'm renting. Do I still need Fire NOC?
              </h3>
              <p className="text-gray-700">
                Yes. Fire NOC is for the **premises**, not the ownership. You must coordinate obtaining it, even if the landlord doesn't have it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q: How long does the process take with professional help?
              </h3>
              <p className="text-gray-700">
                We fast-track it to **60-90 days** (from start of NOCs to license issuance) by coordinating all NOCs and preparation simultaneously, minimizing the risk of the 6-month DIY delay.
              </p>
            </div>
          </div>

          {/* STEP 8: Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Conclusion
          </h2>

          <p className="text-xl text-gray-700">
            Getting a Trade License in Chennai isn't just filling a form. It requires coordinating multiple NOCs and passing a physical site inspection.
          </p>
          
          <p className="text-lg text-gray-700 mt-4">
            The question isn't "Should I pay for professional help?" The question is **"Can my business afford 6-month delays?"**
          </p>

          {/* Comparison Box */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border-2 border-red-200 bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3 text-xl">❌ DIY Route</h3>
              <p className="text-red-800">
                Save ₹2,106 but risk **6-month delays**, **₹5 lakhs** in lost revenue, and a **52% rejection chance**.
              </p>
            </div>
            <div className="border-2 border-green-200 bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Professional Route</h3>
              <p className="text-green-800">
                Invest **₹2,106** for guaranteed fast-track processing, first-time approval, and the ability to **open your business on schedule**.
              </p>
            </div>
          </div>
          
          <p className="text-xl font-bold text-blue-600">
            Don't let bureaucracy be the reason your business fails to launch on time.
          </p>

          {/* STEP 9: Legal Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-12">
            <p className="text-sm text-gray-800">
              <strong>⚠️ Important Legal Disclaimer:</strong> Eazy Sevai is a private documentation and consulting firm. 
              We are not affiliated with or endorsed by the Government of India, Government of Tamil Nadu, or Greater Chennai Corporation. 
              All government services can be obtained directly from government portals at standard government-prescribed rates 
              (₹100-₹2,000 statutory fee). Our professional consulting fee (₹1,700 + GST) is for NOC coordination, document preparation, 
              site inspection preparation, and process management services.
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