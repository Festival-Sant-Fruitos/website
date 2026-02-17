import Link from 'next/link';
import Container from '@/components/shared/Container';

const footerColumns = [
  {
    title: 'Festival',
    links: [
      { label: 'Programa 2025', href: '/programa' },
      { label: 'Comprar Entrades', href: '/entrades' },
      { label: 'Ubicació i Accés', href: '/ubicacio' },
      { label: 'Història', href: '/historia' },
    ],
  },
  {
    title: 'Informació',
    links: [
      { label: 'Nosaltres', href: '/sobre' },
      { label: 'Contacte', href: '/sobre#contacte' },
      { label: 'Avís Legal', href: '/avis-legal' },
    ],
  },
  {
    title: 'Pràctic',
    links: [
      { label: 'Horaris', href: '/programa' },
      { label: 'Tarifes', href: '/entrades' },
      { label: 'Com arribar', href: '/ubicacio' },
      { label: 'Pla de pluja', href: '/ubicacio#pluja' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container size="lg" className="py-[6rem] md:py-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[4rem]">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="text-[1.6rem] font-serif font-medium uppercase tracking-tight text-white">
              Festival Internacional
            </p>
            <p className="text-[1.1rem] tracking-[0.2em] uppercase text-white/40 mt-[0.4rem]">
              de Música Clàssica
            </p>
            <p className="text-[1.3rem] text-white/40 mt-[0.4rem]">
              Memorial Eduard Casajoana
            </p>
            <p className="text-[1.4rem] text-white/60 mt-[2.4rem] leading-[1.6] max-w-[36rem]">
              Més de 30 anys portant la millor música clàssica a Mon Sant Benet,
              Sant Fruitós de Bages.
            </p>

            {/* Social icons */}
            <div className="flex gap-[1.6rem] mt-[2.4rem]">
              <a
                href="https://www.facebook.com/festivalsantfruitos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:festivalsantfruitos@gmail.com"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[1.2rem] font-bold tracking-[0.1em] uppercase text-white/40 mb-[2rem]">
                {col.title}
              </h3>
              <ul className="space-y-[1.2rem]">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[1.4rem] text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container size="lg" className="py-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-[1.6rem]">
          <p className="text-[1.2rem] text-white/30">
            &copy; {new Date().getFullYear()} Associació Música Clàssica Memorial Eduard Casajoana
          </p>
          <div className="flex items-center gap-[2rem]">
            <Link href="/avis-legal" className="text-[1.2rem] text-white/30 hover:text-white/60 transition-colors">
              Avís Legal
            </Link>
            <span className="text-white/10">|</span>
            <span className="text-[1.2rem] text-white/30">
              Entrades a{' '}
              <a href="https://www.codetickets.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:text-white transition-colors font-medium">
                CodeTickets
              </a>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
