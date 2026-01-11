import { BookOpen, ChevronLeft, Play } from 'lucide-react';

interface HowToUseYourCRMGuideProps {
  onBack: () => void;
}

export function HowToUseYourCRMGuide({ onBack }: HowToUseYourCRMGuideProps) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(0deg, #94a3b8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        {/* Back button */}
        <button onClick={onBack} className="flex items-center gap-2 text-[#94a3b8] hover:text-[#cbd5e1] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Operator's Guide
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
              <BookOpen className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">How to Use Your CRM</h1>
              <p className="text-sm text-[#7a8494] mt-1">Operating Fieldd to manage leads and bookings</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* Video Placeholder */}
            <div className="rounded-xl border border-[#252a33] overflow-hidden cursor-pointer group" style={{ background: 'linear-gradient(135deg, #0f1115 0%, #1a1d24 100%)' }}>
              <div className="aspect-video flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'rgba(0, 212, 170, 0.15)', border: '2px solid rgba(0, 212, 170, 0.3)' }}>
                  <Play className="w-9 h-9 text-[#00D4AA] ml-1" />
                </div>
                <p className="text-[#7a8494]">Video: CRM Walkthrough (5 min)</p>
              </div>
            </div>

            {/* What is Fieldd */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">What is Fieldd?</h2>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">
                Fieldd is your CRM (Customer Relationship Management) system. It's where all your leads flow in and where you manage your bookings, customer information, and job history.
              </p>
              <p className="text-[#c5cdd8] leading-relaxed">
                We've already set it up for your business. You just need to learn how to use it.
              </p>
            </div>

            {/* Booking Jobs Manually */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Booking Jobs Manually</h2>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                When a lead comes in and you close them on the phone, here's how to book the job:
              </p>
              <div className="space-y-3">
                {[
                  { num: 1, text: 'Open Fieldd and go to the Calendar' },
                  { num: 2, text: 'Click on the date and time slot you want to book' },
                  { num: 3, text: 'Enter the customer\'s name, phone, email, and address' },
                  { num: 4, text: 'Select the service type and add any notes' },
                  { num: 5, text: 'Save the booking — they\'ll get a confirmation automatically' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3 p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA] flex-shrink-0" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.num}</span>
                    <span className="text-[#c5cdd8]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Already Configured */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">What's Already Configured</h2>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                We've set up these features for you — no action needed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: 'Your Services', desc: 'All your service types are loaded' },
                  { label: 'Service Area', desc: 'Your zip codes are configured' },
                  { label: 'Business Hours', desc: 'Your availability is set' },
                  { label: 'Notifications', desc: 'Email/SMS confirmations are on' },
                  { label: 'Online Booking', desc: 'Connected to your website' },
                  { label: 'Lead Capture', desc: 'Leads flow in automatically' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA] font-medium whitespace-nowrap">{item.label}</span>
                    <span className="text-[#7a8494]">— {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Key Features to Know</h2>
              <div className="rounded-xl border border-[#252a33] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Feature</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">What It Does</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#c5cdd8]">
                    {[
                      { feature: 'Calendar View', desc: 'See all your booked jobs at a glance' },
                      { feature: 'Customer Profiles', desc: 'View history, notes, and contact info for each customer' },
                      { feature: 'Lead Inbox', desc: 'New leads appear here — respond fast!' },
                      { feature: 'Job Status', desc: 'Mark jobs as scheduled, completed, or cancelled' },
                      { feature: 'Mobile App', desc: 'Manage everything from your phone' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-[#252a33] last:border-b-0" style={{ background: idx % 2 === 0 ? 'rgba(15, 17, 21, 0.5)' : 'transparent' }}>
                        <td className="px-4 py-3 text-[#E8F1FF] font-medium">{row.feature}</td>
                        <td className="px-4 py-3">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Pro Tips</h2>
              <div className="space-y-3">
                {[
                  'Check your Lead Inbox first thing every morning',
                  'Add notes to every job — your future self will thank you',
                  'Use the mobile app when you\'re in the field',
                  'Respond to new leads within 5 minutes for best results',
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA]">→</span>
                    <span className="text-[#c5cdd8]">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Your CRM is your command center. Master it, and you'll never miss a lead.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
