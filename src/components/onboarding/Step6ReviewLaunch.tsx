import { CheckCircle2 } from 'lucide-react';

interface Step6ReviewLaunchProps {
  formData: Record<string, any>;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
}

export function Step6ReviewLaunch({ formData, onConfirm, onCancel }: Step6ReviewLaunchProps) {
  const step1Data = formData.step_1 || {};
  const step2Data = formData.step_2 || {};
  const step3Data = formData.step_3 || {};
  const step4Data = formData.step_4 || {};
  const step5Data = formData.step_5 || {};

  return (
    <div className="space-y-6">
      <div className="bg-[#0D1117] border border-[#293038] rounded-lg p-4">
        <h3 className="text-[#3AB8FF] font-medium mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Business Information
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-[#94A3B8]">Business Name: <span className="text-[#E8F1FF]">{step1Data.business_name || 'Not provided'}</span></p>
          <p className="text-[#94A3B8]">Address: <span className="text-[#E8F1FF]">{step1Data.address || 'Not provided'}</span></p>
          <p className="text-[#94A3B8]">Phone: <span className="text-[#E8F1FF]">{step1Data.phone || 'Not provided'}</span></p>
        </div>
      </div>

      <div className="bg-[#0D1117] border border-[#293038] rounded-lg p-4">
        <h3 className="text-[#8B5CF6] font-medium mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Brand Guidelines
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-[#94A3B8]">Primary Color: <span className="text-[#E8F1FF]">{step2Data.primary_color || 'Not provided'}</span></p>
          <p className="text-[#94A3B8]">Secondary Color: <span className="text-[#E8F1FF]">{step2Data.secondary_color || 'Not provided'}</span></p>
        </div>
      </div>

      <div className="bg-[#0D1117] border border-[#293038] rounded-lg p-4">
        <h3 className="text-[#10B981] font-medium mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Target Audience
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-[#94A3B8]">Demographics: <span className="text-[#E8F1FF]">{step3Data.target_demographics || 'Not provided'}</span></p>
          <p className="text-[#94A3B8]">Location: <span className="text-[#E8F1FF]">{step3Data.target_location || 'Not provided'}</span></p>
        </div>
      </div>

      <div className="bg-[#0D1117] border border-[#293038] rounded-lg p-4">
        <h3 className="text-[#F59E0B] font-medium mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Content Preferences
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-[#94A3B8]">Brand Tone: <span className="text-[#E8F1FF]">{step4Data.brand_tone || 'Not provided'}</span></p>
          <p className="text-[#94A3B8]">Content Topics: <span className="text-[#E8F1FF]">{step4Data.content_topics || 'Not provided'}</span></p>
        </div>
      </div>

      <div className="bg-[#0D1117] border border-[#293038] rounded-lg p-4">
        <h3 className="text-[#00CFFF] font-medium mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Integrations
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-[#94A3B8]">
            Selected: <span className="text-[#E8F1FF]">
              {[
                step5Data.google_ads && 'Google Ads',
                step5Data.facebook_ads && 'Facebook Ads',
                step5Data.google_analytics && 'Google Analytics',
                step5Data.linkedin_ads && 'LinkedIn Ads'
              ].filter(Boolean).join(', ') || 'None selected'}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/30 rounded-lg p-4">
        <p className="text-[#E8F1FF] text-sm">
          By confirming, you agree that the information provided is accurate and you're ready to launch your marketing package.
        </p>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-[#293038] text-[#E8F1FF] rounded-lg hover:bg-[#3a4148] transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg hover:shadow-lg hover:shadow-[#10B981]/40 transition-all font-medium"
        >
          Confirm & Launch
        </button>
      </div>
    </div>
  );
}
