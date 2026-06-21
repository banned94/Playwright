import { test, expect } from '@playwright/test';
import {SauceDemoAssets as MyPage} from './data/saucedemo_assets';
import { credentials } from '../config/credential';
import { login } from './helper/login';
import dotenv from 'dotenv';
dotenv.config();

test('problem user login', async ({ page }) => {
    const saucedemo = new MyPage(page);
    await login(page, credentials.usernameProblem, credentials.password);
    //login with problem user
    // Expects the products page to be visible
    await expect(page.getByText('Products')).toBeVisible();
    // Expects the products image to be broken     
    const image = page.locator('img[src="/static/media/sl-404.168b1cce10384b857a6f.jpg"]');
    await expect(image).toHaveCount(6);
});
