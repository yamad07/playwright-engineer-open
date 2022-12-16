import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ispec.studio/');
  await page.getByRole('link', { name: '強み' }).click();
  await page.getByRole('link', { name: '特徴' }).click();
  await page.getByText('強み特徴事業開発の流れお悩み例支援実績資料ダウンロード').click();
  await page.getByRole('link', { name: '事業開発の流れ' }).click();
  await page.getByRole('link', { name: '支援実績' }).click();
});
