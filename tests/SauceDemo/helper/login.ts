import { SauceDemoAssets as MyPage } from '../data/saucedemo_assets';
import { credentials } from '../data/credential';

export async function login(page : any, username: string, password: string) {
 const saucedemo = new MyPage(page);
 await page.goto(saucedemo.url);  
 await saucedemo.usernameField.fill(username);
 await saucedemo.passwordField.fill(password);
 await saucedemo.loginButton.click();
}