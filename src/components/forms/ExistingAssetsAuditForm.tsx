import { ClipboardList, ChevronLeft, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

interface ExistingAssetsAuditFormProps {
  onBack: () => void;
  onSave: () => void;
}

export function ExistingAssetsAuditForm({ onBack, onSave }: ExistingAssetsAuditFormProps) {
  // Website state
  const [hasWebsite, setHasWebsite] = useState('');
  const [hasDomainAccess, setHasDomainAccess] = useState('');

  // GBP state
  const [hasGBP, setHasGBP] = useState('');
  const [gbpSuspended, setGbpSuspended] = useState('');

  // Google Ads state
  const [hasGoogleAds, setHasGoogleAds] = useState('');
  const [googleAdsSuspended, setGoogleAdsSuspended] = useState('');

  // LSA state
  const [hasLSA, setHasLSA] = useState('');
  const [lsaRejectionReason, setLsaRejectionReason] = useState('');
  const [backgroundCheckReady, setBackgroundCheckReady] = useState('');

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
              <p className="text-sm text-[#94A3B8] mt-1">Step 5 of 7</p>
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
                    <input type="url" placeholder="https://..." className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Platform</label>
                    <select className={selectClasses}>
                      <option value="">Select...</option>
                      <option value="wix">Wix</option>
                      <option value="squarespace">Squarespace</option>
                      <option value="wordpress">WordPress</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Domain Registrar</label>
                    <input type="text" placeholder="e.g., GoDaddy, Namecheap" className={inputClasses} />
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
                    <input type="email" placeholder="email@gmail.com" className={inputClasses} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Current Rating</label>
                      <input type="text" placeholder="e.g., 4.8" className={inputClasses} />
                    </div>
                    <div>
                      <label className={labelClasses}>Review Count</label>
                      <input type="number" placeholder="e.g., 50" className={inputClasses} />
                    </div>
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
                    <input type="email" placeholder="email@gmail.com" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Will you grant manager access?</label>
                    <div className="flex gap-4">
                      <button type="button" className="flex-1 px-4 py-3 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">Yes</button>
                      <button type="button" className="flex-1 px-4 py-3 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">No</button>
                    </div>
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
                  <input type="url" placeholder="https://facebook.com/..." className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Instagram URL <span className="text-[#64748B]">(Optional)</span></label>
                  <input type="url" placeholder="https://instagram.com/..." className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Nextdoor Personal Account?</label>
                  <div className="flex gap-4">
                    <button type="button" className="flex-1 px-4 py-2 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">Yes</button>
                    <button type="button" className="flex-1 px-4 py-2 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">No</button>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Nextdoor Business Page?</label>
                  <div className="flex gap-4">
                    <button type="button" className="flex-1 px-4 py-2 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">Yes</button>
                    <button type="button" className="flex-1 px-4 py-2 rounded-xl border text-sm font-medium bg-[#0D1114] border-[#293038] text-[#94A3B8] hover:border-[#F59E0B]/50 transition-all">No</button>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>Yelp Page URL <span className="text-[#64748B]">(Optional)</span></label>
                <input type="url" placeholder="https://yelp.com/..." className={inputClasses} />
              </div>

              <div>
                <label className={labelClasses}>Currently using any CRM? <span className="text-[#64748B]">(Optional)</span></label>
                <input type="text" placeholder="If yes, which one? Any data to migrate?" className={inputClasses} />
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={onSave}
                className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all font-medium"
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
