'use client';

import { useState } from 'react';
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <Container size="lg" className="h-[8rem] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-[1.6rem] font-serif font-medium tracking-tight text-[var(--color-primary)] uppercase group-hover:text-[var(--color-secondary)] transition-colors">
              Festival Internacional
            </span>
            <span className="text-[1.1rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-[0.4rem]">
              de Música Clàssica
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[3.2rem]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[1.4rem] font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: CTA + Mobile burger */}
          <div className="flex items-center gap-[1.6rem]">
            {/* Teal CTA - always visible, like La Pedrera */}
            <Button href="/entrades" variant="primary" size="md" className="hidden sm:inline-flex">
              Entrades
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-[0.4rem] text-[var(--color-primary)]"
              aria-label="Obrir menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
