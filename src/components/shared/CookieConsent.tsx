'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const REOPEN_EVENT = 'cookie-consent:reopen';

type ConsentStatus = 'accepted' | 'rejected';

interface StoredConsent {
  status: ConsentStatus;
  version: number;
  timestamp: number;
}

function loadConsent(): ConsentStatus | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    if (parsed.status !== 'accepted' && parsed.status !== 'rejected') return null;
    return parsed.status;
  } catch {
    return null;
  }
}

function saveConsent(status: ConsentStatus) {
  const payload: StoredConsent = {
    status,
    version: CONSENT_VERSION,
    timestamp: Date.now(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
}

export function reopenCookieConsent() {
  window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loadConsent reads localStorage; can't run during SSR
    setConsent(loadConsent());
  }, []);

  const accept = useCallback(() => {
    saveConsent('accepted');
    setConsent('accepted');
  }, []);

  const reject = useCallback(() => {
    saveConsent('rejected');
    setConsent('rejected');
  }, []);

  return { consent: consent === 'accepted' ? true : consent === 'rejected' ? false : null, accept, reject };
}

interface CookieConsentBannerProps {
  className?: string;
}

export default function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const { accept, reject } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loadConsent reads localStorage; can't run during SSR
    if (loadConsent() === null) setVisible(true);

    const onReopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, onReopen);
    return () => window.removeEventListener(REOPEN_EVENT, onReopen);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    accept();
    setVisible(false);
  };

  const handleReject = () => {
    reject();
    setVisible(false);
  };

  const buttonClasses =
    'flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium border border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-2';

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-5 md:p-6',
        className
      )}
      role="region"
      aria-label="Consentiment de cookies"
    >
      <div className="max-w-[1260px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
          Utilitzem cookies tècniques necessàries per al funcionament del lloc i, només amb
          el vostre consentiment, cookies de tercers (Google Maps) per mostrar el mapa d&apos;ubicació.
          No utilitzem cookies analítiques ni publicitàries.{' '}
          <a
            href="/avis-legal"
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors underline"
          >
            Més informació
          </a>
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button onClick={handleReject} className={buttonClasses}>
            Rebutjar
          </button>
          <button onClick={handleAccept} className={buttonClasses}>
            Acceptar
          </button>
        </div>
      </div>
    </div>
  );
}
