'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Container from '../shared/Container';
import Button from '../shared/Button';

const navLinks = [
  { label: 'Programa', href: '/programa' },
  { label: 'Entrades', href: '/entrades' },
  { label: 'Ubicació', href: '/ubicacio' },
  { label: 'Història', href: '/historia' },
  { label: 'Nosaltres', href: '/sobre' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <Container size="lg" className="h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-[15px] font-serif font-medium tracking-tight text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
              Festival Internacional
            </span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--color-text-light)] mt-[3px]">
              de Música Clàssica
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button href="/entrades" variant="primary" size="sm" className="hidden sm:inline-flex">
              Entrades
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1 text-[var(--color-primary)]"
              aria-label="Obrir menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
