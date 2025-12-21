import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ProfileProvider } from './contexts/ProfileContext'
import AuthPage from './components/auth/AuthPage'
import { Sidebar } from './components/Sidebar'
import { DashboardPage } from './components/pages/DashboardPage'
import { OnboardingPage } from './components/pages/OnboardingPage'
import { WebsitePage } from './components/pages/WebsitePage'
import { PaidMarketingPage } from './components/pages/PaidMarketingPage'
import { OrganicMarketingPage } from './components/pages/OrganicMarketingPage'
import { SettingsPage } from './components/pages/SettingsPage'
import { ResourcesPage } from './components/pages/ResourcesPage'

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

        <Sidebar />

        {/* Main content - ml-64 on large screens where sidebar is visible */}
        <div className="transition-all duration-300 ml-0 lg:ml-64">
          <div className="max-w-7xl mx-auto p-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/website" element={<WebsitePage />} />
              <Route path="/paid-marketing" element={<PaidMarketingPage />} />
              <Route path="/organic-marketing" element={<OrganicMarketingPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </div>
        </div>
      </div>
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
