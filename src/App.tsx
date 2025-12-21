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
      <div className="flex min-h-screen bg-[#080808] text-white">
        <Sidebar />
        {/* Spacer for fixed sidebar - only visible on lg screens */}
        <div className="hidden lg:block w-64 flex-shrink-0" />
        <main className="flex-1 min-h-screen overflow-y-auto p-6">
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
        </main>
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
