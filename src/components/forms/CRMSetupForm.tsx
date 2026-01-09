import { Database, ChevronLeft, ExternalLink, AlertTriangle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step6FormData } from '../../contexts/ProfileContext';

interface CRMSetupFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function CRMSetupForm({ onBack, onSave }: CRMSetupFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [hasPurchased, setHasPurchased] = useState('');
  const [purchaseConfirmationLink, setPurchaseConfirmationLink] = useState('');
  const [fielddEmail, setFielddEmail] = useState('');
  const [fielddPassword, setFielddPassword] = useState('');

  useEffect(() => {
    const existingData = getStepData<Step6FormData>(6);
    if (existingData) {
      setSelectedPlan(existingData.selectedPlan || '');
      setHasPurchased(existingData.hasPurchased || '');
      setPurchaseConfirmationLink(existingData.purchaseConfirmationLink || '');
      setFielddEmail(existingData.fielddEmail || '');
      setFielddPassword(existingData.fielddPassword || '');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);
    const formData: Step6FormData = { selectedPlan, hasPurchased, purchaseConfirmationLink, fielddEmail, fielddPassword };
    const success = await saveStepData(6, formData);
    setSaving(false);
    if (success) onSave();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#7a8494] text-sm mb-2";
  const canProceed = hasPurchased === 'yes';

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8 1px, transparent 1px), linear-gradient(0deg, #38bdf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div></div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#38bdf8] hover:text-[#7dd3fc] mb-6 transition-colors"><ChevronLeft className="w-5 h-5" />Back to Checklist</button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #e0f2fe 0%, #bae6fd 15%, #7dd3fc 35%, #38bdf8 50%, #0ea5e9 65%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.5), inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(3, 105, 161, 0.4)' }}>
              <Database className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div><h1 className="text-3xl font-bold text-[#E8F1FF]">CRM Setup</h1><p className="text-sm text-[#7a8494] mt-1">Step 6 of 6</p></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)' }}></div>

          <form className="relative space-y-6">
            <div>
              <label className={labelClasses}>Selected Plan *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[{ value: 'start', label: 'Start', price: '$199/mo' }, { value: 'scale', label: 'Scale', price: '$299/mo' }, { value: 'pro', label: 'Pro', price: '$999/mo' }].map((plan) => (
                  <button key={plan.value} type="button" onClick={() => setSelectedPlan(plan.value)} className={`p-4 rounded-xl border text-left transition-all ${selectedPlan === plan.value ? 'border-[#38bdf8]' : 'bg-[#0f1115] border-[#252a33] hover:border-[#38bdf8]/50'}`} style={selectedPlan === plan.value ? { background: 'rgba(56, 189, 248, 0.1)' } : {}}>
                    <div className={`font-semibold ${selectedPlan === plan.value ? 'text-[#38bdf8]' : 'text-[#E8F1FF]'}`}>{plan.label}</div>
                    <div className="text-[#7a8494] text-sm">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClasses}>Have you purchased Fieldd yet? *</label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setHasPurchased('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasPurchased === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494] hover:border-[#38bdf8]/50'}`}>Yes</button>
                <button type="button" onClick={() => setHasPurchased('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasPurchased === 'no' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494] hover:border-[#38bdf8]/50'}`}>No</button>
              </div>
              {hasPurchased === 'no' && (
                <div className="mt-4 p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#EF4444] text-sm font-medium">Please purchase Fieldd before continuing.</p>
                    <a href="https://fieldd.co/pricing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-[#38bdf8] hover:text-[#7dd3fc] text-sm">Go to Fieldd to Purchase <ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              )}
            </div>

            {canProceed && (<>
              <div><label className={labelClasses}>Purchase Confirmation Link <span className="text-[#64748B]">(Optional)</span></label><input type="url" placeholder="https://..." className={inputClasses} value={purchaseConfirmationLink} onChange={(e) => setPurchaseConfirmationLink(e.target.value)} /></div>
              <div><label className={labelClasses}>Fieldd Account Email *</label><input type="email" placeholder="your-email@business.com" className={inputClasses} value={fielddEmail} onChange={(e) => setFielddEmail(e.target.value)} /></div>
              <div><label className={labelClasses}>Fieldd Account Password *</label><input type="password" placeholder="Enter your password" className={inputClasses} value={fielddPassword} onChange={(e) => setFielddPassword(e.target.value)} /><p className="text-[#64748B] text-xs mt-2">We will securely set up your entire Fieldd system for you.</p></div>
            </>)}

            <div className="pt-6 border-t border-[#252a33]">
              <button type="button" onClick={handleSubmit} disabled={!canProceed || saving} className={`w-full px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${canProceed ? 'text-white hover:-translate-y-0.5 disabled:opacity-70' : 'bg-[#252a33] text-[#64748B] cursor-not-allowed'}`} style={canProceed ? { background: 'linear-gradient(145deg, #bae6fd 0%, #7dd3fc 20%, #38bdf8 40%, #0ea5e9 60%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(3, 105, 161, 0.3)' } : {}}>
                {saving ? (<><Loader2 className="w-5 h-5 animate-spin" />Saving...</>) : 'Save & Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
