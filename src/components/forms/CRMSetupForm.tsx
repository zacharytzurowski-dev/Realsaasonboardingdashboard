import { Database, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface CRMSetupFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function CRMSetupForm({ onBack, onSave }: CRMSetupFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();
  const [saving, setSaving] = useState(false);

  const formData = onboardingProgress?.form_data || {};

  const handleConfirm = async () => {
    setSaving(true);

    try {
      await saveStepFormData(6, { confirmed: true });
      await updateOnboardingStep(6, 'completed');
      onSave();
    } catch (error) {
      console.error('❌ Error confirming onboarding:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #7C3AED 1px, transparent 1px), linear-gradient(0deg, #7C3AED 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#7C3AED] hover:text-[#8B5CF6] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7C3AED]/50">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Review & Launch
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent opacity-70 mt-1">
                Review your information and launch your marketing package
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0D1114] border border-[#293038] rounded-xl p-4">
            <h3 className="text-[#3AB8FF] font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Business Information
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#94A3B8]">Business Name: <span className="text-[#E8F1FF]">{formData.step_1?.business_name || 'Not provided'}</span></p>
              <p className="text-[#94A3B8]">Address: <span className="text-[#E8F1FF]">{formData.step_1?.address || 'Not provided'}</span></p>
              <p className="text-[#94A3B8]">Phone: <span className="text-[#E8F1FF]">{formData.step_1?.phone || 'Not provided'}</span></p>
            </div>
          </div>

          <div className="bg-[#0D1114] border border-[#293038] rounded-xl p-4">
            <h3 className="text-[#8B5CF6] font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Brand Guidelines
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#94A3B8]">Primary Color: <span className="text-[#E8F1FF]">{formData.step_2?.primary_color || 'Not provided'}</span></p>
              <p className="text-[#94A3B8]">Secondary Color: <span className="text-[#E8F1FF]">{formData.step_2?.secondary_color || 'Not provided'}</span></p>
            </div>
          </div>

          <div className="bg-[#0D1114] border border-[#293038] rounded-xl p-4">
            <h3 className="text-[#10B981] font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Target Audience
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#94A3B8]">Demographics: <span className="text-[#E8F1FF]">{formData.step_3?.target_demographics || 'Not provided'}</span></p>
              <p className="text-[#94A3B8]">Location: <span className="text-[#E8F1FF]">{formData.step_3?.target_location || 'Not provided'}</span></p>
            </div>
          </div>

          <div className="bg-[#0D1114] border border-[#293038] rounded-xl p-4">
            <h3 className="text-[#F59E0B] font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Content Preferences
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#94A3B8]">Brand Tone: <span className="text-[#E8F1FF]">{formData.step_4?.brand_tone || 'Not provided'}</span></p>
              <p className="text-[#94A3B8]">Content Topics: <span className="text-[#E8F1FF]">{formData.step_4?.content_topics || 'Not provided'}</span></p>
            </div>
          </div>

          <div className="bg-[#0D1114] border border-[#293038] rounded-xl p-4">
            <h3 className="text-[#00CFFF] font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Integrations
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-[#94A3B8]">
                Selected: <span className="text-[#E8F1FF]">
                  {[
                    formData.step_5?.google_ads && 'Google Ads',
                    formData.step_5?.facebook_ads && 'Facebook Ads',
                    formData.step_5?.google_analytics && 'Google Analytics',
                    formData.step_5?.linkedin_ads && 'LinkedIn Ads'
                  ].filter(Boolean).join(', ') || 'None selected'}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/30 rounded-xl p-4">
            <p className="text-[#E8F1FF] text-sm">
              By confirming, you agree that the information provided is accurate and you're ready to launch your marketing package.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleConfirm}
              disabled={saving}
              className="flex-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#059669] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#10B981]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Confirming...' : 'Confirm & Launch'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
