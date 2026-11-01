import { test, expect } from '@playwright/test';
test("search finds the desk lamp", async ({ page }) => {
await page.goto('/');
await page.getByRole('searchbox', { name: 'Search products' }).fill('lamp');
await page.getByRole('searchbox', { name: 'Search products' }).press('Enter');
await expect(page).toHaveURL(/q=lamp/);
await expect(page.getByTestId("catalog-result-count")).toHaveText('1 product');
 await expect(page.getByTestId('product-card-name')).toHaveText("Aurora Desk Lamp");
});