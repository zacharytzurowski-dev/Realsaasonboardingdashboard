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
  console.log('IntercomProvider mounted');

  const { user } = useAuth();
  const { profile } = useProfile();
  const scriptLoaded = useRef(false);

  // Initialize and boot Intercom
  useEffect(() => {
    console.log('IntercomProvider useEffect running, user:', user?.email);

    if (!user) {
      console.log('No user, skipping Intercom init');
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
    console.log('Set window.intercomSettings:', window.intercomSettings);

    // If Intercom already loaded, just update
    if (typeof window.Intercom === 'function' && scriptLoaded.current) {
      console.log('Intercom already loaded, calling update');
      window.Intercom('update', window.intercomSettings);
      return;
    }

    // Load Intercom script (standard snippet from Intercom docs)
    if (!scriptLoaded.current) {
      scriptLoaded.current = true;
      console.log('Loading Intercom script...');

      (function() {
        const w = window;
        const ic = w.Intercom;
        if (typeof ic === "function") {
          console.log('Intercom function exists, reattaching');
          ic('reattach_activator');
          ic('update', w.intercomSettings);
        } else {
          console.log('Creating Intercom stub and loading script');
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
            console.log('Inserting Intercom script tag');
            const s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/' + INTERCOM_APP_ID;
            s.onload = () => console.log('Intercom script loaded successfully');
            s.onerror = (e) => console.error('Intercom script failed to load:', e);
            const x = d.getElementsByTagName('script')[0];
            if (x && x.parentNode) {
              x.parentNode.insertBefore(s, x);
            } else {
              d.head.appendChild(s);
            }
          };
          if (document.readyState === 'complete') {
            console.log('Document ready, loading script immediately');
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            console.log('Document not ready, waiting for load event');
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
