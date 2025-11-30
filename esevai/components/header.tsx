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
            <Image
              src="/logo.png"
              alt="Eazy Sevai"
              width={40}
              height={40}
              className="rounded-lg shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-gray-900">
                Eazy Sevai
              </span>
              <span className="text-xs text-gray-500">
                Tamil Nadu Services
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <MegaMenu />
            <Link href="/eligibility-checker" className="text-sm font-medium text-gray-700 hover:text-teal-600">
              Eligibility Checker
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-teal-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-teal-600">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/services"
            className="hidden md:block px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}