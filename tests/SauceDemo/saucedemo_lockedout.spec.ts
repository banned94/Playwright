import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage} from './data/saucedemo_assets';
import { credentials } from '../config/credential';
import { login } from './helper/login';
import dotenv from 'dotenv';
dotenv.config();


test('locked out user login', async ({ page }) => {
    const saucedemo = new MyPage(page);
    await login(page, credentials.usernameLocked, credentials.password);
    // Expects error to be visible      
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});