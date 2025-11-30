'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MegaMenu from './navigation/MegaMenu';
import MobileMenu from './navigation/MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top White Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-teal-600 rounded-lg text-white font-bold text-xl">
                e
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Eazy Sevai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown - Uses MegaMenu */}
              <MegaMenu />

              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </Link>

              <Link
                href="/how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                How It Works
              </Link>

              <Link
                href="/pricing"
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                Pricing
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:7845495937"
                className="px-4 py-2 text-sm text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium"
              >
                📞 Call Now
              </a>
              <Link 
                href="/services"
                className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Browse Services
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}