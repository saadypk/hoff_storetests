import { Locator, Page } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly header: Locator;
    readonly chooseProduct : Locator;
    readonly amountInput : Locator;
    readonly addToCartButton: Locator;
    readonly purchaseButton: Locator;
    readonly deleteButton: Locator;
    readonly totalProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('h1');
        this.chooseProduct = page.getByTestId('select-product');
        this.amountInput = page.getByLabel('Amount');
        this.addToCartButton = page.getByTestId('add-to-cart-button'); 
        this.purchaseButton = page.getByRole('button', { name: 'Buy' });
        this.deleteButton = page.getByTestId('Banana-remove-button');
        this.totalProducts = page.locator('#totalSum');
    }

    async addToCart(chooseProduct: string, amountInput: string) {
        await this.chooseProduct.selectOption(chooseProduct);
        await this.amountInput.fill(amountInput);
        await this.addToCartButton.click(); 
    }

    async deleteProduct() {
       
        await this.deleteButton.click();

    }

    async goToCart() {
        await this.purchaseButton.click();
        
    }
}
