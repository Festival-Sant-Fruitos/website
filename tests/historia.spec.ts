import { test, expect } from '@playwright/test';

test.describe('Historia archive', () => {
  test('shows all editions on history page', async ({ page }) => {
    await page.goto('/historia');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Història');
    await expect(page.getByText('Veure programa complet').first()).toBeVisible();
  });

  test('rich archive page shows concert details', async ({ page }) => {
    await page.goto('/historia/2012');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('2012');
    await expect(page.getByText('Concert 1')).toBeVisible();
  });

  test('archive page has back link to all editions', async ({ page }) => {
    await page.goto('/historia/2012');
    await expect(page.getByRole('link', { name: /Totes les edicions/i })).toBeVisible();
  });
});
