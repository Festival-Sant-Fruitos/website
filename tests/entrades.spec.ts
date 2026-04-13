import { test, expect } from '@playwright/test';

test.describe('Entrades page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/entrades');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Entrades');
  });

  test('shows teaser or full content based on revealed state', async ({ page }) => {
    const teaser = page.getByRole('heading', { name: 'Pròximament' });
    const isTeaser = await teaser.isVisible().catch(() => false);

    if (isTeaser) {
      await expect(page.getByRole('link', { name: /Segueix-nos a Instagram/i })).toBeVisible();
    } else {
      await expect(page.getByRole('heading', { name: /De Barcelona a Buenos Aires/i })).toBeVisible();
      await expect(page.getByText('25€').first()).toBeVisible();
      await expect(page.getByText('30€').first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'Comprar' }).first()).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Sant Fruitós de Bages' })).toBeVisible();
    }
  });

  test('always shows FAQ section', async ({ page }) => {
    await expect(page.getByText('Dubtes freqüents')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pla de pluja' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Accessibilitat' })).toBeVisible();
  });
});
