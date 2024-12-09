import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables


test('User can purchase a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);
    const password = process.env.PASSWORD;

    if (!password) throw new Error("PASSWORD environment variable is not set");


    // Log in
    await page.goto("http://hoff.is/login");
    await loginPage.login('Saad', password, 'consumer');

    // Add product to cart and checkout
    await productsPage.addToCart('1', '2'); 
    await productsPage.goToCart();
    await checkoutPage.completeCheckout('Saad', 'Gatan 1');

    // Verify purchase success
    await expect(page.locator('#name')).toContainText('Thank you for your purchase, Saad');
});
