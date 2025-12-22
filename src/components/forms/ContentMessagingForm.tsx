import { FileText, ChevronLeft, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface ContentMessagingFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ContentMessagingForm({ onBack, onSave }: ContentMessagingFormProps) {
  const [hasProfessionalPhotos, setHasProfessionalPhotos] = useState<string>('');

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all";

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #F59E0B 1px, transparent 1px), linear-gradient(0deg, #F59E0B 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#F59E0B]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#F59E0B] hover:text-[#FBBF24] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F59E0B]/50">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Content & Messaging
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 4 of 7</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-transparent to-[#EC4899]/5"></div>

          <form className="relative space-y-6">
            {/* Tone & Voice */}
            <div>
              <label className={labelClasses}>Tone & Voice *</label>
              <select className={selectClasses}>
                <option value="">Select tone...</option>
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="luxury">Luxury</option>
                <option value="bold">Aggressive/Bold</option>
              </select>
            </div>

            {/* Unique Selling Points */}
            <div>
              <label className={labelClasses}>Unique Selling Points *</label>
              <textarea
                placeholder="What makes your business stand out? What do customers love about you?"
                rows={3}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Services Offered */}
            <div>
              <label className={labelClasses}>Services Offered (Detailed List) *</label>
              <textarea
                placeholder="List all services you offer with brief descriptions..."
                rows={4}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Pricing Structure */}
            <div>
              <label className={labelClasses}>Pricing Structure Description *</label>
              <textarea
                placeholder="Describe your pricing approach (e.g., flat rate, per vehicle size, packages...)"
                rows={3}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Competitor Websites */}
            <div>
              <label className={labelClasses}>Competitor Websites to Differentiate From <span className="text-[#64748B]">(Optional)</span></label>
              <textarea
                placeholder="List competitor websites so we can differentiate your brand..."
                rows={2}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Example Websites You Like */}
            <div>
              <label className={labelClasses}>Example Websites You Like <span className="text-[#64748B]">(Optional)</span></label>
              <textarea
                placeholder="Link to websites with designs or messaging styles you admire..."
                rows={2}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Professional Photos */}
            <div>
              <label className={labelClasses}>Do you have professional photos? *</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setHasProfessionalPhotos('yes')}
                  className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    hasProfessionalPhotos === 'yes'
                      ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                      : 'bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setHasProfessionalPhotos('no')}
                  className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    hasProfessionalPhotos === 'no'
                      ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]'
                      : 'bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50'
                  }`}
                >
                  No
                </button>
              </div>
              {hasProfessionalPhotos === 'no' && (
                <div className="mt-3 p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <p className="text-[#F59E0B] text-sm">
                    No worries! We'll send you a photo guide with tips on how to take great photos of your work.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <label className={labelClasses}>Additional Notes <span className="text-[#64748B]">(Optional)</span></label>
              <textarea
                placeholder="Anything else we should know about your content or messaging preferences?"
                rows={3}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all font-medium"
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
