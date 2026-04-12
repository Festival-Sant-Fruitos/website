'use client';

import { reopenCookieConsent } from './CookieConsent';

interface CookiePreferencesLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function CookiePreferencesLink({ className, children }: CookiePreferencesLinkProps) {
  return (
    <button type="button" onClick={reopenCookieConsent} className={className}>
      {children}
    </button>
  );
}
