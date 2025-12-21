import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './components/pages/DashboardPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { WebsitePage } from './components/pages/WebsitePage';
import { AdsPage } from './components/pages/AdsPage';
import { PaidMarketingPage } from './components/pages/PaidMarketingPage';
import { OrganicMarketingPage } from './components/pages/OrganicMarketingPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { AuthPage } from './components/auth/AuthPage';
import { useAuth } from './contexts/AuthContext';
import { useProfile } from './contexts/ProfileContext';
import { Loader2 } from 'lucide-react';

export default function App() {
  const { user, loading: authLoading } = useAuth();
  const { onboardingProgress, loading: profileLoading } = useProfile();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Show loading state while checking auth or profile
  if (authLoading || (user && profileLoading)) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#00D9FF] animate-spin" />
      </div>
    );
  }

  // Show auth page if not logged in
  if (!user) {
    return <AuthPage />;
  }

  // Determine if onboarding is complete based on database
  const onboardingSteps = [
    { completed: onboardingProgress?.step_1_status === 'completed' },
    { completed: onboardingProgress?.step_2_status === 'completed' },
    { completed: onboardingProgress?.step_3_status === 'completed' },
    { completed: onboardingProgress?.step_4_status === 'completed' },
    { completed: onboardingProgress?.step_5_status === 'completed' },
    { completed: onboardingProgress?.step_6_status === 'completed' },
  ];

  const onboardingComplete = onboardingSteps.every(step => step.completed);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'onboarding':
        return <OnboardingPage />;
      case 'website':
        return <WebsitePage />;
      case 'ads':
        return <AdsPage />;
      case 'paid-marketing':
        return <PaidMarketingPage />;
      case 'organic-marketing':
        return <OrganicMarketingPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Ambient gradient glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#00D9FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onboardingComplete={onboardingComplete}
      />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}