import React from 'react';

/**
 * LEGAL SHIELD - EAZY SEVAI BRANDED VERSION
 * Uses official Eazy Sevai brand colors
 * Must appear on EVERY page for legal compliance
 */

interface LegalShieldProps {
  variant?: 'banner' | 'inline' | 'footer';
}

export const LegalShield: React.FC<LegalShieldProps> = ({ variant = 'inline' }) => {
  
  // Banner (top of page - using brand gold/yellow for warnings)
  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-[#f4e04d] to-[#f0a500] border-b-2 border-[#f0a500]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-[#1e3a5f] leading-relaxed">
              <span className="font-bold">Transparency Notice:</span> Eazy Sevai is a private documentation consultancy. We are not affiliated with TNeGA or the Government of Tamil Nadu. Services are also available at{' '}
              <a 
                href="https://tnEazy Sevai.tn.gov.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-semibold hover:text-[#0066a1] transition-colors"
              >
                tnEazy Sevai.tn.gov.in
              </a>{' '}
              at lower government rates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Footer (bottom of page - using brand navy)
  if (variant === 'footer') {
    return (
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0066a1] text-white py-8 border-t-4 border-[#20b2aa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start space-x-4">
            <svg className="w-6 h-6 text-[#20b2aa] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-white font-bold mb-2 text-lg">Legal Disclosure</h3>
              <p className="text-gray-200 text-sm leading-relaxed max-w-3xl">
                Eazy Sevai is a private documentation and consulting firm. We are not an agent of, nor are we affiliated with or endorsed by, the Government of India, the Government of Tamil Nadu, or the Tamil Nadu e-Governance Agency (TNeGA). We provide expert, value-added assistance, process monitoring, and documentation support services for a professional fee. All official government services and forms may also be obtained directly from the respective government portals at the standard, lower government-prescribed rates.
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="text-[#20b2aa] text-sm font-medium">Official Portal:</span>
                <a 
                  href="https://tnEazy Sevai.tn.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#f4e04d] hover:text-[#f0a500] text-sm font-semibold underline transition-colors"
                >
                  tnEazy Sevai.tn.gov.in →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inline (within content - using subtle gray with brand accent)
  return (
    <div className="bg-gradient-to-r from-gray-50 to-[#20b2aa]/5 border-l-4 border-[#20b2aa] rounded-r-lg p-4 my-6">
      <div className="flex items-start space-x-3">
        <svg className="w-5 h-5 text-[#0066a1] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="text-sm font-bold text-[#1e3a5f] mb-1">Private Consultancy Service</h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            Eazy Sevai is a private documentation and consulting firm. We are not affiliated with TNeGA or the Government of Tamil Nadu. We provide expert assistance for a professional fee.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            <span className="font-semibold text-[#0066a1]">Alternative:</span> You may also apply directly at{' '}
            <a 
              href="https://tnEazy Sevai.tn.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0066a1] underline hover:text-[#20b2aa] font-medium transition-colors"
            >
              tnEazy Sevai.tn.gov.in
            </a>{' '}
            at the government-prescribed rate (typically ₹60 for certificates).
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalShield;