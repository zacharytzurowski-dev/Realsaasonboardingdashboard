import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Circle, Building2, Palette, Users, FileText, Database, Clock, Check, Loader2, ClipboardList } from 'lucide-react';
import { PageHero } from '../PageHero';
import { BusinessInformationForm } from '../forms/BusinessInformationForm';
import { BrandIdentityForm } from '../forms/BrandIdentityForm';
import { TargetAudienceForm } from '../forms/TargetAudienceForm';
import { ContentMessagingForm } from '../forms/ContentMessagingForm';
import { ExistingAssetsAuditForm } from '../forms/ExistingAssetsAuditForm';
import { CRMSetupForm } from '../forms/CRMSetupForm';
import { useProfile, StepStatus } from '../../contexts/ProfileContext';

interface OnboardingStepConfig {
  id: number;
  title: string;
  description: string;
  icon: any;
}

const stepConfigs: OnboardingStepConfig[] = [
  { id: 1, title: 'Business Information', description: 'Tell us about your business, location, and services', icon: Building2 },
  { id: 2, title: 'Brand & Identity', description: 'Upload your logo, colors, and brand assets', icon: Palette },
  { id: 3, title: 'Target Audience', description: 'Define your ideal customer and market', icon: Users },
  { id: 4, title: 'Content & Messaging', description: 'Set your messaging style and content tone', icon: FileText },
  { id: 5, title: 'Existing Assets Audit', description: 'Review your current website, ads, and online presence', icon: ClipboardList },
  { id: 6, title: 'CRM Setup', description: 'Connect your Fieldd account for lead management', icon: Database },
];

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { onboardingSubmitted, submitting, submitOnboarding, stepStatuses } = useProfile();
  const navigate = useNavigate();

  const steps = stepConfigs.map(config => ({
    ...config,
    status: stepStatuses[config.id] || 'not-started' as StepStatus
  }));

  const completedCount = steps.filter(step => step.status === 'completed').length;
  const progressPercentage = (completedCount / steps.length) * 100;
  const allStepsCompleted = completedCount === steps.length;

  const handleStepClick = (stepId: number) => setActiveStep(stepId);
  const handleBack = () => setActiveStep(null);
  const handleSave = () => setActiveStep(null);

  const handleSubmit = async () => {
    const success = await submitOnboarding();
    if (success) navigate('/dashboard');
  };

  const getStatusBadge = (status: StepStatus) => {
    switch (status) {
      case 'completed':
        return (<span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm text-[#10B981] border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><CheckCircle2 className="w-4 h-4 mr-1" />Completed</span>);
      case 'in-progress':
        return (<span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm text-[#7dd3fc] border border-[#38bdf8]/25" style={{ background: 'rgba(56, 189, 248, 0.08)' }}><Clock className="w-4 h-4 mr-1" />In Progress</span>);
      case 'not-started':
        return (<span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm text-[#7a8494] border border-[#64748B]/20" style={{ background: 'rgba(100, 116, 139, 0.05)' }}><Circle className="w-4 h-4 mr-1" />Not Started</span>);
    }
  };

  if (activeStep === 1) return <BusinessInformationForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 2) return <BrandIdentityForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 3) return <TargetAudienceForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 4) return <ContentMessagingForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 5) return <ExistingAssetsAuditForm onBack={handleBack} onSave={handleSave} />;
  if (activeStep === 6) return <CRMSetupForm onBack={handleBack} onSave={handleSave} />;

  return (
    <div>
      <PageHero
        title="Onboarding Checklist"
        subtitle="Complete these steps to launch your system"
        icon={<CheckCircle2 className="w-7 h-7 text-white" />}
        gradientFrom="#bae6fd"
        gradientTo="#0369a1"
      />

      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#16181d] to-[#1a1d24] border border-[#252a33] mb-6" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, transparent 60%)' }}></div>
        <div className="relative p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#E8F1FF] font-medium">Overall Progress</h3>
            <span className="text-[#7dd3fc] font-medium">{completedCount} of {steps.length} completed</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(15, 17, 21, 0.8)' }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%`, background: 'linear-gradient(90deg, #bae6fd 0%, #7dd3fc 30%, #38bdf8 50%, #0ea5e9 70%, #0284c7 85%, #0369a1 100%)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <button key={step.id} onClick={() => handleStepClick(step.id)} className="w-full bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-xl p-6 border border-[#252a33] hover:border-[#38bdf8]/25 hover:-translate-y-1 transition-all text-left group" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: 'linear-gradient(145deg, #e0f2fe 0%, #bae6fd 15%, #7dd3fc 35%, #38bdf8 50%, #0ea5e9 65%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 8px 25px -5px rgba(56, 189, 248, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(3, 105, 161, 0.4)' }}>
                  <Icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#E8F1FF] text-lg font-medium">{step.title}</h3>
                    {getStatusBadge(step.status)}
                  </div>
                  <div className="h-px my-2" style={{ background: 'linear-gradient(to right, #252a33, transparent)' }}></div>
                  <p className="text-[#7a8494] text-sm">{step.description}</p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        {onboardingSubmitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#10B981] border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-5 h-5" /><span className="font-medium">Onboarding Complete</span></div>
        ) : allStepsCompleted ? (
          <button onClick={handleSubmit} disabled={submitting} className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-medium hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed" style={{ background: 'linear-gradient(145deg, #bae6fd 0%, #7dd3fc 20%, #38bdf8 40%, #0ea5e9 60%, #0284c7 80%, #0369a1 100%)', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(3, 105, 161, 0.3)' }}>
            {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" /><span>Submitting...</span></>) : (<><CheckCircle2 className="w-5 h-5" /><span>Submit Onboarding</span></>)}
          </button>
        ) : (
          <button disabled className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[#64748B] border border-[#252a33] font-medium cursor-not-allowed" style={{ background: 'rgba(20, 22, 26, 0.8)' }}><CheckCircle2 className="w-5 h-5" /><span>Submit Onboarding</span><span className="text-sm text-[#475569]">({completedCount}/{steps.length})</span></button>
        )}
      </div>
    </div>
  );
}
