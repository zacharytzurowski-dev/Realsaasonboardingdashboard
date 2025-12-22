import { Megaphone, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface AdsTrackingFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function AdsTrackingForm({ onBack, onSave }: AdsTrackingFormProps) {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [backgroundCheckConsent, setBackgroundCheckConsent] = useState(false);
  const [conversionTrackingConsent, setConversionTrackingConsent] = useState(false);

  const togglePlatform = (platform: string) => {
    setPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  };

  const hasLSA = platforms.includes('Local Services Ads');

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#00CFFF] focus:outline-none focus:ring-2 focus:ring-[#00CFFF]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#00CFFF] focus:outline-none focus:ring-2 focus:ring-[#00CFFF]/20 transition-all";

  const platformOptions = ['Google Ads', 'Local Services Ads', 'Nextdoor'];

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #00CFFF 1px, transparent 1px), linear-gradient(0deg, #00CFFF 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#00CFFF]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#00CFFF] hover:text-[#3AB8FF] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#3AB8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00CFFF]/50">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Ads & Tracking Setup
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 6 of 7</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/5 via-transparent to-[#3AB8FF]/5"></div>

          <form className="relative space-y-6">
            {/* Monthly Ad Budget */}
            <div>
              <label className={labelClasses}>Monthly Ad Budget *</label>
              <select className={selectClasses}>
                <option value="">Select budget range...</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3500">$2,000 - $3,500</option>
                <option value="3500-5000">$3,500 - $5,000</option>
                <option value="5000+">$5,000+</option>
              </select>
            </div>

            {/* Platforms to Set Up */}
            <div>
              <label className={labelClasses}>Platforms to Set Up *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {platformOptions.map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => togglePlatform(platform)}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      platforms.includes(platform)
                        ? 'bg-[#00CFFF]/20 border-[#00CFFF] text-[#00CFFF]'
                        : 'bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#00CFFF]/50'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* LSA Required Fields */}
            {hasLSA && (
              <>
                <div>
                  <label className={labelClasses}>Insurance Certificate Link *</label>
                  <p className="text-[#64748B] text-xs mb-2">Paste a Google Drive or Dropbox link to your insurance certificate</p>
                  <input type="url" placeholder="https://drive.google.com/..." className={inputClasses} />
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={backgroundCheckConsent}
                        onChange={(e) => setBackgroundCheckConsent(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                        backgroundCheckConsent
                          ? 'bg-[#00CFFF] border-[#00CFFF]'
                          : 'border-[#293038] group-hover:border-[#00CFFF]/50'
                      }`}>
                        {backgroundCheckConsent && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[#E8F1FF] text-sm">I consent to a background check for Local Services Ads *</span>
                  </label>
                </div>
              </>
            )}

            {/* Conversion Tracking Consent */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={conversionTrackingConsent}
                    onChange={(e) => setConversionTrackingConsent(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                    conversionTrackingConsent
                      ? 'bg-[#00CFFF] border-[#00CFFF]'
                      : 'border-[#293038] group-hover:border-[#00CFFF]/50'
                  }`}>
                    {conversionTrackingConsent && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[#E8F1FF] text-sm">I consent to conversion tracking on my website</span>
              </label>
            </div>

            {/* When to Start Ads */}
            <div>
              <label className={labelClasses}>When to Start Ads *</label>
              <select className={selectClasses}>
                <option value="">Select...</option>
                <option value="immediately">Immediately after setup</option>
                <option value="after-review">After review call</option>
              </select>
            </div>

            {/* Campaign Notes */}
            <div>
              <label className={labelClasses}>Campaign Notes <span className="text-[#64748B]">(Optional)</span></label>
              <textarea
                placeholder="Any specific requests or notes for your ad campaigns..."
                rows={3}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="w-full bg-gradient-to-r from-[#00CFFF] to-[#3AB8FF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00CFFF]/30 transition-all font-medium"
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
