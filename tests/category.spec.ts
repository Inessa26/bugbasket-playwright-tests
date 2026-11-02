import { test, expect } from '@playwright/test';

test('category filter shows only books', async ({ page }) => {
  await page.goto('/products');
  await page.getByLabel('Category').selectOption('books');
  await expect(page).toHaveURL(/category=books/);
  await expect(page.getByTestId('catalog-result-count')).toHaveText('8 products');
});