import { test, expect } from '@playwright/test';

test.describe('Patrocinadors page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/patrocinadors');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Patrocinadors');
  });

  test('shows intro text', async ({ page }) => {
    await expect(page.getByText(/seguit de patrocinadors/i)).toBeVisible();
  });

  test('shows sponsors image', async ({ page }) => {
    await expect(page.getByAltText(/Patrocinadors i col·laboradors/i)).toBeVisible();
  });

  test('appears in main navigation', async ({ page }) => {
    await page.goto('/');
    const navLink = page.getByRole('navigation').getByRole('link', { name: 'Patrocinadors' });
    await expect(navLink).toBeVisible();
  });
});
