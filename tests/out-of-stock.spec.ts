import { test, expect } from '@playwright/test';

test('out-of-stock button is disabled', async ({ page }) => {
  await page.goto('/products?category=electronics');
  await expect(page.getByRole('button', { name: 'Add Volt Power Bank 20000 mAh to cart' })).toBeDisabled();
});