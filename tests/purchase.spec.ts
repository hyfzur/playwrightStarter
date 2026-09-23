import {test, expect} from '@playwright/test';
import {SauceDemoHomePage} from '../page-objects/sauce-demo-home';
import {SauceDemoDashboardPage} from '../page-objects/sauce-demo-dashboard';
import {ShoppingCartPage} from '../page-objects/shopping-cart';

test('selected items are shown in the cart', async ({page}) => {
	const homePage = new SauceDemoHomePage(page);
	const dashboardPage = new SauceDemoDashboardPage(page);
	const shoppingCartPage = new ShoppingCartPage(page);

	await homePage.goto();
	await homePage.login('standard_user', 'secret_sauce');

	// Capture the expected item names and subtotal while adding the requested items.
	const selectedItems = await dashboardPage.addItemsToCart(3);
	await dashboardPage.gotoCart();

	// Read the cart independently, then validate both names and subtotal.
	const cartItemNames = await shoppingCartPage.getCartItemNames();
	const cartTotalCost = await shoppingCartPage.getCartTotalCost();

	console.log(`Expected item names: ${selectedItems.names.join(', ')}.`);
	console.log(`Expected subtotal: $${selectedItems.totalCost.toFixed(2)}.`);
	console.log(`Comparing cart subtotal $${cartTotalCost.toFixed(2)} with expected subtotal.`);

	expect(cartItemNames).toEqual(selectedItems.names);
	expect(cartTotalCost).toBe(selectedItems.totalCost);
});

