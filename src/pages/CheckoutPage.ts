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

    async completeCheckout(nameInput: string, addressInput: string) {
        await this.nameInput.fill(nameInput);
        await this.addressInput.fill(addressInput);
        await this.confirmPurchaseButton.click();
    }
}
