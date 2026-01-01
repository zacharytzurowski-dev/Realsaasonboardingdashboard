import { CheckCircle, ChevronLeft, Edit } from 'lucide-react';

interface ReviewSubmitPageProps {
  onBack: () => void;
  onEdit: (stepId: number) => void;
  onSubmit: () => void;
}

export function ReviewSubmitPage({ onBack, onEdit, onSubmit }: ReviewSubmitPageProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-lg shadow-black/20 p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent pointer-events-none"></div>
      
      <div className="relative">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Checklist
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
            style={{
              boxShadow: '0 20px 60px -10px #10B98160, 0 0 40px #10B98120',
            }}
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-[#E8F1FF] text-2xl mb-1">Review & Submit</h2>
            <p className="text-[#94A3B8]">Review your information before submitting</p>
          </div>
        </div>

        {/* Success Message */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#10B981]/10 via-[#059669]/10 to-[#10B981]/10 rounded-xl p-6 border border-[#10B981]/30 backdrop-blur-sm mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/5 to-transparent pointer-events-none"></div>
          <div className="relative flex items-start gap-4">
            <div
              className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{
                boxShadow: '0 10px 30px -5px #10B98140',
              }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-[#E8F1FF] mb-1">Great work! You're almost done.</h3>
              <p className="text-[#94A3B8] text-sm">Review all your information below. Click Edit to make changes, or Submit to complete your onboarding.</p>
            </div>
          </div>
        </div>

        {/* Summary Sections */}
        <div className="space-y-4">
          {/* Business Information */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">Business Information</h3>
                <button
                  onClick={() => onEdit(1)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Business Name:</span>
                  <p className="text-[#E8F1FF]">ABC HVAC Services</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Owner Name:</span>
                  <p className="text-[#E8F1FF]">John Doe</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Email:</span>
                  <p className="text-[#E8F1FF]">hello@abchvac.com</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Phone:</span>
                  <p className="text-[#E8F1FF]">(555) 123-4567</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[#94A3B8]">Industry:</span>
                  <p className="text-[#E8F1FF]">HVAC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Guidelines */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">Brand Guidelines</h3>
                <button
                  onClick={() => onEdit(2)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Primary Color:</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded border border-[#293038]"></div>
                    <p className="text-[#E8F1FF]">#3B82F6</p>
                  </div>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Logo:</span>
                  <p className="text-[#E8F1FF]">Uploaded ✓</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Typography:</span>
                  <p className="text-[#E8F1FF]">Inter / Open Sans</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Photos:</span>
                  <p className="text-[#E8F1FF]">5 photos uploaded</p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">Target Audience</h3>
                <button
                  onClick={() => onEdit(3)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Ideal Customer:</span>
                  <p className="text-[#E8F1FF]">Homeowners</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Age Range:</span>
                  <p className="text-[#E8F1FF]">35-54</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[#94A3B8]">Specializations:</span>
                  <p className="text-[#E8F1FF]">AC replacement, emergency HVAC service, preventive maintenance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Preferences */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">Content Preferences</h3>
                <button
                  onClick={() => onEdit(4)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Tone & Voice:</span>
                  <p className="text-[#E8F1FF]">Professional</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Services:</span>
                  <p className="text-[#E8F1FF]">AC repair, heating, installation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ads & Tracking */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">Ads & Tracking Setup</h3>
                <button
                  onClick={() => onEdit(5)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Monthly Budget:</span>
                  <p className="text-[#E8F1FF]">$2,500 - $5,000</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Platforms:</span>
                  <p className="text-[#E8F1FF]">Google Ads, Local Services Ads</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Tracking Pixel:</span>
                  <p className="text-[#E8F1FF]">Installed ✓</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Billing:</span>
                  <p className="text-[#E8F1FF]">Verified ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* CRM Setup */}
          <div className="relative overflow-hidden border border-[#293038] rounded-xl p-6 bg-[#0D1114]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#E8F1FF]">CRM Setup</h3>
                <button
                  onClick={() => onEdit(6)}
                  className="flex items-center gap-2 text-[#06B6D4] hover:text-[#0D9488] text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#94A3B8]">Fieldd Account:</span>
                  <p className="text-[#E8F1FF]">Connected ✓</p>
                </div>
                <div>
                  <span className="text-[#94A3B8]">Sync Settings:</span>
                  <p className="text-[#E8F1FF]">Leads, Bookings enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="mt-8 pt-6 border-t border-[#293038]">
          <label className="flex items-start gap-3 mb-6 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 text-[#06B6D4] bg-[#0D1114] border-[#293038] rounded mt-1 focus:ring-2 focus:ring-[#06B6D4]/20 focus:ring-offset-0"
              defaultChecked
            />
            <span className="text-[#94A3B8] text-sm">
              I confirm that all information provided is accurate and I agree to the{' '}
              <a href="#" className="text-[#06B6D4] hover:text-[#0D9488] transition-colors">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-[#06B6D4] hover:text-[#0D9488] transition-colors">Privacy Policy</a>
            </span>
          </label>

          <button
            onClick={onSubmit}
            className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-2xl hover:from-[#059669] hover:to-[#047857] transition-all shadow-xl font-medium"
            style={{
              boxShadow: '0 10px 30px -5px #10B98140',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px -5px #10B98160';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px -5px #10B98140';
            }}
          >
            Submit Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}
