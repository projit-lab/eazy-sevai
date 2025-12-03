'use client'

import Link from 'next/link'
import Image from 'next/image'
import MegaMenu from './navigation/MegaMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066b3] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/logo.png"
                alt="Eazy Sevai"
                width={40}
                height={40}
                className="relative rounded-lg shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#0066b3] transition-colors">
                Eazy Sevai
              </span>
              <span className="text-xs text-gray-600">
                Tamil Nadu Services
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Home
            </Link>
            <MegaMenu />
            <Link href="/eligibility-checker" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Eligibility Checker
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button with brand gradient */}
          <Link
            href="/services"
            className="hidden md:block px-6 py-2.5 text-white rounded-lg hover:shadow-lg transition-all font-semibold shadow-md"
            style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}