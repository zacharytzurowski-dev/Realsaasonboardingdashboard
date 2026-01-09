import { useState } from 'react';
import { User, Lock, CreditCard, Save, X, ChevronRight, Mail, Phone, Building, Wallet, Calendar, CheckCircle, Receipt, Settings } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useProfile } from '../../contexts/ProfileContext';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

export function SettingsPage() {
  const { profile, formData } = useProfile();
  const { user } = useAuth();
  const [passwordResetSent, setPasswordResetSent] = useState(false);
  const [passwordResetLoading, setPasswordResetLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    setPasswordResetLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(user.email);
      if (error) { alert('Error sending password reset email: ' + error.message); }
      else { setPasswordResetSent(true); alert('Password reset email sent! Check your inbox.'); }
    } catch (err) { alert('An error occurred. Please try again.'); }
    finally { setPasswordResetLoading(false); }
  };

  const fullName = profile?.full_name || user?.user_metadata?.full_name || 'Not provided';
  const email = user?.email || 'Not provided';
  const phoneNumber = formData?.step1_business_info?.businessPhone || 'Not provided';
  const companyName = formData?.step1_business_info?.businessName || profile?.business_name || 'Not provided';

  return (
    <div>
      <PageHero
        title="Settings"
        subtitle="Manage your account and preferences"
        icon={<Settings className="w-7 h-7 text-white" />}
        gradientFrom="#94a3b8"
        gradientTo="#334155"
      />

      {/* Profile Settings */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] mb-6 p-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.05) 0%, transparent 50%)' }}></div>
        <div className="relative">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
              <User className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl font-medium mb-1 tracking-tight">Profile Settings</h3>
              <p className="text-[#7a8494]">Update your personal information and preferences</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-[#7a8494] text-sm mb-3"><User className="w-4 h-4" />Full Name</label>
              <div className="w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#c5cdd8]">{fullName}</div>
            </div>
            <div>
              <label className="flex items-center gap-2 text-[#7a8494] text-sm mb-3"><Mail className="w-4 h-4" />Email Address</label>
              <div className="w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#c5cdd8]">{email}</div>
            </div>
            <div>
              <label className="flex items-center gap-2 text-[#7a8494] text-sm mb-3"><Phone className="w-4 h-4" />Phone Number</label>
              <div className="w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#c5cdd8]">{phoneNumber}</div>
            </div>
            <div>
              <label className="flex items-center gap-2 text-[#7a8494] text-sm mb-3"><Building className="w-4 h-4" />Company Name</label>
              <div className="w-full px-4 py-3 rounded-xl bg-[#0f1115] border border-[#252a33] text-[#c5cdd8]">{companyName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] mb-6 p-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 50%)' }}></div>
        <div className="relative">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 65%, #047857 80%, #065f46 100%)', boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(6, 95, 70, 0.4)' }}>
              <Lock className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl font-medium mb-1 tracking-tight">Security</h3>
              <p className="text-[#7a8494]">Password and security settings</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button onClick={handlePasswordReset} disabled={passwordResetLoading || passwordResetSent} className="group relative p-5 rounded-2xl bg-[#0f1115] border border-[#252a33] hover:border-[#10B981]/40 transition-all text-left hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/0 group-hover:from-[#10B981]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2">
                <Lock className="w-5 h-5 text-[#10B981]" />
                <ChevronRight className="w-4 h-4 text-[#7a8494] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="relative text-[#E8F1FF] mb-1">{passwordResetLoading ? 'Sending...' : passwordResetSent ? 'Email Sent ✓' : 'Change Password'}</p>
              <p className="relative text-[#7a8494] text-sm">{passwordResetSent ? 'Check your inbox for reset link' : 'Send password reset email'}</p>
            </button>
          </div>
        </div>
      </div>

      {/* Billing */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] mb-6 p-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>
        <div className="relative">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
              <CreditCard className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#E8F1FF] text-xl font-medium mb-1 tracking-tight">Billing & Subscription</h3>
              <p className="text-[#7a8494]">Manage your payment methods and subscription</p>
            </div>
          </div>

          <div className="mb-6 p-6 rounded-2xl bg-[#0f1115] border border-[#252a33]" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
            <div className="flex items-center justify-between mb-4">
              <div><p className="text-[#7a8494] text-sm mb-1">Current Plan</p><p className="text-[#E8F1FF] text-2xl">Pro Plan</p></div>
              <div className="text-right"><p className="text-[#7a8494] text-sm mb-1">Next Billing Date</p><p className="text-[#c5cdd8]">Jan 15, 2026</p></div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#252a33]">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#10B981]" /><span className="text-[#7a8494] text-sm">Auto-renewal enabled</span></div>
              <span className="text-[#E8F1FF] text-xl">$99/mo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button className="group relative p-5 rounded-2xl bg-[#0f1115] border border-[#252a33] hover:border-[#64748B]/40 transition-all text-left hover:-translate-y-1" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#64748B]/0 group-hover:from-[#64748B]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2"><Wallet className="w-5 h-5 text-[#94a3b8]" /><ChevronRight className="w-4 h-4 text-[#7a8494] opacity-0 group-hover:opacity-100 transition-opacity" /></div>
              <p className="relative text-[#E8F1FF] mb-1">Payment Methods</p>
              <p className="relative text-[#7a8494] text-sm">Manage cards & payments</p>
            </button>
            <button className="group relative p-5 rounded-2xl bg-[#0f1115] border border-[#252a33] hover:border-[#64748B]/40 transition-all text-left hover:-translate-y-1" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#64748B]/0 group-hover:from-[#64748B]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2"><Calendar className="w-5 h-5 text-[#94a3b8]" /><ChevronRight className="w-4 h-4 text-[#7a8494] opacity-0 group-hover:opacity-100 transition-opacity" /></div>
              <p className="relative text-[#E8F1FF] mb-1">Billing History</p>
              <p className="relative text-[#7a8494] text-sm">View past transactions</p>
            </button>
            <button className="group relative p-5 rounded-2xl bg-[#0f1115] border border-[#252a33] hover:border-[#64748B]/40 transition-all text-left hover:-translate-y-1" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#64748B]/0 group-hover:from-[#64748B]/5 to-transparent rounded-2xl transition-all pointer-events-none"></div>
              <div className="relative flex items-center justify-between mb-2"><Receipt className="w-5 h-5 text-[#94a3b8]" /><ChevronRight className="w-4 h-4 text-[#7a8494] opacity-0 group-hover:opacity-100 transition-opacity" /></div>
              <p className="relative text-[#E8F1FF] mb-1">Invoices</p>
              <p className="relative text-[#7a8494] text-sm">Download invoices</p>
            </button>
          </div>

          <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(30, 41, 59, 0.3)' }}>
            <CreditCard className="w-5 h-5" />
            <span>Update Payment Method</span>
          </button>
        </div>
      </div>

      {/* Account Actions */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] p-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.02) 0%, transparent 50%)' }}></div>
        <div className="relative">
          <h3 className="text-[#E8F1FF] text-xl font-medium mb-6 tracking-tight">Account Actions</h3>
          <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #252a33, transparent)' }}></div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(30, 41, 59, 0.3)' }}>
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[#c5cdd8] border border-[#252a33] hover:border-[#64748B]/50 transition-all" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
              <X className="w-5 h-5" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
