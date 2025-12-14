import { test, expect } from '@playwright/test';

test.use({
  storageState: 'tests/playwright-auth-sessions/session-john@foo.com.json',
});

test('test', async ({ page }) => {
  await page.goto('https://rainbow-reclamation.vercel.app/');
  await page.getByRole('link', { name: 'Browse Found Items' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('john@foo.com');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('changeme');
  await page.locator('form').getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).dblclick();
  await page.getByRole('textbox', { name: 'Email' }).fill('ro28@hawaii.edu');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('Purple@1918');
  await page.locator('form').getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Rainbow Reclamation' }).click();
  await page.getByRole('link', { name: 'View All Listings' }).click();
  await page.getByRole('button', { name: 'Claim Item' }).nth(1).click();
  await page.getByRole('link', { name: 'Report Item' }).click();
  await page.getByRole('textbox', { name: 'e.g., Blue backpack' }).click();
  await page.getByRole('textbox', { name: 'e.g., Blue backpack' }).fill('Hat');
  await page.getByRole('textbox', { name: 'Provide details about your' }).click();
  await page.getByRole('textbox', { name: 'Provide details about your' }).fill('Black and blue stripped pattern hat');
  await page.locator('select[name="category"]').selectOption('ACCESSORIES');
  await page.locator('select[name="building"]').selectOption('KELL');
  await page.getByRole('textbox', { name: 'e.g., Room 204, Near the' }).click();
  await page.getByRole('textbox', { name: 'e.g., Room 204, Near the' }).fill('Courtyard');
  await page.locator('input[name="date"]').fill('2025-12-12');
  await page.getByRole('textbox', { name: 'https://example.com/image.jpg' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).click();
  await page.getByRole('textbox', { name: 'Email or phone number' }).fill('Office');
  await page.getByRole('checkbox').check();
  await page.getByPlaceholder('0.00').click();
  await page.getByPlaceholder('0.00').fill('5.00');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('div:nth-child(8) > .h-100 > .bg-light > .d-flex > .w-100.btn.btn-success').click();
  await page.locator('#submission').getByRole('link', { name: 'Bounty Board' }).click();
  await page.getByRole('combobox').first().selectOption('ELECTRONICS');
  await page.getByRole('combobox').nth(1).selectOption('KELL');
  await page.getByRole('combobox').nth(1).selectOption('ALL');
  await page.getByRole('textbox', { name: 'Search items...' }).click();
  await page.getByRole('combobox').first().selectOption('ALL');
  await page.getByRole('textbox', { name: 'Search items...' }).click();
  await page.getByRole('textbox', { name: 'Search items...' }).fill('Key');
  await page.getByRole('link', { name: 'Rainbow Reclamation' }).click();
  await page.getByRole('link', { name: 'Browse Found Items' }).click();
  await page.getByRole('link', { name: 'Rainbow Reclamation' }).click();
  await page.getByRole('link', { name: 'Report Lost Item' }).first().click();
  await page.getByRole('link', { name: 'Rainbow Reclamation' }).click();
  await page.getByRole('button', { name: 'ro28@hawaii.edu' }).click();
  await page.getByRole('link', { name: 'My Dashboard' }).click();
  await page.getByRole('button', { name: 'ro28@hawaii.edu' }).click();
  await page.getByRole('link', { name: 'Browse Items' }).click();
  await page.getByRole('button', { name: 'ro28@hawaii.edu' }).click();
  await page.getByRole('link', { name: 'Change Password' }).click();
  await page.getByRole('button', { name: 'ro28@hawaii.edu' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).dblclick();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@foo.com');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('changeme');
  await page.locator('form').getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page
    .locator('div')
    .filter({ hasText: "🌈Rainbow ReclamationLoginWelcome back! Let's find what's lost.Sign in failed." })
    .click();
});
