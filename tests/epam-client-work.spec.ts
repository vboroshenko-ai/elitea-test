import { test, expect } from '@playwright/test';

test('EPAM Services -> Explore Our Client Work shows Client Work text', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).hover();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
