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
      <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center">
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
      <div className="min-h-screen bg-[#2a2a2a] relative overflow-hidden">
        <Sidebar />

        {/* Main content - positioned to the right of the fixed sidebar */}
        <main
          className="min-h-screen"
          style={{ marginLeft: '256px' }}
        >
          <div className="p-12">
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
