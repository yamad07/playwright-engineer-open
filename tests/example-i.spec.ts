import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ispec.studio/');
  await page.getByRole('banner').getByRole('link', { name: '資料ダウンロード' }).click();
  await page.locator('#download').getByPlaceholder('会社名 *').fill("株式会社ispec");
  await page.locator('#download').getByPlaceholder('メールアドレス *').fill("test@ispec.tech");
  await page.locator('#download').getByPlaceholder('お名前 *').fill("エンジニアオープン");
  await page.locator('#download').getByPlaceholder('電話番号 *').fill("00020001000");
  await page.locator('#download').getByLabel('ご提供いただく個人情報のお取り扱いに同意する*').check();
  await page.screenshot({ path: 'playwright-report/example-i.png', fullPage: true });

  await page.getByRole('button', { name: 'ダウンロードする ' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: '資料ダウンロードページへ ' }).click()
  ]);
});
