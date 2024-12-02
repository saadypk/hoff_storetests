import { Locator, Page } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly usernameText: Locator;
    readonly header: Locator;
    readonly addToCartButton: Locator;
    readonly purchaseButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.usernameText = page.locator('[data-testid="username"]'); // Ensure correct test ID or class
        this.header = page.locator('h1');
        this.addToCartButton = page.getByTestId('add-to-cart-button'); // Make sure to replace with the actual locator
        this.purchaseButton = page.getByRole('button', { name: 'Buy' }); // Adjust locator for cart button
        
    }

    // Method to add product to the cart by ID (assuming products have a test id)
    async addToCart(productId: number) {
        await this.page.getByTestId('select-product').selectOption('1');
        await this.page.getByLabel('Amount').fill('2');
        await this.addToCartButton.click(); // Click the Add to Cart button
    }

    // Method to navigate to the cart page
    async goToCart() {
        await this.purchaseButton.click(); // Navigate to the cart
        
    }
}
