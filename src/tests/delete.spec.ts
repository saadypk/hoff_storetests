import {expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import dotenv from 'dotenv';

dotenv.config();

test('Add to cart and delete', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const password = process.env.PASSWORD;

    if (!password) throw new Error("PASSWORD environment variable is not set");

    await page.goto("http://hoff.is/login");
    await loginPage.login("Saad", password, 'consumer');

    const header = await productsPage.header.textContent()
    expect(header).toBe("Store");

    await productsPage.addToCart('2', '3');
    await productsPage.deleteProduct();
    await expect(productsPage.totalProducts).toContainText("0");
    const totalProductsValue = await productsPage.totalProducts.textContent();

    console.log(`Total products: ${totalProductsValue}`);
    

});