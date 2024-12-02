import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can purchase a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Log in
    await page.goto("http://hoff.is/login")
    await loginPage.login('Saad', 'sup3rs3cr3t', 'consumer');

    // Add product to cart and checkout
    await productsPage.addToCart(1); // Adding product with ID 1
    await productsPage.goToCart();
    await checkoutPage.completeCheckout();

    // Verify purchase success
    await expect(page.locator('#name')).toContainText('Thank you for your purchase, Saad');
});
