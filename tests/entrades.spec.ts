import { test, expect } from '@playwright/test';

test.describe('Entrades page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/entrades');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Entrades');
  });

  test('shows per-concert pricing', async ({ page }) => {
    await expect(page.getByText('De Barcelona a Buenos Aires')).toBeVisible();
    await expect(page.getByText('Pianant')).toBeVisible();
    await expect(page.getByText('Haydn i els Mozart')).toBeVisible();
    await expect(page.getByText('25€').first()).toBeVisible();
    await expect(page.getByText('30€').first()).toBeVisible();
  });

  test('shows online purchase button', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Comprar Entrades Ara/i })).toBeVisible();
  });

  test('shows physical sale points', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sant Fruitós de Bages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Manresa' })).toBeVisible();
  });

  test('shows FAQ section', async ({ page }) => {
    await expect(page.getByText('Dubtes freqüents')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pla de pluja' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Accessibilitat' })).toBeVisible();
  });
});
