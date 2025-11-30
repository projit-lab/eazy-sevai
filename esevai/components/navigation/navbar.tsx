'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, TrendingUp } from 'lucide-react'
import { getAllServices } from '@/lib/services'

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
  
  const allServices = getAllServices()
  const totalServices = allServices.length

  const dynamicServiceCategories = serviceCategories.map(category => ({
    id: category.id,
    name: category.name,
    icon: category.icon,
    services: allServices
      .filter(s => s.category === category.id)
      .slice(0, 10)
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
        className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors py-2"
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full pt-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-[900px]">
            <div className="p-6 max-h-[600px] overflow-y-auto">
              <div className="grid grid-cols-3 gap-8">
                {dynamicServiceCategories.map((category) => (
                  <div key={category.id}>
                    <Link 
                      href={`/services#${category.id}`}
                      className="flex items-center gap-2 font-semibold text-gray-900 mb-4 hover:text-teal-600 transition-colors"
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                    <ul className="space-y-2.5">
                      {category.services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            href={service.href}
                            className="text-gray-600 hover:text-teal-600 transition-colors text-sm flex items-center gap-2 group"
                          >
                            <span className="group-hover:translate-x-1 transition-transform">
                              {service.name}
                            </span>
                            {service.popular && (
                              <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
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
                            className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1 mt-2"
                          >
                            View all {category.name} →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 p-4 sticky bottom-0">
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
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