'use client'

import { X, Phone, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { getAllServices } from '@/lib/services'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  const allServices = getAllServices()
  const dynamicCategories = serviceCategories.map(cat => ({
    ...cat,
    count: allServices.filter(s => s.category === cat.id).length
  })).filter(cat => cat.count > 0)

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-brand-navy to-brand-blue">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="p-2 text-white hover:bg-white/10 rounded-lg transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Primary CTA */}
          <Link 
            href="/services" 
            onClick={onClose} 
            className="block p-3 bg-gradient-to-r from-brand-blue to-brand-teal text-white rounded-lg text-center font-semibold shadow-md hover:shadow-lg transition"
          >
            Browse All Services
          </Link>

          {/* Service Categories */}
          <div className="space-y-2">
            {dynamicCategories.map(cat => (
              <Link
                key={cat.id}
                href={`/services#${cat.id}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <div>
                    <span className="font-medium text-gray-900 group-hover:text-brand-blue transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">({cat.count})</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-blue transition-colors" />
              </Link>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="pt-4 border-t space-y-2">
            <Link 
              href="/how-it-works" 
              onClick={onClose} 
              className="block p-3 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-brand-blue transition"
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              onClick={onClose} 
              className="block p-3 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-brand-blue transition"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              onClick={onClose} 
              className="block p-3 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-brand-blue transition"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={onClose} 
              className="block p-3 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-brand-blue transition"
            >
              Contact
            </Link>
          </div>

          {/* Phone CTA */}
          <a 
            href="tel:+917845495937" 
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-brand-blue rounded-lg text-brand-blue font-semibold hover:shadow-md transition"
          >
            <Phone className="w-5 h-5" />
            <div>
              <div className="text-xs text-gray-600">Call Us</div>
              <div>+91 78454 95937</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}