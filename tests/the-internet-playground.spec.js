import { test, expect } from "@playwright/test";

test("Checkboxes", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Checkboxes" }).click();
  const firstCheckbox = page.getByRole("checkbox").first();
  const secondCheckbox = page.getByRole("checkbox").nth(1);

  await expect(firstCheckbox).not.toBeChecked();
  await expect(secondCheckbox).toBeChecked();

  await firstCheckbox.check();
  await secondCheckbox.uncheck();

  await expect(firstCheckbox).toBeChecked();
  await expect(secondCheckbox).not.toBeChecked();
});
