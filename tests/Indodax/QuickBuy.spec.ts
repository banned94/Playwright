import { test, expect } from '@playwright/test';
const url = 'https://indodax.com/quick_buy';

test('Verify amount is shown correctly', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'Coba Sekarang' }).click();
  await page.getByRole('button', { name: 'Lewati' }).click();
  await page.getByRole('button', { name: '100.000' }).click();
  const amountshow = page.getByRole('textbox', { name: 'Nominal Pembelian' });
  await expect(amountshow).toBeVisible();
  await expect(amountshow).toBeDisabled();
  await expect(amountshow).toHaveValue('100.000');
  await page.getByRole('button', { name: '250.000' }).click();
  await expect(amountshow).toHaveValue('250.000');
  await page.getByRole('button', { name: '500.000' }).click();
  await expect(amountshow).toHaveValue('500.000');
  await page.getByRole('button', { name: '1.000.000' }).click();
  await expect(amountshow).toHaveValue('1.000.000');  
});