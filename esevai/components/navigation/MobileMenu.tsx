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
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <Link href="/services" onClick={onClose} className="block p-3 bg-teal-600 text-white rounded-lg text-center font-medium">
            Browse All Services
          </Link>

          <div className="space-y-2">
            {dynamicCategories.map(cat => (
              <Link
                key={cat.id}
                href={`/services#${cat.id}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-medium">{cat.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t space-y-2">
            <Link href="/how-it-works" onClick={onClose} className="block p-3 hover:bg-gray-50 rounded-lg">
              How It Works
            </Link>
            <Link href="/pricing" onClick={onClose} className="block p-3 hover:bg-gray-50 rounded-lg">
              Pricing
            </Link>
            <Link href="/about" onClick={onClose} className="block p-3 hover:bg-gray-50 rounded-lg">
              About Us
            </Link>
            <Link href="/contact" onClick={onClose} className="block p-3 hover:bg-gray-50 rounded-lg">
              Contact
            </Link>
          </div>

          <a href="tel:+917845495937" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-teal-600">
            <Phone className="w-5 h-5" />
            +91 78454 95937
          </a>
        </div>
      </div>
    </div>
  )
}