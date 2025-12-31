import { createContext, useContext, useEffect, useCallback, useRef } from 'react';
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
    Intercom: (command: string, ...args: unknown[]) => void;
    intercomSettings: Record<string, unknown>;
    attachEvent?: (event: string, callback: () => void) => void;
  }
}

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { profile } = useProfile();
  const scriptLoaded = useRef(false);

  // Initialize and boot Intercom
  useEffect(() => {
    if (!user) {
      // Shutdown if no user
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
      return;
    }

    // Set intercom settings with user data for auto-boot
    window.intercomSettings = {
      app_id: INTERCOM_APP_ID,
      user_id: user.id,
      email: user.email,
      name: profile?.full_name || profile?.business_name || user.user_metadata?.full_name || 'User',
      created_at: user.created_at ? Math.floor(new Date(user.created_at).getTime() / 1000) : undefined,
    };

    // If Intercom already loaded, just update
    if (typeof window.Intercom === 'function' && scriptLoaded.current) {
      window.Intercom('update', window.intercomSettings);
      return;
    }

    // Load Intercom script (standard snippet from Intercom docs)
    if (!scriptLoaded.current) {
      scriptLoaded.current = true;

      (function() {
        const w = window;
        const ic = w.Intercom;
        if (typeof ic === "function") {
          ic('reattach_activator');
          ic('update', w.intercomSettings);
        } else {
          const d = document;
          const i = function(...args: unknown[]) {
            (i as unknown as { c: (args: unknown[]) => void }).c(args);
          };
          (i as unknown as { q: unknown[]; c: (args: unknown[]) => void }).q = [];
          (i as unknown as { q: unknown[]; c: (args: unknown[]) => void }).c = function(args: unknown[]) {
            (i as unknown as { q: unknown[] }).q.push(args);
          };
          w.Intercom = i as typeof w.Intercom;
          const l = function() {
            const s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/' + INTERCOM_APP_ID;
            const x = d.getElementsByTagName('script')[0];
            if (x && x.parentNode) {
              x.parentNode.insertBefore(s, x);
            } else {
              d.head.appendChild(s);
            }
          };
          if (document.readyState === 'complete') {
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            w.addEventListener('load', l, false);
          }
        }
      })();
    }

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, [user, profile]);

  // Helper function to show Intercom messenger
  const showIntercom = useCallback(() => {
    if (window.Intercom) {
      window.Intercom('show');
    } else {
      console.warn('Intercom not loaded yet');
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
