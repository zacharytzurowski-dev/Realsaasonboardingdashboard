import { User, Lock, CreditCard, Save, X, ChevronRight, Mail, Phone, Building, Wallet, Calendar, CheckCircle, Receipt } from 'lucide-react';

export function SettingsPage() {
  return (
    <div>
      {/* Page Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#64748B] to-[#475569] rounded-2xl flex items-center justify-center shadow-lg shadow-[#64748B]/50">
            <User className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#E8F1FF]">Settings</h1>
            <p className="text-[#94A3B8]">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      {/* Profile Settings */}
      <div 
        className="relative overflow-hidden bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 mb-6 p-8"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                boxShadow: '0 8px 24px rgba(0, 217, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl mb-1 tracking-tight">Profile Settings</h3>
              <p className="text-[#8B8D98]">Update your personal information and preferences</p>
            </div>
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-[#8B8D98] text-sm mb-3">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2B2E]/50 text-white placeholder:text-[#6B6C7B] focus:border-[#00D9FF] focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-[#8B8D98] text-sm mb-3">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2B2E]/50 text-white placeholder:text-[#6B6C7B] focus:border-[#00D9FF] focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="flex items-center gap-2 text-[#8B8D98] text-sm mb-3">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2B2E]/50 text-white placeholder:text-[#6B6C7B] focus:border-[#00D9FF] focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="flex items-center gap-2 text-[#8B8D98] text-sm mb-3">
                <Building className="w-4 h-4" />
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company Inc."
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#2A2B2E]/50 text-white placeholder:text-[#6B6C7B] focus:border-[#00D9FF] focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div 
        className="relative overflow-hidden bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 mb-6 p-8"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl mb-1 tracking-tight">Security</h3>
              <p className="text-[#8B8D98]">Password and security settings</p>
            </div>
          </div>

          {/* Security Options Grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* Change Password */}
            <button className="group relative p-5 rounded-2xl bg-[#0A0A0A] border border-[#2A2B2E]/50 hover:border-[#10B981]/40 transition-all text-left hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 group-hover:from-[#10B981]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Lock className="w-5 h-5 text-[#10B981]" />
                <ChevronRight className="w-4 h-4 text-[#8B8D98] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-white mb-1">Change Password</p>
              <p className="relative text-[#8B8D98] text-sm">Update your password</p>
            </button>
          </div>
        </div>
      </div>

      {/* Billing */}
      <div 
        className="relative overflow-hidden bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 mb-6 p-8"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#EC4899] rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                boxShadow: '0 8px 24px rgba(249, 115, 22, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl mb-1 tracking-tight">Billing & Subscription</h3>
              <p className="text-[#8B8D98]">Manage your payment methods and subscription</p>
            </div>
          </div>

          {/* Current Subscription Card */}
          <div className="mb-6 p-6 rounded-2xl bg-[#0A0A0A] border border-[#F97316]/20"
            style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[#8B8D98] text-sm mb-1">Current Plan</p>
                <p className="text-white text-2xl">Pro Plan</p>
              </div>
              <div className="text-right">
                <p className="text-[#8B8D98] text-sm mb-1">Next Billing Date</p>
                <p className="text-white">Jan 15, 2026</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#2A2B2E]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-[#8B8D98] text-sm">Auto-renewal enabled</span>
              </div>
              <span className="text-white text-xl">$99/mo</span>
            </div>
          </div>

          {/* Billing Mini-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Payment Methods */}
            <button className="group relative p-5 rounded-2xl bg-[#0A0A0A] border border-[#2A2B2E]/50 hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Wallet className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#8B8D98] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-white mb-1">Payment Methods</p>
              <p className="relative text-[#8B8D98] text-sm">Manage cards & payments</p>
            </button>

            {/* Billing History */}
            <button className="group relative p-5 rounded-2xl bg-[#0A0A0A] border border-[#2A2B2E]/50 hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#8B8D98] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-white mb-1">Billing History</p>
              <p className="relative text-[#8B8D98] text-sm">View past transactions</p>
            </button>

            {/* Invoices */}
            <button className="group relative p-5 rounded-2xl bg-[#0A0A0A] border border-[#2A2B2E]/50 hover:border-[#F97316]/40 transition-all text-left hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 group-hover:from-[#F97316]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Receipt className="w-5 h-5 text-[#F97316]" />
                <ChevronRight className="w-4 h-4 text-[#8B8D98] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-white mb-1">Invoices</p>
              <p className="relative text-[#8B8D98] text-sm">Download invoices</p>
            </button>
          </div>

          {/* Update Payment Button */}
          <button
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            style={{
              boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(249, 115, 22, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(249, 115, 22, 0.3)';
            }}
          >
            <CreditCard className="w-5 h-5" />
            <span>Update Payment Method</span>
          </button>
        </div>
      </div>

      {/* Account Actions */}
      <div 
        className="relative overflow-hidden bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/3 to-transparent pointer-events-none"></div>
        
        <div className="relative">
          <h3 className="text-white text-xl mb-6 tracking-tight">Account Actions</h3>
          
          {/* Subtle Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2A2B2E] to-transparent mb-6"></div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Save Changes Button */}
            <button
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-white hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              style={{
                boxShadow: '0 8px 24px rgba(0, 217, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 217, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 217, 255, 0.3)';
              }}
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>

            {/* Cancel Button */}
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#151618] text-white border border-[#2A2B2E] hover:border-[#00D9FF]/50 hover:bg-[#1A1B1E] transition-all">
              <X className="w-5 h-5" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
