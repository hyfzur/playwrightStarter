import {test, expect} from '@playwright/test';
import {SauceDemoHomePage} from '../page-objects/sauce-demo-home';
import {SauceDemoDashboardPage} from '../page-objects/sauce-demo-dashboard';
import {ShoppingCartPage} from '../page-objects/shopping-cart';

test('selected items are shown in the cart', async ({page}) => {
	const homePage = new SauceDemoHomePage(page);
	const dashboardPage = new SauceDemoDashboardPage(page);
	const shoppingCartPage = new ShoppingCartPage(page);

	await homePage.goto();
	await test.step('Log in with valid credentials', async () => {
		await homePage.login('standard_user', 'secret_sauce');
	});

	// Capture the expected item names and subtotal while adding the requested items.
	const selectedItems = await test.step('Add three products to the cart', async () => {
		return dashboardPage.addItemsToCart(3);
	});
	await test.step('Open the shopping cart', async () => {
		await dashboardPage.gotoCart();
	});

	// Read the cart independently, then validate both names and subtotal.
	const cartItemNames = await test.step('Read the products shown in the cart', async () => {
		return shoppingCartPage.getCartItemNames();
	});
	const cartTotalCost = await test.step('Read the cart subtotal', async () => {
		return shoppingCartPage.getCartTotalCost();
	});

	console.log(`Expected item names: ${selectedItems.names.join(', ')}.`);
	console.log(`Expected subtotal: $${selectedItems.totalCost.toFixed(2)}.`);
	console.log(`Comparing cart subtotal $${cartTotalCost.toFixed(2)} with expected subtotal.`);

	await test.step('Verify the selected products are shown in the cart', async () => {
		expect(cartItemNames, 'Cart product names').toEqual(selectedItems.names);
	});
	await test.step('Verify the cart subtotal matches the selected products', async () => {
		expect(cartTotalCost, 'Cart subtotal').toBe(selectedItems.totalCost);
	});
});

