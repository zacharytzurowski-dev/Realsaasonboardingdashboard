import { FileText, ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface ContentPreferencesFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ContentPreferencesForm({ onBack, onSave }: ContentPreferencesFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();

  const [formData, setFormData] = useState({
    brand_tone: onboardingProgress?.form_data?.step_4?.brand_tone || '',
    content_topics: onboardingProgress?.form_data?.step_4?.content_topics || '',
    example_links: onboardingProgress?.form_data?.step_4?.example_links || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await saveStepFormData(4, formData);
      await updateOnboardingStep(4, 'completed');
      onSave();
    } catch (error) {
      console.error('❌ Error saving content preferences:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #F59E0B 1px, transparent 1px), linear-gradient(0deg, #F59E0B 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#F59E0B]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#F59E0B] hover:text-[#FBBF24] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F59E0B]/50">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Content Preferences
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent opacity-70 mt-1">
                Set your messaging style and content tone
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-transparent to-[#EC4899]/5"></div>
          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {['Content calendar', 'Messaging templates', 'Brand voice guide'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#F59E0B]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Social media posts', 'Email templates', 'Content strategy'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#F59E0B]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-transparent to-[#EC4899]/5"></div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Brand Tone *
              </label>
              <select
                value={formData.brand_tone}
                onChange={(e) => setFormData({ ...formData, brand_tone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
              >
                <option value="">Select a tone...</option>
                <option value="professional">Professional</option>
                <option value="friendly">Friendly & Casual</option>
                <option value="authoritative">Authoritative</option>
                <option value="playful">Playful & Fun</option>
                <option value="inspirational">Inspirational</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Content Topics *
              </label>
              <textarea
                value={formData.content_topics}
                onChange={(e) => setFormData({ ...formData, content_topics: e.target.value })}
                placeholder="E.g., Industry trends, how-to guides, customer success stories, product updates..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Example Links
              </label>
              <textarea
                value={formData.example_links}
                onChange={(e) => setFormData({ ...formData, example_links: e.target.value })}
                placeholder="Share URLs of content you admire (one per line)"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all resize-none"
              />
            </div>

            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EC4899] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
