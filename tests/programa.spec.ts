import { test, expect } from '@playwright/test';

test.describe('Programa page — 2026 concerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/programa');
  });

  test('shows all four 2026 concerts', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /De Barcelona a Buenos Aires/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Pianant/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Haydn i els Mozart/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /And the winner is/i })).toBeVisible();
  });

  test('shows correct prices from triptych', async ({ page }) => {
    await expect(page.getByText('25€').first()).toBeVisible();
    await expect(page.getByText('30€').first()).toBeVisible();
  });

  test('shows artist images for each concert', async ({ page }) => {
    const artistImages = page.locator('img[src*="/images/artists/"]');
    await expect(artistImages.first()).toBeVisible();
    expect(await artistImages.count()).toBeGreaterThanOrEqual(4);
  });

  test('triptych download link is present', async ({ page }) => {
    const downloadLink = page.getByRole('link', { name: /Descarrega el tríptic/i });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute('href', /triptic-2026/);
  });

  test('each concert has repertoire listed', async ({ page }) => {
    await expect(page.getByText('Villa-Lobos')).toBeVisible();
    await expect(page.getByText('Fàbrega')).toBeVisible();
  });
});
