import { createContext, useContext, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { useProfile } from './ProfileContext';

const INTERCOM_APP_ID = 'nod3jhrj';

interface IntercomContextType {
  showIntercom: () => void;
}

const IntercomContext = createContext<IntercomContextType | undefined>(undefined);

// Extend Window interface for Intercom
declare global {
  interface Window {
    Intercom: (...args: unknown[]) => void;
    intercomSettings: Record<string, unknown>;
  }
}

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { profile } = useProfile();

  // Load Intercom script
  useEffect(() => {
    // Don't load if already loaded
    if (window.Intercom) return;

    // Create the Intercom script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;

    // Initialize Intercom
    window.Intercom = function(...args: unknown[]) {
      window.Intercom.q = window.Intercom.q || [];
      window.Intercom.q.push(args);
    } as typeof window.Intercom;
    (window.Intercom as { q?: unknown[] }).q = [];

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  // Boot/update Intercom when user changes
  useEffect(() => {
    if (!window.Intercom) return;

    if (user) {
      // Boot Intercom with user data
      window.Intercom('boot', {
        app_id: INTERCOM_APP_ID,
        user_id: user.id,
        email: user.email,
        name: profile?.full_name || profile?.business_name || user.user_metadata?.full_name || 'User',
        created_at: user.created_at ? Math.floor(new Date(user.created_at).getTime() / 1000) : undefined,
      });
    } else {
      // Shutdown Intercom when user logs out
      window.Intercom('shutdown');
    }
  }, [user, profile]);

  // Helper function to show Intercom
  const showIntercom = useCallback(() => {
    if (window.Intercom) {
      window.Intercom('show');
    }
  }, []);

  return (
    <IntercomContext.Provider value={{ showIntercom }}>
      {children}
    </IntercomContext.Provider>
  );
}

export function useIntercom() {
  const context = useContext(IntercomContext);
  if (context === undefined) {
    throw new Error('useIntercom must be used within an IntercomProvider');
  }
  return context;
}

// Standalone helper function for use outside React components
export function showIntercom() {
  if (window.Intercom) {
    window.Intercom('show');
  }
}
