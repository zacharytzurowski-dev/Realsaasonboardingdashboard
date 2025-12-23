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

  // Website state
  const [hasWebsite, setHasWebsite] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [hasDomainAccess, setHasDomainAccess] = useState('');
  const [domainProvider, setDomainProvider] = useState('');

  // GBP state
  const [hasGBP, setHasGBP] = useState('');
  const [gbpEmail, setGbpEmail] = useState('');
  const [gbpSuspended, setGbpSuspended] = useState('');

  // Google Ads state
  const [hasGoogleAds, setHasGoogleAds] = useState('');
  const [googleAdsEmail, setGoogleAdsEmail] = useState('');
  const [googleAdsSuspended, setGoogleAdsSuspended] = useState('');

  // LSA state
  const [hasLSA, setHasLSA] = useState('');
  const [lsaEmail, setLsaEmail] = useState('');
  const [lsaRejectionReason, setLsaRejectionReason] = useState('');
  const [backgroundCheckReady, setBackgroundCheckReady] = useState('');

  // Social state
  const [hasFacebook, setHasFacebook] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [hasInstagram, setHasInstagram] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [hasNextdoor, setHasNextdoor] = useState('');
  const [hasYelp, setHasYelp] = useState('');
  const [yelpUrl, setYelpUrl] = useState('');
  const [hasCRM, setHasCRM] = useState('');
  const [crmName, setCrmName] = useState('');

  // Load existing data on mount
  useEffect(() => {
    const existingData = getStepData<Step5FormData>(5);
    if (existingData) {
      setHasWebsite(existingData.hasWebsite || '');
      setWebsiteUrl(existingData.websiteUrl || '');
      setHasDomainAccess(existingData.hasDomainAccess || '');
      setDomainProvider(existingData.domainProvider || '');
      setHasGBP(existingData.hasGBP || '');
      setGbpEmail(existingData.gbpEmail || '');
      setGbpSuspended(existingData.gbpSuspended || '');
      setHasGoogleAds(existingData.hasGoogleAds || '');
      setGoogleAdsEmail(existingData.googleAdsEmail || '');
      setGoogleAdsSuspended(existingData.googleAdsSuspended || '');
      setHasLSA(existingData.hasLSA || '');
      setLsaEmail(existingData.lsaEmail || '');
      setLsaRejectionReason(existingData.lsaRejectionReason || '');
      setBackgroundCheckReady(existingData.backgroundCheckReady || '');
      setHasFacebook(existingData.hasFacebook || '');
      setFacebookUrl(existingData.facebookUrl || '');
      setHasInstagram(existingData.hasInstagram || '');
      setInstagramUrl(existingData.instagramUrl || '');
      setHasNextdoor(existingData.hasNextdoor || '');
      setHasYelp(existingData.hasYelp || '');
      setYelpUrl(existingData.yelpUrl || '');
      setHasCRM(existingData.hasCRM || '');
      setCrmName(existingData.crmName || '');
    }
  }, [getStepData]);

  const handleSubmit = async () => {
    setSaving(true);

    const formData: Step5FormData = {
      hasWebsite,
      websiteUrl,
      hasDomainAccess,
      domainProvider,
      hasGBP,
      gbpEmail,
      gbpSuspended,
      hasGoogleAds,
      googleAdsEmail,
      googleAdsSuspended,
      hasLSA,
      lsaEmail,
      lsaRejectionReason,
      backgroundCheckReady,
      hasFacebook,
      facebookUrl,
      hasInstagram,
      instagramUrl,
      hasNextdoor,
      hasYelp,
      yelpUrl,
      hasCRM,
      crmName,
    };

    const success = await saveStepData(5, formData);
    setSaving(false);

    if (success) {
      onSave();
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20 transition-all";
  const sectionClasses = "p-6 rounded-xl bg-[#0D1114]/50 border border-[#293038] space-y-4";

  const WarningBox = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
      <p className="text-[#EF4444] text-sm">{children}</p>
    </div>
  );

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
            <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F59E0B]/50">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Existing Assets Audit
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 5 of 6</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-transparent to-[#EF4444]/5"></div>

          <form className="relative space-y-8">
            {/* WEBSITE SECTION */}
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#293038] pb-3">Website</h3>

              <div>
                <label className={labelClasses}>Do you have a website? *</label>
                <select className={selectClasses} value={hasWebsite} onChange={(e) => setHasWebsite(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes-replace">Yes - Replace it</option>
                  <option value="yes-keep">Yes - Keep it</option>
                </select>
              </div>

              {(hasWebsite === 'yes-replace' || hasWebsite === 'yes-keep') && (
                <>
                  <div>
                    <label className={labelClasses}>Website URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      className={inputClasses}
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Domain Registrar</label>
                    <input
                      type="text"
                      placeholder="e.g., GoDaddy, Namecheap"
                      className={inputClasses}
                      value={domainProvider}
                      onChange={(e) => setDomainProvider(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Do you have login access to the domain?</label>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setHasDomainAccess('yes')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasDomainAccess === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        Yes
                      </button>
                      <button type="button" onClick={() => setHasDomainAccess('no')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasDomainAccess === 'no' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        No
                      </button>
                    </div>
                    {hasDomainAccess === 'no' && (
                      <div className="mt-3">
                        <WarningBox>We need domain access to set up your website. Please locate login credentials before the onboarding call.</WarningBox>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* GOOGLE BUSINESS PROFILE SECTION */}
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#293038] pb-3">Google Business Profile</h3>

              <div>
                <label className={labelClasses}>Do you have a Google Business Profile? *</label>
                <select className={selectClasses} value={hasGBP} onChange={(e) => setHasGBP(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes-verified">Yes - Verified</option>
                  <option value="yes-unverified">Yes - Unverified</option>
                  <option value="yes-no-access">Yes - No access</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              {hasGBP && hasGBP !== 'no' && hasGBP !== 'not-sure' && (
                <>
                  <div>
                    <label className={labelClasses}>Email used for GBP</label>
                    <input
                      type="email"
                      placeholder="email@gmail.com"
                      className={inputClasses}
                      value={gbpEmail}
                      onChange={(e) => setGbpEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Has it ever been suspended?</label>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setGbpSuspended('yes')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${gbpSuspended === 'yes' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        Yes
                      </button>
                      <button type="button" onClick={() => setGbpSuspended('no')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${gbpSuspended === 'no' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        No
                      </button>
                    </div>
                    {gbpSuspended === 'yes' && (
                      <div className="mt-3">
                        <WarningBox>Suspended profiles are difficult to recover. We may need to create a new one.</WarningBox>
                      </div>
                    )}
                  </div>
                </>
              )}

              {hasGBP === 'yes-no-access' && (
                <WarningBox>We'll need to verify ownership or create a new profile.</WarningBox>
              )}
            </div>

            {/* GOOGLE ADS SECTION */}
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#293038] pb-3">Google Ads</h3>

              <div>
                <label className={labelClasses}>Do you have a Google Ads account? *</label>
                <select className={selectClasses} value={hasGoogleAds} onChange={(e) => setHasGoogleAds(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes-active">Yes - Active</option>
                  <option value="yes-inactive">Yes - Inactive</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              {(hasGoogleAds === 'yes-active' || hasGoogleAds === 'yes-inactive') && (
                <>
                  <div>
                    <label className={labelClasses}>Email used for Google Ads</label>
                    <input
                      type="email"
                      placeholder="email@gmail.com"
                      className={inputClasses}
                      value={googleAdsEmail}
                      onChange={(e) => setGoogleAdsEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Has it ever been suspended?</label>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setGoogleAdsSuspended('yes')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${googleAdsSuspended === 'yes' ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        Yes
                      </button>
                      <button type="button" onClick={() => setGoogleAdsSuspended('no')}
                        className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${googleAdsSuspended === 'no' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                        No
                      </button>
                    </div>
                    {googleAdsSuspended === 'yes' && (
                      <div className="mt-3">
                        <WarningBox>Suspended accounts usually can't be recovered. We may need to create a new account.</WarningBox>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* LOCAL SERVICES ADS SECTION */}
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#293038] pb-3">Local Services Ads (LSA)</h3>

              <div>
                <label className={labelClasses}>Have you applied for LSA before? *</label>
                <select className={selectClasses} value={hasLSA} onChange={(e) => setHasLSA(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes-active">Yes - Active</option>
                  <option value="yes-rejected">Yes - Rejected</option>
                  <option value="yes-pending">Yes - Pending</option>
                </select>
              </div>

              {(hasLSA === 'yes-active' || hasLSA === 'yes-pending') && (
                <div>
                  <label className={labelClasses}>Email used for LSA</label>
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className={inputClasses}
                    value={lsaEmail}
                    onChange={(e) => setLsaEmail(e.target.value)}
                  />
                </div>
              )}

              {hasLSA === 'yes-rejected' && (
                <>
                  <div>
                    <label className={labelClasses}>Why was it rejected?</label>
                    <select className={selectClasses} value={lsaRejectionReason} onChange={(e) => setLsaRejectionReason(e.target.value)}>
                      <option value="">Select...</option>
                      <option value="background">Background check</option>
                      <option value="insurance">Insurance</option>
                      <option value="verification">Verification</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {lsaRejectionReason === 'background' && (
                    <WarningBox>Background check failures are usually permanent. Another person may need to be the owner on record.</WarningBox>
                  )}
                </>
              )}

              <div>
                <label className={labelClasses}>Are you ready for a background check?</label>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setBackgroundCheckReady('yes')}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${backgroundCheckReady === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                    Yes
                  </button>
                  <button type="button" onClick={() => setBackgroundCheckReady('no')}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${backgroundCheckReady === 'no' ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                    No
                  </button>
                </div>
              </div>
            </div>

            {/* SOCIAL/OTHER SECTION */}
            <div className={sectionClasses}>
              <h3 className="text-[#E8F1FF] font-semibold text-lg border-b border-[#293038] pb-3">Social Media & Other</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Facebook Page URL <span className="text-[#64748B]">(Optional)</span></label>
                  <input
                    type="url"
                    placeholder="https://facebook.com/..."
                    className={inputClasses}
                    value={facebookUrl}
                    onChange={(e) => setFacebookUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Instagram URL <span className="text-[#64748B]">(Optional)</span></label>
                  <input
                    type="url"
                    placeholder="https://instagram.com/..."
                    className={inputClasses}
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Nextdoor Account?</label>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setHasNextdoor('yes')}
                      className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasNextdoor === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                      Yes
                    </button>
                    <button type="button" onClick={() => setHasNextdoor('no')}
                      className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasNextdoor === 'no' ? 'bg-[#0D1114] border-[#293038] text-[#94A3B8]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                      No
                    </button>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Yelp Page?</label>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setHasYelp('yes')}
                      className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasYelp === 'yes' ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                      Yes
                    </button>
                    <button type="button" onClick={() => setHasYelp('no')}
                      className={`flex-1 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${hasYelp === 'no' ? 'bg-[#0D1114] border-[#293038] text-[#94A3B8]' : 'bg-[#0D1114] border-[#293038] text-[#94A3B8]'}`}>
                      No
                    </button>
                  </div>
                </div>
              </div>

              {hasYelp === 'yes' && (
                <div>
                  <label className={labelClasses}>Yelp Page URL</label>
                  <input
                    type="url"
                    placeholder="https://yelp.com/..."
                    className={inputClasses}
                    value={yelpUrl}
                    onChange={(e) => setYelpUrl(e.target.value)}
                  />
                </div>
              )}

              <div>
                <label className={labelClasses}>Currently using any CRM? <span className="text-[#64748B]">(Optional)</span></label>
                <input
                  type="text"
                  placeholder="If yes, which one? Any data to migrate?"
                  className={inputClasses}
                  value={crmName}
                  onChange={(e) => setCrmName(e.target.value)}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save & Continue'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
