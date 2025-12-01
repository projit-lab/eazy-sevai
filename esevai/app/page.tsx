import Link from 'next/link'
import { Shield, CheckCircle, Clock, FileCheck, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0066b3]/20 rounded-full text-sm font-semibold mb-6 shadow-sm" style={{ color: '#0066b3' }}>
              <Shield className="w-4 h-4" />
              Professional Documentation Services
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1e3a5f' }}>
              Fast, Easy, Verified.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Your Government Documents Done Right.
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert Private Consulting. Zero Hassle. Guaranteed Verification.
            </p>

            {/* Description */}
            <p className="text-base text-gray-600 mb-10 max-w-4xl mx-auto">
              We are a professional documentation firm that handles the complex paperwork, submission, 
              and verification for you. Skip the queues and get it right the first time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
                style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
              >
                Browse All Services →
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-white rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg border-2"
                style={{ color: '#0066b3', borderColor: '#0066b3' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                Expert Verification
              </h3>
              <p className="text-gray-600">
                Professional review ensures accuracy
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                Zero Hassle
              </h3>
              <p className="text-gray-600">
                We handle paperwork & queues
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                Time Saved
              </h3>
              <p className="text-gray-600">
                Skip multiple office visits
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                Document Safety
              </h3>
              <p className="text-gray-600">
                Secure handling & processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Popular Services
            </h2>
            <p className="text-lg text-gray-600">
              Most requested government services
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold"
              style={{ backgroundColor: '#0066b3' }}
            >
              <TrendingUp className="w-5 h-5" />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}