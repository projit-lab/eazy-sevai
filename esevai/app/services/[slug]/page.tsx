import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import Link from 'next/link';
import ServiceFeasibilityBadge from '@/components/ServiceFeasibilityBadge'
import GlobalServiceDisclaimer from '@/components/GlobalServiceDisclaimer'


export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/services" 
          className="inline-flex items-center hover:opacity-80 transition mb-6"
          style={{ color: '#0066b3' }}
        >
          ← Back to Services
        </Link>

        {/* Service Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            {service.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {service.description}
          </p>
          {service.popular && (
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#0066b3', color: 'white' }}>
              ⭐ Popular Service
            </span>
          )}
        </div>

        <ServiceFeasibilityBadge
          isFullyOnline={service.isFullyOnline}
          requiresPhysicalPresence={service.requiresPhysicalPresence}
          requiresSiteInspection={service.requiresSiteInspection}
          isStatutoryFeeVariable={service.isStatutoryFeeVariable}
        />

        {/* Fee Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {service.isStatutoryFeeVariable && (
            <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>⚠️ Variable Fee:</strong> {service.statutoryFeeNote}
              </p>
            </div>
          )}
          
          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a5f' }}>
            💰 Fee Breakdown
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Government Statutory Fee:</span>
              <span className="font-semibold text-gray-900">
                {service.statutoryFee === 0 ? 'Free' : `₹${service.statutoryFee.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Professional Service Fee:</span>
              <span className="font-semibold text-gray-900">₹{service.professionalFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">GST (18% on Professional Fee):</span>
              <span className="font-semibold text-gray-900">₹{service.gst.toFixed(2)}</span>
            </div>
            <div className="border-t-2 pt-3 flex justify-between items-center mt-3" style={{ borderColor: '#0066b3' }}>
              <span className="text-lg font-bold" style={{ color: '#1e3a5f' }}>Total Payable:</span>
              <span className="text-3xl font-bold" style={{ color: '#0066b3' }}>₹{service.totalPayable.toFixed(2)}</span>
            </div>
          </div>
          
          {/* GST Note */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Note:</strong> GST is applicable only on professional service fee, not on government statutory fee.
            </p>
          </div>
        </div>

        {/* Processing Time */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e3a5f' }}>
            ⏱️ Processing Time
          </h2>
          <p className="text-lg font-semibold" style={{ color: '#0066b3' }}>
            {service.processingTime}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Processing time may vary based on document completeness and government processing schedules.
          </p>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a5f' }}>
            📄 Required Documents
          </h2>
          <ul className="space-y-3">
            {service.requiredDocuments.map((doc, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#14b8a6', color: 'white', fontSize: '12px' }}>
                  ✓
                </span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 p-4 border-2 rounded-lg" style={{ borderColor: '#f0b42f', backgroundColor: '#fff8e6' }}>
            <p className="text-sm" style={{ color: '#92400e' }}>
              <strong>⚠️ Important:</strong> Please ensure all documents are clear, legible, and valid. Incomplete or unclear documents may delay processing.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/services/${slug}/apply`}
            className="flex-1 text-white text-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
          >
            Apply Now →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            style={{ borderColor: '#0066b3', color: '#0066b3' }}
          >
            Need Help?
          </Link>
        </div>

        {/* Why Choose Us */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
            ✨ Why Choose Eazy Sevai?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="font-semibold" style={{ color: '#1e3a5f' }}>Expert Verification</h4>
                <p className="text-sm text-gray-600">Professional review ensures accuracy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold" style={{ color: '#1e3a5f' }}>Fast Processing</h4>
                <p className="text-sm text-gray-600">Quick turnaround time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="font-semibold" style={{ color: '#1e3a5f' }}>Zero Hassle</h4>
                <p className="text-sm text-gray-600">We handle everything for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Service Disclaimer */}
        <GlobalServiceDisclaimer />
      </div>
    </div>
  );
}