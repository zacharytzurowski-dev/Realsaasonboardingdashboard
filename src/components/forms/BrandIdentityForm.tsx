import { Palette, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface BrandIdentityFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function BrandIdentityForm({ onBack, onSave }: BrandIdentityFormProps) {
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all";

  const getLighterShade = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const darker = (val: number) => Math.max(0, val - 30);
    return `#${darker(r).toString(16).padStart(2, '0')}${darker(g).toString(16).padStart(2, '0')}${darker(b).toString(16).padStart(2, '0')}`;
  };

  const getRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

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
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Brand & Identity
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 2 of 7</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#EC4899]/5"></div>

          <form className="relative space-y-6">
            {/* Logo Link */}
            <div>
              <label className={labelClasses}>Logo Link *</label>
              <p className="text-[#64748B] text-xs mb-2">Paste a Google Drive or Dropbox link to your logo file</p>
              <input type="url" placeholder="https://drive.google.com/..." className={inputClasses} />
            </div>

            {/* Work Photos Link */}
            <div>
              <label className={labelClasses}>Work Photos Link *</label>
              <p className="text-[#64748B] text-xs mb-2">Link to a folder with photos of your work</p>
              <input type="url" placeholder="https://drive.google.com/..." className={inputClasses} />
            </div>

            {/* Team Photos Link */}
            <div>
              <label className={labelClasses}>Team Photos Link <span className="text-[#64748B]">(Optional)</span></label>
              <input type="url" placeholder="https://drive.google.com/..." className={inputClasses} />
            </div>

            {/* Business Tagline */}
            <div>
              <label className={labelClasses}>Business Tagline / Slogan <span className="text-[#64748B]">(Optional)</span></label>
              <input type="text" placeholder="e.g., 'We bring the shine to you!'" className={inputClasses} />
            </div>

            {/* What Makes You Different */}
            <div>
              <label className={labelClasses}>What Makes You Different / USPs *</label>
              <textarea
                placeholder="What sets your business apart from competitors? List your unique selling points..."
                rows={4}
                className={inputClasses + " resize-none"}
              />
            </div>

            {/* Brand Personality */}
            <div>
              <label className={labelClasses}>Brand Personality *</label>
              <select className={selectClasses}>
                <option value="">Select personality...</option>
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="luxury">Luxury</option>
                <option value="bold">Bold</option>
              </select>
            </div>

            {/* Brand Colors */}
            <div>
              <label className={labelClasses}>Brand Colors</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Primary Color */}
                <div>
                  <label className="block text-[#94A3B8] text-xs mb-2">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <div className="relative group">
                      <input
                        type="color"
                        className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value.toUpperCase())}
                      />
                      <div
                        className="w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor} 0%, ${getLighterShade(primaryColor)} 100%)`,
                          boxShadow: `0 4px 12px ${getRgba(primaryColor, 0.4)}`
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl" style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                        }}></div>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <label className="block text-[#94A3B8] text-xs mb-2">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    <div className="relative group">
                      <input
                        type="color"
                        className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value.toUpperCase())}
                      />
                      <div
                        className="w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${secondaryColor} 0%, ${getLighterShade(secondaryColor)} 100%)`,
                          boxShadow: `0 4px 12px ${getRgba(secondaryColor, 0.4)}`
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl" style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                        }}></div>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#8B5CF6] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all font-medium"
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
