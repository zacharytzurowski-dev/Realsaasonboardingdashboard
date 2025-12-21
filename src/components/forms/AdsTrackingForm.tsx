import { Megaphone, ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface AdsTrackingFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function AdsTrackingForm({ onBack, onSave }: AdsTrackingFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();

  const [formData, setFormData] = useState({
    google_ads: onboardingProgress?.form_data?.step_5?.google_ads || false,
    facebook_ads: onboardingProgress?.form_data?.step_5?.facebook_ads || false,
    google_analytics: onboardingProgress?.form_data?.step_5?.google_analytics || false,
    linkedin_ads: onboardingProgress?.form_data?.step_5?.linkedin_ads || false,
    other_integrations: onboardingProgress?.form_data?.step_5?.other_integrations || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await saveStepFormData(5, formData);
      await updateOnboardingStep(5, 'completed');
      onSave();
    } catch (error) {
      console.error('❌ Error saving integrations:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #00CFFF 1px, transparent 1px), linear-gradient(0deg, #00CFFF 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#00CFFF]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#00CFFF] hover:text-[#3AB8FF] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00CFFF] to-[#3AB8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00CFFF]/50">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Ads & Tracking Setup
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#3AB8FF] bg-clip-text text-transparent opacity-70 mt-1">
                Configure your advertising and analytics integrations
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/5 via-transparent to-[#3AB8FF]/5"></div>
          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {['Campaign tracking', 'Conversion pixels', 'Analytics dashboards'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#00CFFF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#00CFFF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['ROI tracking', 'Performance reports', 'Ad optimization'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#00CFFF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#00CFFF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/5 via-transparent to-[#3AB8FF]/5"></div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Select Integrations (Placeholder)
              </label>
              <div className="space-y-3">
                {[
                  { key: 'google_ads', label: 'Google Ads' },
                  { key: 'facebook_ads', label: 'Facebook Ads' },
                  { key: 'google_analytics', label: 'Google Analytics' },
                  { key: 'linkedin_ads', label: 'LinkedIn Ads' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 p-3 bg-[#0D1114] border border-[#293038] rounded-xl cursor-pointer hover:border-[#00CFFF]/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData[key as keyof typeof formData] as boolean}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })}
                      className="w-4 h-4 text-[#00CFFF] bg-[#0D1114] border-[#293038] rounded focus:ring-[#00CFFF]"
                    />
                    <span className="text-[#E8F1FF]">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Other Integrations
              </label>
              <textarea
                value={formData.other_integrations}
                onChange={(e) => setFormData({ ...formData, other_integrations: e.target.value })}
                placeholder="List any other tools or platforms you'd like to integrate..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#00CFFF] focus:outline-none focus:ring-2 focus:ring-[#00CFFF]/20 transition-all resize-none"
              />
            </div>

            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-[#00CFFF] via-[#3AB8FF] to-[#5DAEFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00CFFF]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save & Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
