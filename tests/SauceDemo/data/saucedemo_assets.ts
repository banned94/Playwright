import { Page, Locator } from '@playwright/test';

export class SauceDemoAssets {
  readonly page: Page;
  readonly buttonAddToCart: Locator;
  readonly buttonRemove: Locator;
  readonly cartBadge: Locator;
  readonly loginButton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly shoppingCartLink: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly backToProductsButton: Locator;
  readonly url = process.env.BASE_URL!;


  constructor(page: Page) {
    this.page = page;
    // Store buttons as locators
    this.buttonAddToCart = page.getByRole('button', { name: 'Add to cart' });
    this.buttonRemove = page.getByRole('button', { name: 'Remove' });
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]'); 
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
  }
}