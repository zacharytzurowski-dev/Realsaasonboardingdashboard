import { Users, ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface TargetAudienceFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function TargetAudienceForm({ onBack, onSave }: TargetAudienceFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();

  const [formData, setFormData] = useState({
    target_demographics: onboardingProgress?.form_data?.step_3?.target_demographics || '',
    target_location: onboardingProgress?.form_data?.step_3?.target_location || '',
    target_interests: onboardingProgress?.form_data?.step_3?.target_interests || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await saveStepFormData(3, formData);
      await updateOnboardingStep(3, 'completed');
      onSave();
    } catch (error) {
      console.error('❌ Error saving target audience:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #10B981 1px, transparent 1px), linear-gradient(0deg, #10B981 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#10B981]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#10B981] hover:text-[#34D399] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg shadow-[#10B981]/50">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Target Audience
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent opacity-70 mt-1">
                Define your ideal customer and market
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-[#059669]/5"></div>
          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {['Audience targeting', 'Location-based ads', 'Customer personas'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Demographic filters', 'Interest targeting', 'Market segmentation'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-transparent to-[#059669]/5"></div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Target Demographics *
              </label>
              <textarea
                value={formData.target_demographics}
                onChange={(e) => setFormData({ ...formData, target_demographics: e.target.value })}
                placeholder="E.g., Age 25-45, homeowners, middle to upper income..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Target Location *
              </label>
              <input
                type="text"
                value={formData.target_location}
                onChange={(e) => setFormData({ ...formData, target_location: e.target.value })}
                placeholder="E.g., San Francisco Bay Area, California"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Target Interests *
              </label>
              <textarea
                value={formData.target_interests}
                onChange={(e) => setFormData({ ...formData, target_interests: e.target.value })}
                placeholder="E.g., Home improvement, sustainability, modern design..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981]/20 transition-all resize-none"
              />
            </div>

            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#059669] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#10B981]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
