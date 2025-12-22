import { Database, ChevronLeft, ExternalLink, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

interface CRMSetupFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function CRMSetupForm({ onBack, onSave }: CRMSetupFormProps) {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [hasPurchased, setHasPurchased] = useState('');
  const [credentialsConfirmed, setCredentialsConfirmed] = useState(false);

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all";

  const canProceed = hasPurchased === 'yes';

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #8B5CF6 1px, transparent 1px), linear-gradient(0deg, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#A78BFA] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                CRM Setup
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 7 of 7</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#7C3AED]/5"></div>

          <form className="relative space-y-6">
            {/* Selected Plan */}
            <div>
              <label className={labelClasses}>Selected Plan *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'start', label: 'Start', price: '$199/mo' },
                  { value: 'scale', label: 'Scale', price: '$299/mo' },
                  { value: 'pro', label: 'Pro', price: '$999/mo' }
                ].map((plan) => (
                  <button
                    key={plan.value}
                    type="button"
                    onClick={() => setSelectedPlan(plan.value)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedPlan === plan.value
                        ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]'
                        : 'bg-[#0D1114] border-[#293038] hover:border-[#8B5CF6]/50'
                    }`}
                  >
                    <div className={`font-semibold ${selectedPlan === plan.value ? 'text-[#8B5CF6]' : 'text-[#E8F1FF]'}`}>
                      {plan.label}
                    </div>
                    <div className="text-[#94A3B8] text-sm">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Have you purchased Fieldd? */}
            <div>
              <label className={labelClasses}>Have you purchased Fieldd yet? *</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setHasPurchased('yes')}
                  className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    hasPurchased === 'yes'
                      ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                      : 'bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#8B5CF6]/50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setHasPurchased('no')}
                  className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    hasPurchased === 'no'
                      ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]'
                      : 'bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#8B5CF6]/50'
                  }`}
                >
                  No
                </button>
              </div>

              {hasPurchased === 'no' && (
                <div className="mt-4 p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#EF4444] text-sm font-medium">Please purchase Fieldd before continuing.</p>
                    <a
                      href="https://fieldd.co/pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-[#8B5CF6] hover:text-[#A78BFA] text-sm"
                    >
                      Go to Fieldd to Purchase <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Fields only shown if purchased */}
            {canProceed && (
              <>
                {/* Purchase Confirmation Link */}
                <div>
                  <label className={labelClasses}>Purchase Confirmation Link <span className="text-[#64748B]">(Optional)</span></label>
                  <input type="url" placeholder="https://..." className={inputClasses} />
                </div>

                {/* Fieldd Account Email */}
                <div>
                  <label className={labelClasses}>Fieldd Account Email *</label>
                  <input type="email" placeholder="your-email@business.com" className={inputClasses} />
                </div>

                {/* Fieldd Account Password */}
                <div>
                  <label className={labelClasses}>Fieldd Account Password *</label>
                  <input type="password" placeholder="Enter your password" className={inputClasses} />
                  <p className="text-[#64748B] text-xs mt-2">We will securely set up your entire Fieldd system for you.</p>
                </div>

                {/* Confirm Credentials Work */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={credentialsConfirmed}
                        onChange={(e) => setCredentialsConfirmed(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                        credentialsConfirmed
                          ? 'bg-[#8B5CF6] border-[#8B5CF6]'
                          : 'border-[#293038] group-hover:border-[#8B5CF6]/50'
                      }`}>
                        {credentialsConfirmed && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[#E8F1FF] text-sm">I confirm these login credentials work *</span>
                  </label>
                </div>

                {/* Booking Preference */}
                <div>
                  <label className={labelClasses}>Booking Preference *</label>
                  <select className={selectClasses}>
                    <option value="">Select...</option>
                    <option value="widget">Booking Widget</option>
                    <option value="direct-link">Direct Link</option>
                    <option value="phone">Phone Only</option>
                  </select>
                </div>

                {/* Deposit Preference */}
                <div>
                  <label className={labelClasses}>Deposit Preference <span className="text-[#64748B]">(Optional)</span></label>
                  <select className={selectClasses}>
                    <option value="">Select...</option>
                    <option value="none">None</option>
                    <option value="fixed">Fixed Amount</option>
                    <option value="percentage">Percentage</option>
                  </select>
                </div>

                {/* Calendar Sync */}
                <div>
                  <label className={labelClasses}>Calendar Sync <span className="text-[#64748B]">(Optional)</span></label>
                  <select className={selectClasses}>
                    <option value="">Select...</option>
                    <option value="google">Google Calendar</option>
                    <option value="apple">Apple Calendar</option>
                    <option value="outlook">Outlook</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </>
            )}

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                disabled={!canProceed}
                className={`w-full px-8 py-4 rounded-xl font-medium transition-all ${
                  canProceed
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-[#8B5CF6]/30'
                    : 'bg-[#293038] text-[#64748B] cursor-not-allowed'
                }`}
              >
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
