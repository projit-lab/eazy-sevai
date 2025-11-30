import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gray-50 pt-20 pb-12"> {/* ← Fixed */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Rest of your code stays the same */}
        <Link 
          href="/services" 
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6"
        >
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{service.description}</p>
          {service.popular && (
            <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
              Popular Service
            </span>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Fee Breakdown</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Government Statutory Fee:</span>
              <span className="font-semibold">₹{service.statutoryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Professional Service Fee:</span>
              <span className="font-semibold">₹{service.professionalFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">GST (18% on Professional Fee):</span>
              <span className="font-semibold">₹{service.gst.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between items-center">
              <span className="text-lg font-bold">Total Payable:</span>
              <span className="text-2xl font-bold text-teal-600">₹{service.totalPayable.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">Processing Time</h2>
          <p className="text-lg text-gray-700">{service.processingTime}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <ul className="space-y-2">
            {service.requiredDocuments.map((doc, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            href={`/services/${slug}/apply`}
            className="flex-1 bg-teal-600 text-white text-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition"
          >
            Apply Now →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition"
          >
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}