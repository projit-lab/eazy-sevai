export default function GlobalServiceDisclaimer() {
  return (
    <div className="mt-8 p-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
      <h3 className="text-lg font-bold mb-3" style={{ color: '#1e3a5f' }}>
        📋 Our Service Scope
      </h3>
      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>What We Do:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Complete form filling and documentation</li>
          <li>Application submission on your behalf</li>
          <li>Follow-up with government offices</li>
          <li>Status tracking and updates</li>
          <li>Document verification and quality check</li>
        </ul>
        <p className="mt-3"><strong>What You May Need to Do:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Visit government office for biometrics/verification (if required)</li>
          <li>Host site inspections (if applicable)</li>
          <li>Pay government fees directly at actuals (for variable fee services)</li>
        </ul>
      </div>
    </div>
  )
}