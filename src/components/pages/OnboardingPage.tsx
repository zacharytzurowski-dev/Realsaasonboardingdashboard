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
  color: string;
}

const stepConfigs: OnboardingStepConfig[] = [
  {
    id: 1,
    title: 'Business Information',
    description: 'Tell us about your business, location, and services',
    icon: Building2,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 2,
    title: 'Brand & Identity',
    description: 'Upload your logo, colors, and brand assets',
    icon: Palette,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 3,
    title: 'Target Audience',
    description: 'Define your ideal customer and market',
    icon: Users,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 4,
    title: 'Content & Messaging',
    description: 'Set your messaging style and content tone',
    icon: FileText,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 5,
    title: 'Existing Assets Audit',
    description: 'Review your current website, ads, and online presence',
    icon: ClipboardList,
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 6,
    title: 'CRM Setup',
    description: 'Connect your Fieldd account for lead management',
    icon: Database,
    color: 'from-cyan-500 to-teal-600',
  },
];

export function OnboardingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { onboardingSubmitted, submitting, submitOnboarding, stepStatuses } = useProfile();
  const navigate = useNavigate();

  // Combine step configs with statuses from DB
  const steps = stepConfigs.map(config => ({
    ...config,
    status: stepStatuses[config.id] || 'not-started' as StepStatus
  }));

  const completedCount = steps.filter(step => step.status === 'completed').length;
  const progressPercentage = (completedCount / steps.length) * 100;
  const allStepsCompleted = completedCount === steps.length;

  // Debug: Log step statuses
  console.log('OnboardingPage: stepStatuses =', stepStatuses);
  console.log('OnboardingPage: completedCount =', completedCount);
  console.log('OnboardingPage: allStepsCompleted =', allStepsCompleted);
  console.log('OnboardingPage: onboardingSubmitted =', onboardingSubmitted);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  const handleBack = () => {
    setActiveStep(null);
  };

  const handleSave = () => {
    // Data is saved within the form component
    // Just close the form and return to checklist
    setActiveStep(null);
  };

  const handleSubmit = async () => {
    console.log('OnboardingPage: handleSubmit called');
    console.log('OnboardingPage: allStepsCompleted =', allStepsCompleted);
    console.log('OnboardingPage: onboardingSubmitted =', onboardingSubmitted);
    console.log('OnboardingPage: submitting =', submitting);

    const success = await submitOnboarding();
    console.log('OnboardingPage: submitOnboarding result =', success);

    if (success) {
      console.log('OnboardingPage: Navigating to /dashboard');
      navigate('/dashboard');
    } else {
      console.error('OnboardingPage: submitOnboarding failed');
    }
  };

  const getStatusBadge = (status: StepStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 shadow-sm shadow-[#10B981]/20">
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 shadow-sm shadow-[#06B6D4]/20">
            <Clock className="w-4 h-4 mr-1" />
            In Progress
          </span>
        );
      case 'not-started':
        return (
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-[#64748B]/10 text-[#94A3B8] border border-[#64748B]/20">
            <Circle className="w-4 h-4 mr-1" />
            Not Started
          </span>
        );
    }
  };

  // Show form if a step is active
  if (activeStep === 1) {
    return <BusinessInformationForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 2) {
    return <BrandIdentityForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 3) {
    return <TargetAudienceForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 4) {
    return <ContentMessagingForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 5) {
    return <ExistingAssetsAuditForm onBack={handleBack} onSave={handleSave} />;
  }
  if (activeStep === 6) {
    return <CRMSetupForm onBack={handleBack} onSave={handleSave} />;
  }

  // Show checklist view
  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Onboarding Checklist"
        subtitle="Complete these steps to launch your system"
        icon={<CheckCircle2 className="w-8 h-8 text-white" />}
        iconGradient="from-[#06B6D4] to-[#0D9488]"
      />

      {/* Progress Overview - Neon Blue Progress Bar */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1D23] to-[#1A1D23] border border-[#293038] shadow-md mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/3 to-transparent"></div>
        <div className="relative p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#E8F1FF] font-medium">Overall Progress</h3>
            <span className="text-[#06B6D4] font-medium">
              {completedCount} of {steps.length} completed
            </span>
          </div>
          <div className="h-2.5 bg-[#21262D] rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#06B6D4] via-[#0D9488] to-[#06B6D4] rounded-full transition-all duration-500 shadow-lg shadow-[#06B6D4]/40"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Onboarding Steps - Dark Card Panels */}
      <div className="space-y-3">
        {steps.map((step) => {
          const Icon = step.icon;

          // Map colors to dark theme gradients - all cyan/teal
          const colorMap: { [key: string]: { gradient: string; shadow: string } } = {
            'from-cyan-500 to-teal-600': {
              gradient: 'from-[#06B6D4] to-[#0D9488]',
              shadow: 'shadow-[#06B6D4]/50'
            },
          };

          const colorTheme = colorMap[step.color] || { gradient: 'from-[#06B6D4] to-[#0D9488]', shadow: 'shadow-[#06B6D4]/50' };

          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className="w-full bg-gradient-to-br from-[#1A1D23] to-[#1A1D23] rounded-xl p-6 border border-[#293038] shadow-md hover:shadow-lg hover:border-[#06B6D4]/30 hover:-translate-y-1 transition-all text-left group"
            >
              <div className="flex items-center gap-5">
                {/* Icon with Vibrant Gradient + Glow */}
                <div className={`w-14 h-14 bg-gradient-to-br ${colorTheme.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${colorTheme.shadow} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#E8F1FF] text-lg font-medium">{step.title}</h3>
                    {getStatusBadge(step.status)}
                  </div>
                  <div className="h-px bg-gradient-to-r from-[#293038] to-transparent my-2"></div>
                  <p className="text-[#94A3B8] text-sm">{step.description}</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-6 h-6 text-[#06B6D4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Onboarding Button */}
      <div className="mt-8 flex justify-center">
        {onboardingSubmitted ? (
          // Already submitted - show green completed badge
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981]/20 border border-[#10B981]/30">
            <Check className="w-5 h-5 text-[#10B981]" />
            <span className="text-[#10B981] font-medium">Onboarding Complete</span>
          </div>
        ) : allStepsCompleted ? (
          // All steps complete - show active submit button
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#06B6D4] via-[#0D9488] to-[#06B6D4] text-white font-medium hover:shadow-lg hover:shadow-[#06B6D4]/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            style={{ boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)' }}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Submit Onboarding</span>
              </>
            )}
          </button>
        ) : (
          // Steps incomplete - show disabled button
          <button
            disabled
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#1A1D23] text-[#64748B] border border-[#293038] font-medium cursor-not-allowed"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Submit Onboarding</span>
            <span className="text-sm text-[#475569]">({completedCount}/{steps.length})</span>
          </button>
        )}
      </div>
    </div>
  );
}
