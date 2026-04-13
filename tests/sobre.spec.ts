import { test, expect } from '@playwright/test';

test.describe('Sobre page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sobre');
  });

  test('renders page title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Nosaltres');
  });

  test('shows mission section', async ({ page }) => {
    await expect(page.getByText('La nostra missió')).toBeVisible();
  });

  test('shows values section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Els nostres valors' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Excel·lència' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Accessibilitat' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Patrimoni' })).toBeVisible();
  });

  test('shows organization info', async ({ page }) => {
    await expect(page.getByText('Associació Memorial Eduard Casajoana')).toBeVisible();
  });

  test('shows contact section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contacte' })).toBeVisible();
    await expect(page.getByText('festivalsantfruitos@gmail.com').first()).toBeVisible();
  });
});
