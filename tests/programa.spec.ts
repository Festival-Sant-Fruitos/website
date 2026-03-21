import { test, expect } from '@playwright/test';

test.describe('Programa page', () => {
  test('shows concert list for revealed edition', async ({ page }) => {
    await page.goto('/programa');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Programa Oficial');
    await expect(page.getByText('Gala d\'Òpera i Sarsuela')).toBeVisible();
  });

  test('shows all 4 concerts', async ({ page }) => {
    await page.goto('/programa');
    const concerts = page.locator('article');
    await expect(concerts).toHaveCount(4);
  });

  test('each concert shows artists and repertoire', async ({ page }) => {
    await page.goto('/programa');
    await expect(page.getByText('Intèrprets').first()).toBeVisible();
  });
});
