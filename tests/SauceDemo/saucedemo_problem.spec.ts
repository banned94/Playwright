import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage} from './data/saucedemo_assets';
import { credentials } from '../config/credential';
import { login } from './helper/login';
import dotenv from 'dotenv';
dotenv.config();

test('problem user login', async ({ page }) => {
    await login(page, credentials.usernameProblem, credentials.password);
    //login with problem user
    // Expects the products page to be visible
    await expect(page.getByText('Products')).toBeVisible();
    // Expects the products image to be broken     
    await expect(page.locator('img[src*="sl-404"]')).toHaveCount(6);
});

test('locked out user login', async ({ page }) => {
    await login(page, credentials.usernameLocked, credentials.password);
    // Expects error to be visible      
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test('performance glitch user login', async ({ page }) => {
    await login(page, credentials.usernamePerformance, credentials.password);   
    // Expects the products page to be visible
    await expect(page.getByText('Products')).toBeVisible();
});

test('visual user login', async ({ page }) => {
    await login(page, credentials.usernameVisual, credentials.password);
    // Expects the products page to be visible
    await expect(page.getByText('Products')).toBeVisible();
    // Expects the products image to be broken     
    await expect(page.locator('img[src*="sl-404"]')).toHaveCount(1);
});