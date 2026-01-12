import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ProfileProvider } from './contexts/ProfileContext'
import { IntercomProvider } from './contexts/IntercomContext'
import AuthPage from './components/auth/AuthPage'
import { Sidebar } from './components/Sidebar'
import { DashboardPage } from './components/pages/DashboardPage'
import { OnboardingPage } from './components/pages/OnboardingPage'
import { WebsitePage } from './components/pages/WebsitePage'
import { PaidMarketingPage } from './components/pages/PaidMarketingPage'
import { OrganicMarketingPage } from './components/pages/OrganicMarketingPage'
import { SettingsPage } from './components/pages/SettingsPage'
import { ResourcesPage } from './components/pages/ResourcesPage'
import { OperatorsGuidePage } from './components/pages/OperatorsGuidePage'

function ProtectedApp() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <AuthPage />
  }

  return (
    <ProfileProvider>
      <IntercomProvider>
      <div className="min-h-screen bg-[#080808] relative overflow-hidden">
        {/* Grid/Plaid pattern background with gradient fade */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(90deg, #14B8A6 1px, transparent 1px), linear-gradient(0deg, #14B8A6 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            mask: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.01) 60%, transparent 100%)',
            WebkitMask: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.01) 60%, transparent 100%)'
          }}
        />

        {/* Ambient gradient glows */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#00D9FF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <Sidebar />

        {/* Main content - positioned to the right of the fixed sidebar */}
        <main
          className="min-h-screen"
          style={{ marginLeft: '256px' }}
        >
          <div className="p-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/website" element={<WebsitePage />} />
              <Route path="/paid-marketing" element={<PaidMarketingPage />} />
              <Route path="/organic-marketing" element={<OrganicMarketingPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/operators-guide" element={<OperatorsGuidePage />} />
              {/* Catch-all route - redirect unknown paths to dashboard */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
      </div>
      </IntercomProvider>
    </ProfileProvider>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ProtectedApp />
      </Router>
    </AuthProvider>
  )
}
