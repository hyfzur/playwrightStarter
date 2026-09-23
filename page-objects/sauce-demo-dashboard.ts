import {type Locator, type Page} from '@playwright/test';

export type SelectedItems = {
    names: string[];
    totalCost: number;
};

export class SauceDemoDashboardPage {
    readonly page: Page;
    readonly title: Locator;
    readonly hamburgerMenu: Locator;
    readonly inventoryList: Locator;
    readonly inventoryItems: Locator;
    readonly addToCart: Locator;
    readonly logoutButton: Locator;
    readonly cartTrolley: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator("#header_container > div.primary_header > div.header_label > div");
        this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.inventoryList = page.getByRole('main');
        this.inventoryItems = page.locator('.inventory_item');
        this.addToCart = page.getByRole('button', { name: 'Add to cart' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.cartTrolley = page.locator('#shopping_cart_container > a');
    }

    async addFirstItemToCart() {
        console.log('Adding the first inventory item to the cart.');
        await this.inventoryItems
            .first()
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }

    async addItemsToCart(count: number): Promise<SelectedItems> {
        const availableItemCount = await this.inventoryItems.count();

        console.log(`Selecting ${count} item(s) from ${availableItemCount} available item(s).`);

        // Reject invalid requests before interacting with the inventory.
        if (!Number.isInteger(count) || count < 1 || count > availableItemCount) {
            throw new RangeError(`Item count must be an integer between 1 and ${availableItemCount}.`);
        }

        const selectedItemNames: string[] = [];
        let selectedItemsTotal = 0;

        // Select the first requested items and record their names and prices.
        for (let index = 0; index < count; index++) {
            const item = this.inventoryItems.nth(index);
            const itemName = await item.locator('.inventory_item_name').innerText();
            const itemPrice = await item.locator('.inventory_item_price').innerText();

            await item.getByRole('button', { name: 'Add to cart' }).click();
            selectedItemNames.push(itemName.trim());
            selectedItemsTotal += Number(itemPrice.replace('$', '').trim());
            console.log(`Added item ${index + 1}: ${itemName.trim()} (${itemPrice.trim()}).`);
        }

        console.log(`Selected items subtotal: $${selectedItemsTotal.toFixed(2)}.`);

        return {
            names: selectedItemNames,
            totalCost: Number(selectedItemsTotal.toFixed(2)),
        };
    }

    async gotoCart() {
        // Open the cart after all requested items have been added.
        console.log('Opening the shopping cart.');
        await this.cartTrolley.click();
    }
}
