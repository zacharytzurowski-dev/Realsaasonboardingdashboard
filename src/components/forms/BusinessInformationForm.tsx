import { Building2, ChevronLeft, ChevronDown, ChevronUp, Trash2, Plus, User, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useProfile, Step1FormData } from '../../contexts/ProfileContext';

interface BusinessInformationFormProps {
  onBack: () => void;
  onSave: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  isExpanded: boolean;
}

export function BusinessInformationForm({ onBack, onSave }: BusinessInformationFormProps) {
  const { getStepData, saveStepData } = useProfile();
  const [saving, setSaving] = useState(false);

  // Form state
  const [businessName, setBusinessName] = useState('');
  const [legalName, setLegalName] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [yearEstablished, setYearEstablished] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [servicesPricing, setServicesPricing] = useState('');
  const [primaryCity, setPrimaryCity] = useState('');
  const [serviceRadius, setServiceRadius] = useState('');
  const [excludedAreas, setExcludedAreas] = useState('');
  const [hoursOfOperation, setHoursOfOperation] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [insuranceDocumentLink, setInsuranceDocumentLink] = useState('');
  const [monthlyRevenueRange, setMonthlyRevenueRange] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Load existing data on mount
  useEffect(() => {
    const existingData = getStepData<Step1FormData>(1);
    if (existingData) {
      setBusinessName(existingData.businessName || '');
      setLegalName(existingData.legalName || '');
      setBusinessPhone(existingData.businessPhone || '');
      setBusinessEmail(existingData.businessEmail || '');
      setBusinessAddress(existingData.businessAddress || '');
      setYearEstablished(existingData.yearEstablished || '');
      setBusinessType(existingData.businessType || '');
      setServicesPricing(existingData.servicesPricing || '');
      setPrimaryCity(existingData.primaryCity || '');
      setServiceRadius(existingData.serviceRadius || '');
      setExcludedAreas(existingData.excludedAreas || '');
      setHoursOfOperation(existingData.hoursOfOperation || '');
      setWebsiteUrl(existingData.websiteUrl || '');
      setInsuranceDocumentLink(existingData.insuranceDocumentLink || '');
      setMonthlyRevenueRange(existingData.monthlyRevenueRange || '');
      setTeamSize(existingData.teamSize || '');
      if (existingData.teamMembers) {
        setTeamMembers(existingData.teamMembers.map(m => ({ ...m, isExpanded: false })));
      }
    }
  }, [getStepData]);

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: '',
      role: '',
      isExpanded: true,
    };
    setTeamMembers([...teamMembers, newMember]);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const toggleExpanded = (id: string) => {
    setTeamMembers(teamMembers.map(member =>
      member.id === id ? { ...member, isExpanded: !member.isExpanded } : member
    ));
  };

  const updateTeamMember = (id: string, field: 'name' | 'role', value: string) => {
    setTeamMembers(teamMembers.map(member =>
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const handleSubmit = async () => {
    console.log('BusinessInformationForm: handleSubmit called');
    setSaving(true);

    const formData: Step1FormData = {
      businessName,
      legalName,
      businessPhone,
      businessEmail,
      businessAddress,
      yearEstablished,
      businessType,
      servicesPricing,
      primaryCity,
      serviceRadius,
      excludedAreas,
      hoursOfOperation,
      websiteUrl,
      insuranceDocumentLink,
      monthlyRevenueRange,
      teamSize,
      teamMembers: teamMembers.map(({ id, name, role }) => ({ id, name, role })),
    };

    const success = await saveStepData(1, formData);
    setSaving(false);

    if (success) {
      onSave();
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all";
  const labelClasses = "flex items-center gap-2 text-[#94A3B8] text-sm mb-2";
  const selectClasses = "w-full px-4 py-3 rounded-xl bg-[#0D1114] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none focus:ring-2 focus:ring-[#3AB8FF]/20 transition-all";

  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #3AB8FF 1px, transparent 1px), linear-gradient(0deg, #3AB8FF 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#3AB8FF]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        <button onClick={onBack} className="flex items-center gap-2 text-[#3AB8FF] hover:text-[#5DAEFF] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3AB8FF] to-[#00CFFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E8F1FF] to-[#94A3B8] bg-clip-text text-transparent">
                Business Information
              </h1>
              <p className="text-sm text-[#94A3B8] mt-1">Step 1 of 6</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#1A1D23] to-[#0F1115] rounded-2xl border border-[#293038] p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 via-transparent to-[#8B5CF6]/5"></div>

          <form className="relative space-y-6">
            {/* Business Name */}
            <div>
              <label className={labelClasses}>Business Name *</label>
              <input
                type="text"
                placeholder="Your Business Name"
                className={inputClasses}
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            {/* Legal Business Name / DBA */}
            <div>
              <label className={labelClasses}>Legal Business Name / DBA *</label>
              <input
                type="text"
                placeholder="Legal name as registered"
                className={inputClasses}
                value={legalName}
                onChange={(e) => setLegalName(e.target.value)}
              />
            </div>

            {/* Two Column: Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Business Phone *</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className={inputClasses}
                  value={businessPhone}
                  onChange={(e) => setBusinessPhone(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Business Email *</label>
                <input
                  type="email"
                  placeholder="contact@business.com"
                  className={inputClasses}
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Business Address */}
            <div>
              <label className={labelClasses}>Business Address *</label>
              <input
                type="text"
                placeholder="123 Main Street, City, State 12345"
                className={inputClasses}
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
              />
            </div>

            {/* Two Column: Year Established & Business Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Year Established *</label>
                <input
                  type="number"
                  placeholder="2020"
                  min="1900"
                  max="2025"
                  className={inputClasses}
                  value={yearEstablished}
                  onChange={(e) => setYearEstablished(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Business Type *</label>
                <select
                  className={selectClasses}
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option value="">Select type...</option>
                  <option value="mobile">Mobile Only</option>
                  <option value="physical">Physical Location</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            {/* Services + Pricing */}
            <div>
              <label className={labelClasses}>Services + Pricing *</label>
              <textarea
                placeholder="List your services and prices (e.g., Interior Detail - $150, Full Detail - $250)"
                rows={4}
                className={inputClasses + " resize-none"}
                value={servicesPricing}
                onChange={(e) => setServicesPricing(e.target.value)}
              />
            </div>

            {/* Two Column: Primary City & Service Radius */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Primary Service City *</label>
                <input
                  type="text"
                  placeholder="Atlanta, GA"
                  className={inputClasses}
                  value={primaryCity}
                  onChange={(e) => setPrimaryCity(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Service Radius (Miles) *</label>
                <input
                  type="number"
                  placeholder="25"
                  min="1"
                  className={inputClasses}
                  value={serviceRadius}
                  onChange={(e) => setServiceRadius(e.target.value)}
                />
              </div>
            </div>

            {/* Excluded Areas */}
            <div>
              <label className={labelClasses}>Areas NOT to Serve <span className="text-[#64748B]">(Optional)</span></label>
              <textarea
                placeholder="List any cities or ZIP codes you do NOT service"
                rows={2}
                className={inputClasses + " resize-none"}
                value={excludedAreas}
                onChange={(e) => setExcludedAreas(e.target.value)}
              />
            </div>

            {/* Hours of Operation */}
            <div>
              <label className={labelClasses}>Hours of Operation *</label>
              <input
                type="text"
                placeholder="Mon-Fri: 8am-6pm, Sat: 9am-3pm"
                className={inputClasses}
                value={hoursOfOperation}
                onChange={(e) => setHoursOfOperation(e.target.value)}
              />
            </div>

            {/* Website URL */}
            <div>
              <label className={labelClasses}>Website URL <span className="text-[#64748B]">(Optional)</span></label>
              <input
                type="url"
                placeholder="https://www.yourbusiness.com"
                className={inputClasses}
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>

            {/* Insurance Document Link */}
            <div>
              <label className={labelClasses}>Insurance Document Link *</label>
              <input
                type="text"
                placeholder="Paste Google Drive or Dropbox link to your insurance document"
                className={inputClasses}
                value={insuranceDocumentLink}
                onChange={(e) => setInsuranceDocumentLink(e.target.value)}
              />
            </div>

            {/* Monthly Revenue Range */}
            <div>
              <label className={labelClasses}>Monthly Revenue Range <span className="text-[#64748B]">(Optional)</span></label>
              <select
                className={selectClasses}
                value={monthlyRevenueRange}
                onChange={(e) => setMonthlyRevenueRange(e.target.value)}
              >
                <option value="">Select range...</option>
                <option value="under5k">Under $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label className={labelClasses}>Team Size <span className="text-[#64748B]">(Optional)</span></label>
              <input
                type="number"
                placeholder="e.g., 2, 5, 12"
                min="1"
                className={inputClasses}
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
              />
            </div>

            {/* Team Members */}
            <div>
              <label className={labelClasses}>Team Members & Roles <span className="text-[#64748B]">(Optional)</span></label>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-[#0D1114] border border-[#293038] rounded-xl overflow-hidden">
                    <div onClick={() => toggleExpanded(member.id)} className="flex items-center gap-3 p-4 cursor-pointer group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3AB8FF]/20 to-[#8B5CF6]/20 flex items-center justify-center border border-[#3AB8FF]/30">
                        <User className="w-5 h-5 text-[#3AB8FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#E8F1FF] font-medium">{member.name || 'New team member'}</div>
                        {member.role && (
                          <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#3AB8FF]/10 text-[#3AB8FF] text-xs mt-1 border border-[#3AB8FF]/20">
                            {member.role}
                          </div>
                        )}
                      </div>
                      <div className="text-[#64748B] group-hover:text-[#3AB8FF] transition-colors">
                        {member.isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                    {member.isExpanded && (
                      <div className="px-4 pb-4 space-y-4 border-t border-[#293038] pt-4">
                        <div>
                          <label className="text-[#94A3B8] text-xs mb-2 block">Name</label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-3 py-2 rounded-lg bg-[#1A1D23] border border-[#293038] text-[#E8F1FF] placeholder:text-[#64748B] focus:border-[#3AB8FF] focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-[#94A3B8] text-xs mb-2 block">Role</label>
                          <select
                            value={member.role}
                            onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-[#1A1D23] border border-[#293038] text-[#E8F1FF] focus:border-[#3AB8FF] focus:outline-none text-sm"
                          >
                            <option value="">Select role</option>
                            <option value="Worker">Worker</option>
                            <option value="Sales Rep">Sales Rep</option>
                            <option value="Owner">Owner</option>
                            <option value="Manager">Manager</option>
                          </select>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeTeamMember(member.id); }}
                          className="flex items-center gap-2 text-[#EF4444] hover:text-[#DC2626] text-sm transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-[#293038] text-[#3AB8FF] hover:border-[#3AB8FF] hover:bg-[#3AB8FF]/5 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Team Member</span>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-6 border-t border-[#293038]">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="w-full bg-gradient-to-r from-[#3AB8FF] via-[#5DAEFF] to-[#00CFFF] text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#3AB8FF]/30 transition-all font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
