import {expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test('Login with Saad', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)
    
    await page.goto("http://hoff.is/login")
    
    await loginPage.login("Saad", process.env.PASSWORD as string, 'consumer');

    const header = await productsPage.header.textContent()

    expect(header).toBe("Store")

})

test('fail login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("http://hoff.is/login")
    await loginPage.login("Saad", "wrongpassword", 'consumer');
    const errorMessage = await loginPage.errorMessage.textContent()

    expect(errorMessage).toBe("Incorrect password")


})