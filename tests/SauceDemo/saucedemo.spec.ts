import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage } from './data/saucedemo_assets';
import { credentials } from './data/credential';
import { login } from './helper/login';
import dotenv from 'dotenv';
dotenv.config();

test('Checkout', async ({ page }) => {
    const saucedemo = new MyPage(page);
    await login(page, credentials.username, credentials.password);
    await expect(page.getByText('Products')).toBeVisible();
    await saucedemo.buttonAddToCart.first().click();
    await saucedemo.shoppingCartLink.click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await saucedemo.checkoutButton.click();
    await saucedemo.firstNameInput.fill('John');
    await saucedemo.lastNameInput.fill('Doe');
    await saucedemo.postalCodeInput.fill('12345');
    await saucedemo.continueButton.click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await saucedemo.finishButton.click();
    await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();
});


