# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.ts >> selected items are shown in the cart
- Location: tests/purchase.spec.ts:6:5

# Error details

```
RangeError: Item count must be an integer between 1 and 0.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [aria-hidden] [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - button [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e17] [cursor=pointer]: Logout
                - button [ref=e18] [cursor=pointer]: Reset App State
              - button [ref=e20] [cursor=pointer]: Close Menu
        - generic [ref=e22]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Backpack" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Backpack
              - generic [ref=e44]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e45]:
              - generic [ref=e46]: $29.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bike Light" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bike Light
              - generic [ref=e56]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e57]:
              - generic [ref=e58]: $9.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Bolt T-Shirt
              - generic [ref=e68]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e69]:
              - generic [ref=e70]: $15.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Fleece Jacket
              - generic [ref=e80]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e81]:
              - generic [ref=e82]: $49.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Sauce Labs Onesie" [ref=e86] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Sauce Labs Onesie" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Sauce Labs Onesie
              - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e93]:
              - generic [ref=e94]: $7.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e98] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e104]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e105]:
              - generic [ref=e106]: $15.99
              - button "Add to cart" [ref=e107] [cursor=pointer]
  - contentinfo [ref=e108]:
    - list [ref=e109]:
      - listitem [ref=e110]:
        - link "X" [ref=e111] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e112]:
        - link "Facebook" [ref=e113] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e114]:
        - link "LinkedIn" [ref=e115] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e116]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import {type Locator, type Page} from '@playwright/test';
  2  | 
  3  | export type SelectedItems = {
  4  |     names: string[];
  5  |     totalCost: number;
  6  | };
  7  | 
  8  | export class SauceDemoDashboardPage {
  9  |     readonly page: Page;
  10 |     readonly title: Locator;
  11 |     readonly hamburgerMenu: Locator;
  12 |     readonly inventoryList: Locator;
  13 |     readonly inventoryItems: Locator;
  14 |     readonly addToCart: Locator;
  15 |     readonly logoutButton: Locator;
  16 |     readonly cartTrolley: Locator;
  17 | 
  18 |     constructor(page: Page) {
  19 |         this.page = page;
  20 |         this.title = page.locator("#header_container > div.primary_header > div.header_label > div");
  21 |         this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
  22 |         this.inventoryList = page.getByRole('main');
  23 |         this.inventoryItems = page.locator('.inventory_item');
  24 |         this.addToCart = page.getByRole('button', { name: 'Add to cart' });
  25 |         this.logoutButton = page.getByRole('button', { name: 'Logout' });
  26 |         this.cartTrolley = page.locator('#shopping_cart_container > a');
  27 |     }
  28 | 
  29 |     async addFirstItemToCart() {
  30 |         console.log('Adding the first inventory item to the cart.');
  31 |         await this.inventoryItems
  32 |             .first()
  33 |             .getByRole('button', { name: 'Add to cart' })
  34 |             .click();
  35 |     }
  36 | 
  37 |     async addItemsToCart(count: number): Promise<SelectedItems> {
  38 |         const availableItemCount = await this.inventoryItems.count();
  39 | 
  40 |         console.log(`Selecting ${count} item(s) from ${availableItemCount} available item(s).`);
  41 | 
  42 |         // Reject invalid requests before interacting with the inventory.
  43 |         if (!Number.isInteger(count) || count < 1 || count > availableItemCount) {
> 44 |             throw new RangeError(`Item count must be an integer between 1 and ${availableItemCount}.`);
     |                   ^ RangeError: Item count must be an integer between 1 and 0.
  45 |         }
  46 | 
  47 |         const selectedItemNames: string[] = [];
  48 |         let selectedItemsTotal = 0;
  49 | 
  50 |         // Select the first requested items and record their names and prices.
  51 |         for (let index = 0; index < count; index++) {
  52 |             const item = this.inventoryItems.nth(index);
  53 |             const itemName = await item.locator('.inventory_item_name').innerText();
  54 |             const itemPrice = await item.locator('.inventory_item_price').innerText();
  55 | 
  56 |             await item.getByRole('button', { name: 'Add to cart' }).click();
  57 |             selectedItemNames.push(itemName.trim());
  58 |             selectedItemsTotal += Number(itemPrice.replace('$', '').trim());
  59 |             console.log(`Added item ${index + 1}: ${itemName.trim()} (${itemPrice.trim()}).`);
  60 |         }
  61 | 
  62 |         console.log(`Selected items subtotal: $${selectedItemsTotal.toFixed(2)}.`);
  63 | 
  64 |         return {
  65 |             names: selectedItemNames,
  66 |             totalCost: Number(selectedItemsTotal.toFixed(2)),
  67 |         };
  68 |     }
  69 | 
  70 |     async gotoCart() {
  71 |         // Open the cart after all requested items have been added.
  72 |         console.log('Opening the shopping cart.');
  73 |         await this.cartTrolley.click();
  74 |     }
  75 | }
  76 | 
```