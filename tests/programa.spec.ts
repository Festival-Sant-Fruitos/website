import { test, expect } from '@playwright/test';
import { isRevealed, currentEdition } from './utils';

test.describe('Programa page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/programa');
  });

  test('renders page hero', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: /Programa Oficial/i })).toBeVisible();
  });

  test.describe('when edition is hidden', () => {
    test.skip(isRevealed, 'Only runs when the current edition is not yet revealed');

    test('shows teaser with "Pròximament"', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Pròximament' })).toBeVisible();
    });

    test('does not show concert detail sections', async ({ page }) => {
      await expect(page.locator('img[src*="/images/artists/"]')).toHaveCount(0);
    });
  });

  test.describe('when edition is revealed', () => {
    test.skip(!isRevealed, 'Only runs when the current edition is revealed');

    test('shows every concert from the edition', async ({ page }) => {
      for (const concert of currentEdition.concerts) {
        await expect(
          page.getByRole('heading', { name: concert.title, exact: false }).first()
        ).toBeVisible();
      }
    });

    test('shows a price for every concert', async ({ page }) => {
      const prices: string[] = Array.from(
        new Set(currentEdition.concerts.map((c: { price: string }) => c.price))
      );
      for (const price of prices) {
        await expect(page.getByText(price).first()).toBeVisible();
      }
    });

    test('shows at least one artist image per concert', async ({ page }) => {
      const artistImages = page.locator('img[src*="/images/artists/"]');
      await expect(artistImages.first()).toBeVisible();
      expect(await artistImages.count()).toBeGreaterThanOrEqual(currentEdition.concerts.length);
    });

    test('triptych download link is present', async ({ page }) => {
      const downloadLink = page.getByRole('link', { name: /Descarrega el tríptic/i });
      await expect(downloadLink).toBeVisible();
      await expect(downloadLink).toHaveAttribute('href', new RegExp(`triptic-${currentEdition.year}`));
    });

    test('lists the artists for each concert', async ({ page }) => {
      for (const concert of currentEdition.concerts) {
        for (const artist of concert.artists) {
          await expect(page.getByText(artist.name).first()).toBeVisible();
        }
      }
    });
  });
});
