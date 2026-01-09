import { FileText, ChevronLeft, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step4FormData } from '../../contexts/ProfileContext';

interface ContentMessagingFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ContentMessagingForm({ onBack, onSave }: ContentMessagingFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);
  const [toneVoice, setToneVoice] = useState('');
  const [usps, setUsps] = useState('');
  const [servicesOffered, setServicesOffered] = useState('');
  const [pricingStructure, setPricingStructure] = useState('');
  const [competitorWebsites, setCompetitorWebsites] = useState('');
  const [exampleWebsites, setExampleWebsites] = useState('');
  const [hasProfessionalPhotos, setHasProfessionalPhotos] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  useEffect(() => {
    const existingData = getStepData<Step4FormData>(4);
    if (existingData) {
      setToneVoice(existingData.toneVoice || '');
      setUsps(existingData.usps || '');
      setServicesOffered(existingData.servicesOffered || '');
      setPricingStructure(existingData.pricingStructure || '');
      setCompetitorWebsites(existingData.competitorWebsites || '');
      setExampleWebsites(existingData.exampleWebsites || '');
      setHasProfessionalPhotos(existingData.hasProfessionalPhotos || '');
      setAdditionalNotes(existingData.additionalNotes || '');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);
    const formData: Step4FormData = { toneVoice, usps, servicesOffered, pricingStructure, competitorWebsites, exampleWebsites, hasProfessionalPhotos, additionalNotes };
    const success = await saveStepData(4, formData);
    setSaving(false);
    if (success) onSave();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#7a8494] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8 1px, transparent 1px), linear-gradient(0deg, #38bdf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div></div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#38bdf8] hover:text-[#7dd3fc] mb-6 transition-colors"><ChevronLeft className="w-5 h-5" />Back to Checklist</button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #e0f2fe 0%, #bae6fd 15%, #7dd3fc 35%, #38bdf8 50%, #0ea5e9 65%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.5), inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(3, 105, 161, 0.4)' }}>
              <FileText className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div><h1 className="text-3xl font-bold text-[#E8F1FF]">Content & Messaging</h1><p className="text-sm text-[#7a8494] mt-1">Step 4 of 6</p></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)' }}></div>

          <form className="relative space-y-6">
            <div><label className={labelClasses}>Tone & Voice *</label><select className={selectClasses} value={toneVoice} onChange={(e) => setToneVoice(e.target.value)}><option value="">Select tone...</option><option value="professional">Professional</option><option value="friendly">Friendly</option><option value="luxury">Luxury</option><option value="bold">Aggressive/Bold</option></select></div>

            <div><label className={labelClasses}>Unique Selling Points *</label><textarea placeholder="What makes your business stand out? What do customers love about you?" rows={3} className={inputClasses + " resize-none"} value={usps} onChange={(e) => setUsps(e.target.value)} /></div>

            <div><label className={labelClasses}>Services Offered (Detailed List) *</label><textarea placeholder="List all services you offer with brief descriptions..." rows={4} className={inputClasses + " resize-none"} value={servicesOffered} onChange={(e) => setServicesOffered(e.target.value)} /></div>

            <div><label className={labelClasses}>Pricing Structure Description *</label><textarea placeholder="Describe your pricing approach (e.g., flat rate, per vehicle size, packages...)" rows={3} className={inputClasses + " resize-none"} value={pricingStructure} onChange={(e) => setPricingStructure(e.target.value)} /></div>

            <div><label className={labelClasses}>Competitor Websites to Differentiate From <span className="text-[#64748B]">(Optional)</span></label><textarea placeholder="List competitor websites so we can differentiate your brand..." rows={2} className={inputClasses + " resize-none"} value={competitorWebsites} onChange={(e) => setCompetitorWebsites(e.target.value)} /></div>

            <div><label className={labelClasses}>Example Websites You Like <span className="text-[#64748B]">(Optional)</span></label><textarea placeholder="Link to websites with designs or messaging styles you admire..." rows={2} className={inputClasses + " resize-none"} value={exampleWebsites} onChange={(e) => setExampleWebsites(e.target.value)} /></div>

            <div>
              <label className={labelClasses}>Do you have professional photos? *</label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setHasProfessionalPhotos('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasProfessionalPhotos === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494] hover:border-[#38bdf8]/50'}`}>Yes</button>
                <button type="button" onClick={() => setHasProfessionalPhotos('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasProfessionalPhotos === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494] hover:border-[#38bdf8]/50'}`}>No</button>
              </div>
              {hasProfessionalPhotos === 'no' && (
                <div className="mt-3 p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <p className="text-[#F59E0B] text-sm">No worries! We'll send you a photo guide with tips on how to take great photos of your work.</p>
                </div>
              )}
            </div>

            <div><label className={labelClasses}>Additional Notes <span className="text-[#64748B]">(Optional)</span></label><textarea placeholder="Anything else we should know about your content or messaging preferences?" rows={3} className={inputClasses + " resize-none"} value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} /></div>

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
