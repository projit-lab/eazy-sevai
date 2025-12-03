import { AlertCircle, MapPin, IndianRupee, CheckCircle } from 'lucide-react'

interface ServiceFeasibilityBadgeProps {
  requiresPhysicalPresence?: boolean
  requiresSiteInspection?: boolean
  isStatutoryFeeVariable?: boolean
  isFullyOnline?: boolean
}

export default function ServiceFeasibilityBadge({
  requiresPhysicalPresence,
  requiresSiteInspection,
  isStatutoryFeeVariable,
  isFullyOnline
}: ServiceFeasibilityBadgeProps) {
  
  if (!requiresPhysicalPresence && !requiresSiteInspection && !isStatutoryFeeVariable && !isFullyOnline) {
    return null
  }

  return (
    <div className="space-y-3 mb-6">
      {/* Fully Online Badge */}
      {isFullyOnline && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-900 text-sm">100% Online Service</p>
            <p className="text-green-700 text-sm mt-1">
              No need to visit any government office. Complete process handled remotely.
            </p>
          </div>
        </div>
      )}

      {/* Physical Presence Required */}
      {requiresPhysicalPresence && (
        <div className="flex items-start gap-3 p-4 bg-amber-50 border-2 border-amber-300 rounded-lg">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-900 text-sm">Physical Presence Required</p>
            <p className="text-amber-800 text-sm mt-1">
              You will need to visit the government office/center in person for biometrics, verification, or testing. 
              We will assist with form filling, appointment booking, and documentation preparation.
            </p>
          </div>
        </div>
      )}

      {/* Site Inspection Required */}
      {requiresSiteInspection && (
        <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-blue-900 text-sm">Site Inspection Required</p>
            <p className="text-blue-800 text-sm mt-1">
              Government officials will visit your property/premises for inspection. 
              We coordinate the inspection and follow up on your behalf.
            </p>
          </div>
        </div>
      )}

      {/* Variable Statutory Fee */}
      {isStatutoryFeeVariable && (
        <div className="flex items-start gap-3 p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
          <IndianRupee className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-purple-900 text-sm">Variable Government Fees</p>
            <p className="text-purple-800 text-sm mt-1">
              Actual government statutory fees will be calculated based on property size, business type, or other factors. 
              The amount shown is our professional service fee only. Government fees payable at actuals.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}