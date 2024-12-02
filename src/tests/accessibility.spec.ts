import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


test.describe('homepage', () => { // 2
  test.skip('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    
    await page.goto("http://hoff.is/login")
    await loginPage.login("Saad", "sup3rs3cr3t", 'consumer');
    const header = await productsPage.header.textContent()
    expect(header).toBe("Store")

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});