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
          - button "View details for Sauce Labs Backpack" [ref=e38]:
            - img "Sauce Labs Backpack"
          - generic [ref=e39]:
            - generic [ref=e40]:
              - button "View details for Sauce Labs Backpack" [ref=e41]:
                - generic [ref=e42]: Sauce Labs Backpack
              - generic [ref=e43]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e44]:
              - generic [ref=e45]: $29.99
              - button "Add to cart" [ref=e46] [cursor=pointer]
        - generic [ref=e47]:
          - button "View details for Sauce Labs Bike Light" [ref=e49]:
            - img "Sauce Labs Bike Light"
          - generic [ref=e50]:
            - generic [ref=e51]:
              - button "View details for Sauce Labs Bike Light" [ref=e52]:
                - generic [ref=e53]: Sauce Labs Bike Light
              - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e55]:
              - generic [ref=e56]: $9.99
              - button "Add to cart" [ref=e57] [cursor=pointer]
        - generic [ref=e58]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e60]:
            - img "Sauce Labs Bolt T-Shirt"
          - generic [ref=e61]:
            - generic [ref=e62]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e63]:
                - generic [ref=e64]: Sauce Labs Bolt T-Shirt
              - generic [ref=e65]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e66]:
              - generic [ref=e67]: $15.99
              - button "Add to cart" [ref=e68] [cursor=pointer]
        - generic [ref=e69]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e71]:
            - img "Sauce Labs Fleece Jacket"
          - generic [ref=e72]:
            - generic [ref=e73]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e74]:
                - generic [ref=e75]: Sauce Labs Fleece Jacket
              - generic [ref=e76]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e77]:
              - generic [ref=e78]: $49.99
              - button "Add to cart" [ref=e79] [cursor=pointer]
        - generic [ref=e80]:
          - button "View details for Sauce Labs Onesie" [ref=e82]:
            - img "Sauce Labs Onesie"
          - generic [ref=e83]:
            - generic [ref=e84]:
              - button "View details for Sauce Labs Onesie" [ref=e85]:
                - generic [ref=e86]: Sauce Labs Onesie
              - generic [ref=e87]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e88]:
              - generic [ref=e89]: $7.99
              - button "Add to cart" [ref=e90] [cursor=pointer]
        - generic [ref=e91]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e93]:
            - img "Test.allTheThings() T-Shirt (Red)"
          - generic [ref=e94]:
            - generic [ref=e95]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e96]:
                - generic [ref=e97]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e98]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e99]:
              - generic [ref=e100]: $15.99
              - button "Add to cart" [ref=e101] [cursor=pointer]
  - contentinfo [ref=e102]:
    - list [ref=e103]:
      - listitem [ref=e104]:
        - link "X" [ref=e105]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e106]:
        - link "Facebook" [ref=e107]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e108]:
        - link "LinkedIn" [ref=e109]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e110]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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