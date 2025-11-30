'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, TrendingUp } from 'lucide-react'
import { getAllServices } from '@/lib/services'

// Service categories with icons
const serviceCategories = [
  { id: 'identity', name: 'Identity & Cards', icon: '🪪' },
  { id: 'certificates', name: 'Certificates', icon: '📜' },
  { id: 'legal', name: 'Legal Services', icon: '⚖️' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'property', name: 'Property', icon: '🏠' },
  { id: 'welfare', name: 'Welfare', icon: '🤝' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'other', name: 'Other Services', icon: '📋' }
]

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Get all services dynamically
  const allServices = getAllServices()
  const totalServices = allServices.length

  // Build dynamic service categories with actual services
  const dynamicServiceCategories = serviceCategories.map(category => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
    services: allServices
      .filter(s => s.category === category.id)
      .slice(0, 10) // Limit to 10 per category in dropdown
      .map(service => ({
        name: service.name,
        href: `/services/${service.slug}`,
        popular: service.popular
      })),
    totalCount: allServices.filter(s => s.category === category.id).length
  })).filter(cat => cat.services.length > 0)

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-[95vw] max-w-5xl">
            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-4 bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Government Services
                  </h3>
                  <p className="text-sm text-gray-600 mt-0.5">
                    Browse {totalServices} Tamil Nadu government services
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-gray-700">{totalServices} Services</span>
                </div>
              </div>
            </div>

            {/* Mega Menu Content */}
            <div className="p-6 max-h-[500px] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dynamicServiceCategories.map((category) => (
                  <div key={category.id} className="space-y-3">
                    {/* Category Header */}
                    <Link 
                      href={`/services#${category.id}`}
                      className="flex items-center gap-2 font-bold text-gray-900 hover:text-teal-600 transition-colors pb-2 border-b-2 border-teal-600 group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                      <span className="text-sm uppercase tracking-wide">{category.name}</span>
                      <span className="ml-auto text-xs font-normal text-gray-500">({category.totalCount})</span>
                    </Link>

                    {/* Services List */}
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            href={service.href}
                            className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all text-sm flex items-center gap-2 group px-3 py-1.5 rounded-md"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-teal-600 transition-colors"></span>
                            <span className="flex-1 group-hover:translate-x-1 transition-transform">
                              {service.name}
                            </span>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                                HOT
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                      {category.totalCount > 10 && (
                        <li>
                          <Link
                            href={`/services#${category.id}`}
                            className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center gap-1 mt-2 px-3 py-1.5 hover:bg-teal-50 rounded-md transition-colors"
                          >
                            <span>View all {category.totalCount}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA - Enhanced */}
            <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-4">
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                <TrendingUp className="w-5 h-5" />
                Browse All {totalServices} Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}