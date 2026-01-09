import { Users, ChevronLeft, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step3FormData } from '../../contexts/ProfileContext';

interface TargetAudienceFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function TargetAudienceForm({ onBack, onSave }: TargetAudienceFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);
  const [customerType, setCustomerType] = useState('');
  const [ageRangeFrom, setAgeRangeFrom] = useState('');
  const [ageRangeTo, setAgeRangeTo] = useState('');
  const [householdIncome, setHouseholdIncome] = useState('');
  const [targetRadius, setTargetRadius] = useState('');
  const [highValueNeighborhoods, setHighValueNeighborhoods] = useState('');
  const [excludedZipCodes, setExcludedZipCodes] = useState('');
  const [minimumJobValue, setMinimumJobValue] = useState('');
  const [keyCustomerProblems, setKeyCustomerProblems] = useState('');
  const [idealCustomerDescription, setIdealCustomerDescription] = useState('');

  useEffect(() => {
    const existingData = getStepData<Step3FormData>(3);
    if (existingData) {
      setCustomerType(existingData.customerType || '');
      setAgeRangeFrom(existingData.ageRangeFrom || '');
      setAgeRangeTo(existingData.ageRangeTo || '');
      setHouseholdIncome(existingData.householdIncome || '');
      setTargetRadius(existingData.targetRadius || '');
      setHighValueNeighborhoods(existingData.highValueNeighborhoods || '');
      setExcludedZipCodes(existingData.excludedZipCodes || '');
      setMinimumJobValue(existingData.minimumJobValue || '');
      setKeyCustomerProblems(existingData.keyCustomerProblems || '');
      setIdealCustomerDescription(existingData.idealCustomerDescription || '');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);
    const formData: Step3FormData = { customerType, ageRangeFrom, ageRangeTo, householdIncome, targetRadius, highValueNeighborhoods, excludedZipCodes, minimumJobValue, keyCustomerProblems, idealCustomerDescription };
    const success = await saveStepData(3, formData);
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
              <Users className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div><h1 className="text-3xl font-bold text-[#E8F1FF]">Target Audience</h1><p className="text-sm text-[#7a8494] mt-1">Step 3 of 6</p></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)' }}></div>

          <form className="relative space-y-6">
            <div><label className={labelClasses}>Ideal Customer Type *</label><select className={selectClasses} value={customerType} onChange={(e) => setCustomerType(e.target.value)}><option value="">Select customer type...</option><option value="homeowners">Homeowners</option><option value="renters">Renters</option><option value="small-business">Small Business</option><option value="enterprise">Enterprise/Corporate</option><option value="property-managers">Property Managers</option><option value="other">Other</option></select></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className={labelClasses}>Age Range From</label><select className={selectClasses} value={ageRangeFrom} onChange={(e) => setAgeRangeFrom(e.target.value)}><option value="">Select...</option><option value="18">18</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65+</option></select></div>
              <div><label className={labelClasses}>Age Range To</label><select className={selectClasses} value={ageRangeTo} onChange={(e) => setAgeRangeTo(e.target.value)}><option value="">Select...</option><option value="25">25</option><option value="30">30</option><option value="35">35</option><option value="40">40</option><option value="45">45</option><option value="50">50</option><option value="55">55</option><option value="60">60</option><option value="65">65</option><option value="70">70+</option></select></div>
            </div>

            <div><label className={labelClasses}>Household Income <span className="text-[#64748B]">(Optional)</span></label><select className={selectClasses} value={householdIncome} onChange={(e) => setHouseholdIncome(e.target.value)}><option value="">Select income range...</option><option value="under50k">Under $50,000</option><option value="50k-75k">$50,000 - $75,000</option><option value="75k-100k">$75,000 - $100,000</option><option value="100k-150k">$100,000 - $150,000</option><option value="150k-250k">$150,000 - $250,000</option><option value="250k+">$250,000+</option></select></div>

            <div><label className={labelClasses}>Target Radius for Ads (Miles) *</label><input type="number" placeholder="25" min="1" className={inputClasses} value={targetRadius} onChange={(e) => setTargetRadius(e.target.value)} /></div>

            <div><label className={labelClasses}>High-Value Neighborhoods to Target <span className="text-[#64748B]">(Optional)</span></label><textarea placeholder="List neighborhoods or areas where your ideal customers live..." rows={3} className={inputClasses + " resize-none"} value={highValueNeighborhoods} onChange={(e) => setHighValueNeighborhoods(e.target.value)} /></div>

            <div><label className={labelClasses}>ZIP Codes to Exclude <span className="text-[#64748B]">(Optional)</span></label><input type="text" placeholder="e.g., 30301, 30302, 30303" className={inputClasses} value={excludedZipCodes} onChange={(e) => setExcludedZipCodes(e.target.value)} /></div>

            <div><label className={labelClasses}>Minimum Job Value <span className="text-[#64748B]">(Optional)</span></label><input type="text" placeholder="e.g., $100" className={inputClasses} value={minimumJobValue} onChange={(e) => setMinimumJobValue(e.target.value)} /></div>

            <div><label className={labelClasses}>Key Customer Problems You Solve *</label><textarea placeholder="What problems do your customers face that you solve? (e.g., dirty cars, lack of time, convenience...)" rows={3} className={inputClasses + " resize-none"} value={keyCustomerProblems} onChange={(e) => setKeyCustomerProblems(e.target.value)} /></div>

            <div><label className={labelClasses}>Description of Ideal Customer *</label><textarea placeholder="Describe your ideal customer in detail (e.g., 'Busy professionals aged 30-50 with luxury vehicles who value convenience and quality...')" rows={4} className={inputClasses + " resize-none"} value={idealCustomerDescription} onChange={(e) => setIdealCustomerDescription(e.target.value)} /></div>

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
