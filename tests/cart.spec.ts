import { test, expect } from '@playwright/test';
test("guest can add a product to the cart", async ({ page }) => {
await page.goto('/');
await page.getByRole('button', { name: 'Add Clean Code Handbook to cart' }).click();
await expect(page.getByTestId('toast-success')).toHaveText('Clean Code Handbook added to cart');
await expect(page.getByRole('link', { name: 'Cart, 1 item' })).toBeVisible();
await page.goto('/cart');
await expect(page.getByTestId('cart-line-name')).toHaveText('Clean Code Handbook');
await expect(page.getByTestId('cart-subtotal')).toHaveText('₴899.00');
});