'use client';

import { useCookieConsent } from './CookieConsent';

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string;
}

export default function MapEmbed({ src, title, className }: MapEmbedProps) {
  const { consent, accept } = useCookieConsent();

  if (consent !== true) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] text-center p-10 ${className ?? ''}`}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[var(--color-text-light)] mb-4"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p className="text-base font-medium text-[var(--color-primary)] mb-2">
          Mapa de Google Maps
        </p>
        <p className="text-sm text-[var(--color-text-muted)] mb-5 max-w-[320px]">
          Per veure el mapa cal acceptar les cookies de tercers (Google).
        </p>
        <button
          onClick={accept}
          className="px-5 py-2.5 text-sm font-medium text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] transition-colors"
        >
          Acceptar i mostrar mapa
        </button>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      className={className}
    />
  );
}
