import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    readonly nameInput: Locator;
    readonly addressInput: Locator;
    readonly confirmPurchaseButton: Locator;
    readonly receipt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByLabel('Name:');;
        this.addressInput = page.getByLabel('Address:')
        this.confirmPurchaseButton = page.getByRole('button', { name: 'Confirm Purchase' });
        this.receipt = page.getByLabel('#name');


    }

    async completeCheckout() {
        await this.page.getByLabel('Name:').fill('Saad');
        await this.page.getByLabel('Address:').fill('Gata 1');
        await this.confirmPurchaseButton.click();
    }
}
