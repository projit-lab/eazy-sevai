// COMPLETE SERVICE PRICING UPDATE
// This file contains pricing for ALL 90+ services
// Add this to your lib/services.ts to replace the "Coming Soon" services

export const COMPLETE_SERVICE_PRICING = {
  // ====================
  // IDENTITY & PERSONAL
  // ====================
  'aadhaar': { price: 2000.00, comingSoon: false },
  'pan-card': { price: 1500.00, comingSoon: false },
  'voter-id': { price: 1200.00, comingSoon: false },
  'passport': { price: 3500.00, comingSoon: false },
  'driving-license': { price: 2500.00, comingSoon: false },
  'ration-card': { price: 1800.00, comingSoon: false },
  
  // ====================
  // STUDENT & EDUCATION (REV-10x)
  // ====================
  'community-certificate': { price: 708.02, comingSoon: false },
  'nativity-certificate': { price: 590.00, comingSoon: false },
  'income-certificate': { price: 767.26, comingSoon: false },
  'first-graduate-certificate': { price: 756.20, comingSoon: false },
  'inter-caste-marriage-certificate': { price: 885.00, comingSoon: false },
  'ncc-certificate': { price: 590.00, comingSoon: false },
  'sports-certificate': { price: 649.00, comingSoon: false },
  'differently-abled-certificate': { price: 826.20, comingSoon: false },
  'ex-serviceman-certificate': { price: 767.26, comingSoon: false },
  
  // ====================
  // PERSONAL & FAMILY (REV-11x)
  // ====================
  'legal-heir-certificate': { price: 1405.20, comingSoon: false },
  'birth-certificate': { price: 472.00, comingSoon: false },
  'death-certificate': { price: 472.00, comingSoon: false },
  'marriage-certificate': { price: 885.00, comingSoon: false },
  'widow-certificate': { price: 708.02, comingSoon: false },
  'deserted-woman-certificate': { price: 767.26, comingSoon: false },
  'unmarried-certificate': { price: 590.00, comingSoon: false },
  'no-remarriage-certificate': { price: 649.00, comingSoon: false },
  'temple-priest-certificate': { price: 708.02, comingSoon: false },
  'agricultural-labourer-certificate': { price: 649.00, comingSoon: false },
  'small-marginal-farmer-certificate': { price: 708.02, comingSoon: false },
  'bonafide-certificate': { price: 590.00, comingSoon: false },
  
  // ====================
  // SOCIAL & PENSION (REV-20x)
  // ====================
  'old-age-pension': { price: 618.02, comingSoon: false },
  'widow-pension': { price: 618.02, comingSoon: false },
  'differently-abled-pension': { price: 649.00, comingSoon: false },
  'deserted-wife-pension': { price: 649.00, comingSoon: false },
  'unmarried-women-pension': { price: 649.00, comingSoon: false },
  'agricultural-labourer-pension': { price: 708.02, comingSoon: false },
  'destitute-pension': { price: 708.02, comingSoon: false },
  'transgender-pension': { price: 767.26, comingSoon: false },
  
  // Welfare Schemes
  'girl-child-protection-scheme': { price: 826.20, comingSoon: false },
  'free-bicycle-scheme': { price: 590.00, comingSoon: false },
  'free-laptop-scheme': { price: 649.00, comingSoon: false },
  'marriage-assistance-scheme': { price: 885.00, comingSoon: false },
  'housing-scheme-application': { price: 1180.00, comingSoon: false },
  'sc-st-scholarship': { price: 826.20, comingSoon: false },
  'bc-mbc-scholarship': { price: 826.20, comingSoon: false },
  'minority-scholarship': { price: 826.20, comingSoon: false },
  
  // ====================
  // PROPERTY & LAND (REV-50x)
  // ====================
  'patta-transfer': { price: 3540.00, comingSoon: false },
  'patta-subdivision': { price: 4130.00, comingSoon: false },
  'patta-name-correction': { price: 2360.00, comingSoon: false },
  'patta-mutation': { price: 3186.00, comingSoon: false },
  'encumbrance-certificate': { price: 1180.00, comingSoon: false },
  'survey-resurvey': { price: 5900.00, comingSoon: false },
  'land-conversion': { price: 8850.00, comingSoon: false },
  'land-partition': { price: 4720.00, comingSoon: false },
  'land-dispute-resolution': { price: 7080.00, comingSoon: false },
  'property-tax-assessment': { price: 1770.00, comingSoon: false },
  'building-plan-approval': { price: 5900.00, comingSoon: false },
  'occupancy-certificate': { price: 3540.00, comingSoon: false },
  'completion-certificate': { price: 3186.00, comingSoon: false },
  
  // ====================
  // BUSINESS & LICENSING (COC-4xx)
  // ====================
  'trade-license': { price: 2106.00, comingSoon: false },
  'food-license': { price: 2360.00, comingSoon: false },
  'shops-establishments-license': { price: 1770.00, comingSoon: false },
  'factory-license': { price: 3540.00, comingSoon: false },
  'small-scale-industry-registration': { price: 2950.00, comingSoon: false },
  'msme-udyam-registration': { price: 2360.00, comingSoon: false },
  'gst-registration': { price: 2360.00, comingSoon: false },
  'professional-tax-registration': { price: 1770.00, comingSoon: false },
  'import-export-code': { price: 2950.00, comingSoon: false },
  
  // Specialized Business Licenses
  'money-lender-license': { price: 3540.00, comingSoon: false },
  'pawn-broker-license': { price: 2950.00, comingSoon: false },
  'liquor-license': { price: 11800.00, comingSoon: false },
  'explosive-license': { price: 5900.00, comingSoon: false },
  'arms-license': { price: 8850.00, comingSoon: false },
  'hotel-license': { price: 3540.00, comingSoon: false },
  'restaurant-license': { price: 2950.00, comingSoon: false },
  'medical-shop-license': { price: 2360.00, comingSoon: false },
  'petrol-bunk-license': { price: 11800.00, comingSoon: false },
  
  // ====================
  // SAFETY & COMPLIANCE (DFR-xxx, PCB-xxx)
  // ====================
  'fire-noc': { price: 5897.30, comingSoon: false },
  'fire-safety-certificate': { price: 4720.00, comingSoon: false },
  'pollution-control-noc': { price: 7080.00, comingSoon: false },
  'environmental-clearance': { price: 11800.00, comingSoon: false },
  'water-noc': { price: 3540.00, comingSoon: false },
  'electricity-noc': { price: 2950.00, comingSoon: false },
  'health-noc': { price: 2360.00, comingSoon: false },
  
  // ====================
  // VEHICLE & TRANSPORT
  // ====================
  'vehicle-registration': { price: 2360.00, comingSoon: false },
  'vehicle-transfer': { price: 2106.00, comingSoon: false },
  'vehicle-hypothecation': { price: 1770.00, comingSoon: false },
  'duplicate-rc': { price: 1180.00, comingSoon: false },
  'noc-vehicle-relocation': { price: 1770.00, comingSoon: false },
  'fitness-certificate': { price: 1180.00, comingSoon: false },
  'learners-license': { price: 885.00, comingSoon: false },
  'permanent-license': { price: 1180.00, comingSoon: false },
  'international-driving-permit': { price: 2360.00, comingSoon: false },
  
  // ====================
  // LEGAL & COURT
  // ====================
  'affidavit-drafting': { price: 590.00, comingSoon: false },
  'notary-services': { price: 472.00, comingSoon: false },
  'power-of-attorney': { price: 1180.00, comingSoon: false },
  'will-drafting': { price: 2360.00, comingSoon: false },
  'succession-certificate': { price: 5900.00, comingSoon: false },
  'name-change-gazette': { price: 2950.00, comingSoon: false },
  'legal-notice': { price: 1770.00, comingSoon: false },
};

// Function to update service pricing
export function updateServicePricing(services: any[]) {
  return services.map(service => {
    const pricing = COMPLETE_SERVICE_PRICING[service.slug as keyof typeof COMPLETE_SERVICE_PRICING];
    if (pricing) {
      return {
        ...service,
        price: pricing.price,
        comingSoon: pricing.comingSoon,
      };
    }
    return service;
  });
}

// Export service count
export const SERVICE_STATS = {
  total: Object.keys(COMPLETE_SERVICE_PRICING).length,
  active: Object.values(COMPLETE_SERVICE_PRICING).filter(s => !s.comingSoon).length,
  comingSoon: Object.values(COMPLETE_SERVICE_PRICING).filter(s => s.comingSoon).length,
};

console.log('Service Stats:', SERVICE_STATS);
// Output: { total: 90+, active: 90+, comingSoon: 0 }