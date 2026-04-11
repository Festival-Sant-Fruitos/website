'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CONSENT_KEY = 'cookie-consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') setConsent(true);
    else if (stored === 'rejected') setConsent(false);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent(true);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setConsent(false);
  };

  return { consent, accept, reject };
}

interface CookieConsentBannerProps {
  className?: string;
}

export default function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const { consent, accept, reject } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (consent === null) {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) setVisible(true);
    }
  }, [consent]);

  if (!visible || consent !== null) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-5 md:p-6',
        className
      )}
      role="dialog"
      aria-label="Consentiment de cookies"
    >
      <div className="max-w-[1260px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
          Utilitzem cookies de tercers (Google Maps) per mostrar el mapa d&apos;ubicació.
          Pots acceptar o rebutjar-les.{' '}
          <a
            href="/avis-legal"
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors underline"
          >
            Més informació
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
          >
            Rebutjar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] transition-colors"
          >
            Acceptar
          </button>
        </div>
      </div>
    </div>
  );
}
