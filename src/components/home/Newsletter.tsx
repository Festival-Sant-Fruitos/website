'use client';

import { useState } from 'react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <hr className="border-[var(--color-border)]" />
      <section className="py-[8rem] md:py-[12rem] bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-[60rem]">
              <h2 className="text-[2.4rem] md:text-[4.8rem] font-serif font-medium text-[var(--color-primary)] leading-[1.1]">
                No et perdis cap concert
              </h2>
              <p className="text-[1.8rem] text-[var(--color-text-muted)] mt-[1.6rem] leading-[1.5]">
                Subscriu-te per rebre informació sobre el festival, programació i venda d&apos;entrades.
              </p>

              {submitted ? (
                <div className="mt-[3.2rem] border border-[var(--color-secondary)] p-[2.4rem] bg-[var(--color-secondary)]/5">
                  <p className="text-[1.6rem] text-[var(--color-secondary)] font-medium">
                    Gràcies per subscriure&apos;t. Et mantindrem informat.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 mt-[3.2rem]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="El teu email"
                    required
                    className="flex-1 px-[2rem] py-[1.4rem] border border-[var(--color-border)] text-[1.6rem] text-[var(--color-text-main)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors bg-white min-w-0"
                  />
                  <Button type="submit" variant="primary" className="shrink-0 rounded-none sm:w-auto w-full">
                    Subscriure&apos;m
                  </Button>
                </form>
              )}
          </div>
        </Container>
      </section>
    </>
  );
}
