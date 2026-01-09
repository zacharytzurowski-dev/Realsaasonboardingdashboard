import { ClipboardList, ChevronLeft, AlertTriangle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step5FormData } from '../../contexts/ProfileContext';

interface ExistingAssetsAuditFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ExistingAssetsAuditForm({ onBack, onSave }: ExistingAssetsAuditFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);
  const [hasWebsite, setHasWebsite] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [hasDomainAccess, setHasDomainAccess] = useState('');
  const [domainProvider, setDomainProvider] = useState('');
  const [hasGBP, setHasGBP] = useState('');
  const [gbpEmail, setGbpEmail] = useState('');
  const [gbpSuspended, setGbpSuspended] = useState('');
  const [hasGoogleAds, setHasGoogleAds] = useState('');
  const [googleAdsEmail, setGoogleAdsEmail] = useState('');
  const [googleAdsSuspended, setGoogleAdsSuspended] = useState('');
  const [hasLSA, setHasLSA] = useState('');
  const [lsaEmail, setLsaEmail] = useState('');
  const [lsaRejectionReason, setLsaRejectionReason] = useState('');
  const [backgroundCheckReady, setBackgroundCheckReady] = useState('');
  const [hasFacebook, setHasFacebook] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [hasInstagram, setHasInstagram] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [hasNextdoor, setHasNextdoor] = useState('');
  const [nextdoorEmail, setNextdoorEmail] = useState('');
  const [nextdoorPassword, setNextdoorPassword] = useState('');
  const [hasYelp, setHasYelp] = useState('');
  const [yelpUrl, setYelpUrl] = useState('');
  const [yelpEmail, setYelpEmail] = useState('');
  const [yelpPassword, setYelpPassword] = useState('');
  const [hasCRM, setHasCRM] = useState('');
  const [crmName, setCrmName] = useState('');

  useEffect(() => {
    const existingData = getStepData<Step5FormData>(5);
    if (existingData) {
      setHasWebsite(existingData.hasWebsite || ''); setWebsiteUrl(existingData.websiteUrl || ''); setHasDomainAccess(existingData.hasDomainAccess || ''); setDomainProvider(existingData.domainProvider || '');
      setHasGBP(existingData.hasGBP || ''); setGbpEmail(existingData.gbpEmail || ''); setGbpSuspended(existingData.gbpSuspended || '');
      setHasGoogleAds(existingData.hasGoogleAds || ''); setGoogleAdsEmail(existingData.googleAdsEmail || ''); setGoogleAdsSuspended(existingData.googleAdsSuspended || '');
      setHasLSA(existingData.hasLSA || ''); setLsaEmail(existingData.lsaEmail || ''); setLsaRejectionReason(existingData.lsaRejectionReason || ''); setBackgroundCheckReady(existingData.backgroundCheckReady || '');
      setHasFacebook(existingData.hasFacebook || ''); setFacebookUrl(existingData.facebookUrl || ''); setHasInstagram(existingData.hasInstagram || ''); setInstagramUrl(existingData.instagramUrl || '');
      setHasNextdoor(existingData.hasNextdoor || ''); setNextdoorEmail(existingData.nextdoorEmail || ''); setNextdoorPassword(existingData.nextdoorPassword || '');
      setHasYelp(existingData.hasYelp || ''); setYelpUrl(existingData.yelpUrl || ''); setYelpEmail(existingData.yelpEmail || ''); setYelpPassword(existingData.yelpPassword || '');
      setHasCRM(existingData.hasCRM || ''); setCrmName(existingData.crmName || '');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);
    const formData: Step5FormData = { hasWebsite, websiteUrl, hasDomainAccess, domainProvider, hasGBP, gbpEmail, gbpSuspended, hasGoogleAds, googleAdsEmail, googleAdsSuspended, hasLSA, lsaEmail, lsaRejectionReason, backgroundCheckReady, hasFacebook, facebookUrl, hasInstagram, instagramUrl, hasNextdoor, nextdoorEmail, nextdoorPassword, hasYelp, yelpUrl, yelpEmail, yelpPassword, hasCRM, crmName };
    const success = await saveStepData(5, formData);
    setSaving(false);
    if (success) onSave();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#7a8494] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#E8F1FF] focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/20 transition-all";
  const sectionClasses = "p-6 rounded-xl bg-[#0f1115]/50 border border-[#252a33] space-y-4";

  const WarningBox = ({ children }: { children: React.ReactNode }) => (<div className="p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" /><p className="text-[#EF4444] text-sm">{children}</p></div>);

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8 1px, transparent 1px), linear-gradient(0deg, #38bdf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div></div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#38bdf8] hover:text-[#7dd3fc] mb-6 transition-colors"><ChevronLeft className="w-5 h-5" />Back to Checklist</button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #e0f2fe 0%, #bae6fd 15%, #7dd3fc 35%, #38bdf8 50%, #0ea5e9 65%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.5), inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(3, 105, 161, 0.4)' }}>
              <ClipboardList className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div><h1 className="text-3xl font-bold text-[#E8F1FF]">Existing Assets Audit</h1><p className="text-sm text-[#7a8494] mt-1">Step 5 of 6</p></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)' }}></div>

          <form className="relative space-y-8">
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#252a33] pb-3">Website</h3>
              <div><label className={labelClasses}>Do you have a website? *</label><select className={selectClasses} value={hasWebsite} onChange={(e) => setHasWebsite(e.target.value)}><option value="">Select...</option><option value="no">No</option><option value="yes-replace">Yes - Replace it</option></select></div>
              {(hasWebsite === 'yes-replace' || hasWebsite === 'yes-keep') && (<>
                <div><label className={labelClasses}>Website URL</label><input type="url" placeholder="https://..." className={inputClasses} value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} /></div>
                <div><label className={labelClasses}>Domain Registrar</label><input type="text" placeholder="e.g., GoDaddy, Namecheap" className={inputClasses} value={domainProvider} onChange={(e) => setDomainProvider(e.target.value)} /></div>
                <div><label className={labelClasses}>Do you have login access to the domain?</label><div className="flex gap-4"><button type="button" onClick={() => setHasDomainAccess('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasDomainAccess === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setHasDomainAccess('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasDomainAccess === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div>{hasDomainAccess === 'no' && <div className="mt-3"><WarningBox>We need domain access to set up your website. Please locate login credentials before the onboarding call.</WarningBox></div>}</div>
              </>)}
            </div>

            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#252a33] pb-3">Google Business Profile</h3>
              <div><label className={labelClasses}>Do you have a Google Business Profile? *</label><select className={selectClasses} value={hasGBP} onChange={(e) => setHasGBP(e.target.value)}><option value="">Select...</option><option value="no">No</option><option value="yes-verified">Yes - Verified</option><option value="yes-unverified">Yes - Unverified</option><option value="yes-no-access">Yes - No access</option><option value="not-sure">Not sure</option></select></div>
              {hasGBP && hasGBP !== 'no' && hasGBP !== 'not-sure' && (<>
                <div><label className={labelClasses}>Email used for GBP</label><input type="email" placeholder="email@gmail.com" className={inputClasses} value={gbpEmail} onChange={(e) => setGbpEmail(e.target.value)} /></div>
                <div><label className={labelClasses}>Has it ever been suspended?</label><div className="flex gap-4"><button type="button" onClick={() => setGbpSuspended('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${gbpSuspended === 'yes' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setGbpSuspended('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${gbpSuspended === 'no' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div>{gbpSuspended === 'yes' && <div className="mt-3"><WarningBox>Suspended profiles are difficult to recover. We may need to create a new one.</WarningBox></div>}</div>
              </>)}
              {hasGBP === 'yes-no-access' && <WarningBox>We'll need to verify ownership or create a new profile.</WarningBox>}
            </div>

            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#252a33] pb-3">Google Ads</h3>
              <div><label className={labelClasses}>Do you have a Google Ads account? *</label><select className={selectClasses} value={hasGoogleAds} onChange={(e) => setHasGoogleAds(e.target.value)}><option value="">Select...</option><option value="no">No</option><option value="yes-active">Yes - Active</option><option value="yes-inactive">Yes - Inactive</option><option value="not-sure">Not sure</option></select></div>
              {(hasGoogleAds === 'yes-active' || hasGoogleAds === 'yes-inactive') && (<>
                <div><label className={labelClasses}>Email used for Google Ads</label><input type="email" placeholder="email@gmail.com" className={inputClasses} value={googleAdsEmail} onChange={(e) => setGoogleAdsEmail(e.target.value)} /></div>
                <div><label className={labelClasses}>Has it ever been suspended?</label><div className="flex gap-4"><button type="button" onClick={() => setGoogleAdsSuspended('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${googleAdsSuspended === 'yes' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setGoogleAdsSuspended('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${googleAdsSuspended === 'no' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div>{googleAdsSuspended === 'yes' && <div className="mt-3"><WarningBox>Suspended accounts usually can't be recovered. We may need to create a new account.</WarningBox></div>}</div>
              </>)}
            </div>

            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#252a33] pb-3">Local Services Ads (LSA)</h3>
              <div><label className={labelClasses}>Have you applied for LSA before? *</label><select className={selectClasses} value={hasLSA} onChange={(e) => setHasLSA(e.target.value)}><option value="">Select...</option><option value="no">No</option><option value="yes-active">Yes - Active</option><option value="yes-rejected">Yes - Rejected</option><option value="yes-pending">Yes - Pending</option></select></div>
              {(hasLSA === 'yes-active' || hasLSA === 'yes-pending') && <div><label className={labelClasses}>Email used for LSA</label><input type="email" placeholder="email@gmail.com" className={inputClasses} value={lsaEmail} onChange={(e) => setLsaEmail(e.target.value)} /></div>}
              {hasLSA === 'yes-rejected' && (<><div><label className={labelClasses}>Why was it rejected?</label><select className={selectClasses} value={lsaRejectionReason} onChange={(e) => setLsaRejectionReason(e.target.value)}><option value="">Select...</option><option value="background">Background check</option><option value="insurance">Insurance</option><option value="verification">Verification</option><option value="other">Other</option></select></div>{lsaRejectionReason === 'background' && <WarningBox>Background check failures are usually permanent. Another person may need to be the owner on record.</WarningBox>}</>)}
              <div><label className={labelClasses}>Are you ready for a background check?</label><div className="flex gap-4"><button type="button" onClick={() => setBackgroundCheckReady('yes')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${backgroundCheckReady === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setBackgroundCheckReady('no')} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${backgroundCheckReady === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div></div>
            </div>

            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#252a33] pb-3">Social Media & Other</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className={labelClasses}>Facebook Page URL <span className="text-[#64748B]">(Optional)</span></label><input type="url" placeholder="https://facebook.com/..." className={inputClasses} value={facebookUrl} onChange={(e) => setFacebookUrl(e.target.value)} /></div>
                <div><label className={labelClasses}>Instagram URL <span className="text-[#64748B]">(Optional)</span></label><input type="url" placeholder="https://instagram.com/..." className={inputClasses} value={instagramUrl} onChange={(e) => setInstagramUrl(e.target.value)} /></div>
              </div>
              <div><label className={labelClasses}>Nextdoor Account?</label><div className="flex gap-4"><button type="button" onClick={() => setHasNextdoor('yes')} className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasNextdoor === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setHasNextdoor('no')} className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasNextdoor === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div></div>
              {hasNextdoor === 'yes' && <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label className={labelClasses}>Nextdoor Email</label><input type="email" placeholder="email@example.com" className={inputClasses} value={nextdoorEmail} onChange={(e) => setNextdoorEmail(e.target.value)} /></div><div><label className={labelClasses}>Nextdoor Password</label><input type="text" placeholder="Password" className={inputClasses} value={nextdoorPassword} onChange={(e) => setNextdoorPassword(e.target.value)} /></div></div>}
              <div><label className={labelClasses}>Yelp Page?</label><div className="flex gap-4"><button type="button" onClick={() => setHasYelp('yes')} className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasYelp === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>Yes</button><button type="button" onClick={() => setHasYelp('no')} className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasYelp === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0f1115] border-[#252a33] text-[#7a8494]'}`}>No</button></div></div>
              {hasYelp === 'yes' && <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label className={labelClasses}>Yelp Email</label><input type="email" placeholder="email@example.com" className={inputClasses} value={yelpEmail} onChange={(e) => setYelpEmail(e.target.value)} /></div><div><label className={labelClasses}>Yelp Password</label><input type="text" placeholder="Password" className={inputClasses} value={yelpPassword} onChange={(e) => setYelpPassword(e.target.value)} /></div></div>}
              <div><label className={labelClasses}>Currently using any CRM? <span className="text-[#64748B]">(Optional)</span></label><input type="text" placeholder="If yes, which one? Any data to migrate?" className={inputClasses} value={crmName} onChange={(e) => setCrmName(e.target.value)} /></div>
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
