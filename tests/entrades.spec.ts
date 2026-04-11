import { test, expect } from '@playwright/test';

test.describe('Entrades page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/entrades');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Entrades');
  });

  test('shows pricing tiers', async ({ page }) => {
    await expect(page.getByText('Entrada General')).toBeVisible();
    await expect(page.getByText('Entrada Preferent')).toBeVisible();
    await expect(page.getByText('25€')).toBeVisible();
    await expect(page.getByText('30€')).toBeVisible();
  });

  test('shows online purchase button', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Comprar Entrades Ara/i })).toBeVisible();
  });

  test('shows physical sale points', async ({ page }) => {
    await expect(page.getByText('Sant Fruitós de Bages')).toBeVisible();
    await expect(page.getByText('Manresa')).toBeVisible();
  });

  test('shows FAQ section', async ({ page }) => {
    await expect(page.getByText('Dubtes freqüents')).toBeVisible();
    await expect(page.getByText('Pla de pluja')).toBeVisible();
    await expect(page.getByText('Accessibilitat')).toBeVisible();
  });
});
