import { test, expect } from '@playwright/test';
import { isRevealed, currentEdition } from './utils';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero with festival title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Festival Internacional');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Música Clàssica');
  });

  test('hero has CTA buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Veure Programa' })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'Comprar Entrades' })).toBeVisible();
  });

  test('program section adapts to revealed state', async ({ page }) => {
    if (isRevealed) {
      const programSection = page.locator('section').filter({ hasText: /Programa \d{4}/ });
      await expect(programSection).toBeVisible();
      const concertLinks = programSection.getByRole('link').filter({ hasText: /juliol/i });
      await expect(concertLinks).toHaveCount(currentEdition.concerts.length);
    } else {
      await expect(page.getByRole('heading', { name: 'Pròximament' }).first()).toBeVisible();
    }
  });

  test('displays quote section', async ({ page }) => {
    await expect(page.getByText(/Considereu la Cultura sempre/)).toBeVisible();
    await expect(page.getByText(/Riccardo Muti/)).toBeVisible();
  });

  test('shows venue section with Món Sant Benet', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Món Sant Benet' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Com arribar-hi' })).toBeVisible();
  });

  test('shows stats in legacy banner', async ({ page }) => {
    const banner = page.locator('section').filter({ hasText: 'Més de tres dècades' });
    await banner.scrollIntoViewIfNeeded();
    await expect(banner.getByText('Edicions', { exact: true })).toBeVisible();
    await expect(banner.getByText('Concerts', { exact: true })).toBeVisible();
    await expect(banner.getByText('Artistes en total', { exact: true })).toBeVisible();
  });

  test('sponsors section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Amb el suport de' })).toBeVisible();
  });

  test('header navigation links are visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.getByRole('link', { name: 'Programa' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Entrades' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ubicació' }).first()).toBeVisible();
  });

  test('has JSON-LD structured data', async ({ page }) => {
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();
    const data = JSON.parse(jsonLd!);
    expect(data['@type']).toBe('MusicFestival');
    if (isRevealed) {
      expect(data.subEvent).toHaveLength(currentEdition.concerts.length);
    } else {
      expect(data.subEvent).toBeUndefined();
    }
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByLabel('Obrir menú').click();
    await expect(page.getByText('Tancar menú').or(page.getByLabel('Tancar menú'))).toBeVisible();
    await page.getByLabel('Tancar menú').click();
  });
});
