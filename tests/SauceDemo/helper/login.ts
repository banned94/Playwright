import { SauceDemoAssets as MyPage } from '../data/saucedemo_assets';
import { credentials } from '../../config/credential';

export async function login(page : any, username: string, password: string) {
 const saucedemo = new MyPage(page);
 await page.goto(saucedemo.url);  
 await saucedemo.UsernameField.fill(username);
 await saucedemo.PasswordField.fill(password);
 await saucedemo.LoginButton.click();
}