import { getAllServices } from '@/lib/services'
import Link from 'next/link'
import { serviceCategories } from '@/lib/services'

export default function ServicesPage() {
  const allServices = getAllServices()
  
  // Group services by category
  const servicesByCategory = serviceCategories.map(category => ({
    ...category,
    services: allServices.filter(s => s.category === category.id),
    count: allServices.filter(s => s.category === category.id).length
  })).filter(cat => cat.services.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
              All Government Services
            </h1>
            <p className="text-lg text-gray-600">
              Browse our complete catalog of {allServices.length}+ government services. Fast processing, 
              expert assistance, and doorstep delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#1e3a5f' }}>
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesByCategory.map((category) => (
              <Link
                key={category.id}
                href={`/services#${category.id}`}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#0066b3] hover:shadow-lg transition-all group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0066b3] transition-colors" style={{ color: '#1e3a5f' }}>
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: '#0066b3' }}>
                    {category.count} services
                  </span>
                  <span className="text-[#0066b3] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesByCategory.map((category) => (
            <div key={category.id} id={category.id} className="mb-12">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2" style={{ borderColor: '#0066b3' }}>
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>
                  {category.name}
                </h2>
                <span className="ml-auto text-sm text-gray-600">
                  {category.count} services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[#0066b3] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#0066b3] transition-colors flex-1">
                        {service.name}
                      </h3>
                      {service.popular && (
                        <span className="ml-2 px-2 py-1 bg-[#0066b3] text-white text-xs font-bold rounded-full">
                          HOT
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold" style={{ color: '#0066b3' }}>
                        ₹{service.totalPayable.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {service.processingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}