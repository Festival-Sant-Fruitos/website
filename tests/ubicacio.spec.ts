import { test, expect } from '@playwright/test';

test.describe('Ubicacio page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ubicacio');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Món Sant Benet');
  });

  test('shows venue panoramic image', async ({ page }) => {
    await expect(page.locator('img[alt*="panoràmica"]')).toBeVisible();
  });

  test('shows parking and rain plan info', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Aparcament' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pla de Pluja' })).toBeVisible();
  });

  test('shows transport section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Com arribar', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: /Com arribar en cotxe/i })).toBeVisible();
  });

  test('map requires cookie consent', async ({ page }) => {
    await expect(page.getByText('Per veure el mapa cal acceptar les cookies')).toBeVisible();
    await expect(page.getByRole('button', { name: /Acceptar i mostrar mapa/i })).toBeVisible();
  });
});
