import { test, expect } from '@playwright/test';
test("no matches shows the empty state", async ({ page }) => {
await page.goto('/products?q=zzzzqqq');
await expect(page.getByTestId("catalog-result-count")).toHaveText('0 products');
await expect(page.getByTestId('catalog-empty-state')).toBeVisible();
});