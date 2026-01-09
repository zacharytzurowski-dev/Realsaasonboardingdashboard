import { Palette, ChevronLeft, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step2FormData } from '../../contexts/ProfileContext';

interface BrandIdentityFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function BrandIdentityForm({ onBack, onSave }: BrandIdentityFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);
  const [logoLink, setLogoLink] = useState('');
  const [workPhotosLink, setWorkPhotosLink] = useState('');
  const [teamPhotosLink, setTeamPhotosLink] = useState('');
  const [businessTagline, setBusinessTagline] = useState('');
  const [usps, setUsps] = useState('');
  const [brandPersonality, setBrandPersonality] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#06B6D4');

  useEffect(() => {
    const existingData = getStepData<Step2FormData>(2);
    if (existingData) {
      setLogoLink(existingData.logoLink || '');
      setWorkPhotosLink(existingData.workPhotosLink || '');
      setTeamPhotosLink(existingData.teamPhotosLink || '');
      setBusinessTagline(existingData.businessTagline || '');
      setUsps(existingData.usps || '');
      setBrandPersonality(existingData.brandPersonality || '');
      setPrimaryColor(existingData.primaryColor || '#3B82F6');
      setSecondaryColor(existingData.secondaryColor || '#06B6D4');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);
    const formData: Step2FormData = { logoLink, workPhotosLink, teamPhotosLink, businessTagline, usps, brandPersonality, primaryColor, secondaryColor };
    const success = await saveStepData(2, formData);
    setSaving(false);
    if (success) onSave();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#7a8494] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";

  const getLighterShade = (hex: string) => { const r = parseInt(hex.slice(1, 3), 16); const g = parseInt(hex.slice(3, 5), 16); const b = parseInt(hex.slice(5, 7), 16); const darker = (val: number) => Math.max(0, val - 30); return `#${darker(r).toString(16).padStart(2, '0')}${darker(g).toString(16).padStart(2, '0')}${darker(b).toString(16).padStart(2, '0')}`; };
  const getRgba = (hex: string, alpha: number) => { const r = parseInt(hex.slice(1, 3), 16); const g = parseInt(hex.slice(3, 5), 16); const b = parseInt(hex.slice(5, 7), 16); return `rgba(${r}, ${g}, ${b}, ${alpha})`; };

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8 1px, transparent 1px), linear-gradient(0deg, #38bdf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div></div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#38bdf8] hover:text-[#7dd3fc] mb-6 transition-colors"><ChevronLeft className="w-5 h-5" />Back to Checklist</button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #e0f2fe 0%, #bae6fd 15%, #7dd3fc 35%, #38bdf8 50%, #0ea5e9 65%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.5), inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(3, 105, 161, 0.4)' }}>
              <Palette className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div><h1 className="text-3xl font-bold text-[#E8F1FF]">Brand & Identity</h1><p className="text-sm text-[#7a8494] mt-1">Step 2 of 6</p></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)' }}></div>

          <form className="relative space-y-6">
            <div><label className={labelClasses}>Logo Link *</label><p className="text-[#64748B] text-xs mb-2">Paste a Google Drive or Dropbox link to your logo file</p><input type="url" placeholder="https://drive.google.com/..." className={inputClasses} value={logoLink} onChange={(e) => setLogoLink(e.target.value)} /></div>
            <div><label className={labelClasses}>Work Photos Link *</label><p className="text-[#64748B] text-xs mb-2">Link to a folder with photos of your work</p><input type="url" placeholder="https://drive.google.com/..." className={inputClasses} value={workPhotosLink} onChange={(e) => setWorkPhotosLink(e.target.value)} /></div>
            <div><label className={labelClasses}>Team Photos Link <span className="text-[#64748B]">(Optional)</span></label><input type="url" placeholder="https://drive.google.com/..." className={inputClasses} value={teamPhotosLink} onChange={(e) => setTeamPhotosLink(e.target.value)} /></div>
            <div><label className={labelClasses}>Business Tagline / Slogan <span className="text-[#64748B]">(Optional)</span></label><input type="text" placeholder="e.g., 'We bring the shine to you!'" className={inputClasses} value={businessTagline} onChange={(e) => setBusinessTagline(e.target.value)} /></div>
            <div><label className={labelClasses}>What Makes You Different / USPs *</label><textarea placeholder="What sets your business apart from competitors? List your unique selling points..." rows={4} className={inputClasses + " resize-none"} value={usps} onChange={(e) => setUsps(e.target.value)} /></div>
            <div><label className={labelClasses}>Brand Personality *</label><select className={selectClasses} value={brandPersonality} onChange={(e) => setBrandPersonality(e.target.value)}><option value="">Select personality...</option><option value="professional">Professional</option><option value="friendly">Friendly</option><option value="luxury">Luxury</option><option value="bold">Bold</option></select></div>

            <div>
              <label className={labelClasses}>Brand Colors</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-[#7a8494] text-xs mb-2">Primary Color</label><div className="flex items-center gap-3"><div className="relative group"><input type="color" className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value.toUpperCase())} /><div className="w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${getLighterShade(primaryColor)} 100%)`, boxShadow: `0 4px 12px ${getRgba(primaryColor, 0.4)}` }}><div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)' }}></div></div></div><input type="text" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="flex-1 px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] focus:border-[#38bdf8] focus:outline-none transition-all" /></div></div>
                <div><label className="block text-[#7a8494] text-xs mb-2">Secondary Color</label><div className="flex items-center gap-3"><div className="relative group"><input type="color" className="w-14 h-14 rounded-xl cursor-pointer opacity-0 absolute inset-0 z-10" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value.toUpperCase())} /><div className="w-14 h-14 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${secondaryColor} 0%, ${getLighterShade(secondaryColor)} 100%)`, boxShadow: `0 4px 12px ${getRgba(secondaryColor, 0.4)}` }}><div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)' }}></div></div></div><input type="text" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} className="flex-1 px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] focus:border-[#38bdf8] focus:outline-none transition-all" /></div></div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#252a33]">
              <button type="button" onClick={handleSubmit} disabled={saving} className="w-full text-white px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" style={{ background: 'linear-gradient(145deg, #bae6fd 0%, #7dd3fc 20%, #38bdf8 40%, #0ea5e9 60%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(3, 105, 161, 0.3)' }}>
                {saving ? (<><Loader2 className="w-5 h-5 animate-spin" />Saving...</>) : 'Save & Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
