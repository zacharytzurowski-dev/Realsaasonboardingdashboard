import { Building2, ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';
import { useProfile } from '../../contexts/ProfileContext';

interface BusinessInformationFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function BusinessInformationForm({ onBack, onSave }: BusinessInformationFormProps) {
  const { onboardingProgress, saveStepFormData, updateOnboardingStep } = useProfile();

  const [formData, setFormData] = useState({
    business_name: onboardingProgress?.form_data?.step_1?.business_name || '',
    address: onboardingProgress?.form_data?.step_1?.address || '',
    phone: onboardingProgress?.form_data?.step_1?.phone || '',
    services_offered: onboardingProgress?.form_data?.step_1?.services_offered || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Save form data
      await saveStepFormData(1, formData);

      // Mark step as completed
      await updateOnboardingStep(1, 'completed');

      // Navigate back to checklist
      onSave();
    } catch (error) {
      console.error('❌ Error saving business information:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3AB8FF 1px, transparent 1px),
            linear-gradient(0deg, #3AB8FF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#3AB8FF]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#3AB8FF] hover:text-[#5DAEFF] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] via-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Business Information
              </h1>
              <p className="text-sm font-medium bg-gradient-to-r from-[#5DAEFF] to-[#8B5CF6] bg-clip-text text-transparent opacity-70 mt-1">
                Tell us about your business so we can personalize your experience
              </p>
            </div>
          </div>
        </div>

        {/* What We'll Set Up For You Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-6 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <div className="relative">
            <h3 className="text-[#E8F1FF] font-semibold mb-4">What We'll Set Up For You</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                {[
                  'Business profile setup',
                  'Contact information',
                  'Service listings'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#3AB8FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#3AB8FF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  'Location targeting',
                  'Business hours',
                  'Customer communications'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#3AB8FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#3AB8FF]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Business Name */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Business Name *
              </label>
              <input
                type="text"
                value={formData.business_name}
                onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                placeholder="Your Business Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Business Address */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Business Address *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="123 Main Street, City, State 12345"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all"
              />
            </div>

            {/* Services Offered */}
            <div>
              <label className="flex items-center gap-2 text-[#94A3B8] text-sm mb-3">
                Services Offered *
              </label>
              <textarea
                value={formData.services_offered}
                onChange={(e) => setFormData({ ...formData, services_offered: e.target.value })}
                placeholder="Describe your main services..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all resize-none"
              />
            </div>

            {/* Save Button */}
            <div className="flex gap-4 pt-6 border-t border-[#293038]">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
