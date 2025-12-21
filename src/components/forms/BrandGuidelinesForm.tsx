import { Palette, ChevronLeft, Check, Upload } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface BrandGuidelinesFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function BrandGuidelinesForm({ onBack, onSave }: BrandGuidelinesFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();

  const [formData, setFormData] = useState({
    logo_url: onboardingProgress?.form_data?.step_2?.logo_url || '',
    primary_color: onboardingProgress?.form_data?.step_2?.primary_color || '#3AB8FF',
    secondary_color: onboardingProgress?.form_data?.step_2?.secondary_color || '#10B981',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await saveStepFormData(2, formData);
      await updateOnboardingStep(2, 'completed');
      onSave();
    } catch (error) {
      console.error('❌ Error saving brand guidelines:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #8B5CF6 1px, transparent 1px), linear-gradient(0deg, #8B5CF6 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#A78BFA] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Brand Guidelines
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#A78BFA] to-[#EC4899] bg-clip-text text-transparent opacity-70 mt-1">
                Upload your logo and define your brand colors
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#EC4899]/5"></div>
          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {['Brand assets library', 'Color scheme templates', 'Logo variations'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#8B5CF6]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Marketing materials', 'Brand consistency', 'Visual identity'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#8B5CF6]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#EC4899]/5"></div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Logo Upload
              </label>
              <div className="border-2 border-dashed border-[#293038] rounded-xl p-8 text-center hover:border-[#8B5CF6]/50 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-[#64748B] mx-auto mb-3" />
                <p className="text-[#94A3B8] text-sm">Click to upload or drag and drop</p>
                <p className="text-[#64748B] text-xs mt-1">PNG, JPG, SVG up to 5MB (placeholder - upload not implemented yet)</p>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Primary Color *
              </label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={formData.primary_color}
                  onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
                  className="w-20 h-12 bg-[#0D1114] border border-[#293038] rounded-xl cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.primary_color}
                  onChange={(e) => setFormData({ ...formData, primary_color: e.target.value })}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Secondary Color *
              </label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={formData.secondary_color}
                  onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
                  className="w-20 h-12 bg-[#0D1114] border border-[#293038] rounded-xl cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.secondary_color}
                  onChange={(e) => setFormData({ ...formData, secondary_color: e.target.value })}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#EC4899] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
