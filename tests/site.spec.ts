import { expect, test } from "@playwright/test";

const routes = ["/", "/programs", "/programs/mini-science-centre", "/programs/tinker-lab", "/programs/science-lab", "/programs/diy-stem-kits", "/programs/astronomy-lab", "/programs/building-as-learning-aid", "/programs/teacher-training", "/programs/employee-engagement", "/programs/digital-learning", "/impact", "/presence", "/about", "/contact", "/resources", "/resources/case-studies", "/resources/knowledge", "/resources/faqs", "/privacy", "/terms", "/accessibility"];

test("all routes render one H1 without horizontal overflow", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1"), `${route} H1`).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `${route} overflow`).toBe(false);
  }
});

test("mobile navigation closes with Escape and restores focus", async ({ page }) => {
  for (const width of [360, 390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open navigation menu" });
    await trigger.click();
    await expect(page.getByRole("dialog", { name: "Navigation menu" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Partner with us" }).last()).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Navigation menu" })).not.toBeVisible();
    await expect(trigger).toBeFocused();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow, `${width}px navigation overflow`).toBe(false);
  }
});

test("partnership pathways expose three clear starting points", async ({ page }) => {
  await page.goto("/");
  const section = page.getByRole("region", { name: "Start with your partnership context." });
  await expect(section.getByRole("heading", { level: 3 })).toHaveCount(3);
  await expect(section.getByRole("link", { name: "Plan a CSR partnership" })).toBeVisible();
  await expect(section.getByRole("link", { name: "Explore school programs" })).toBeVisible();
  await expect(section.getByRole("link", { name: "Discuss implementation" })).toBeVisible();
});

test("program filter works", async ({ page }) => {
  await page.goto("/programs");
  await page.getByRole("button", { name: "Teacher development" }).click();
  await expect(page.getByText("Showing 1 program")).toBeVisible();
  await expect(page.locator(".program-card")).toHaveCount(1);
});

test("testimonial story slider supports manual and keyboard navigation", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const slider = page.getByRole("region", { name: "Voices from learning spaces" });
  const status = slider.getByRole("status");

  await expect(status).toHaveText("Showing story 1 of 3");
  await slider.getByRole("button", { name: "Show next story" }).click();
  await expect(status).toHaveText("Showing story 2 of 3");

  await slider.focus();
  await page.keyboard.press("ArrowRight");
  await expect(status).toHaveText("Showing story 3 of 3");

  await slider.getByRole("button", { name: "Show story 1" }).click();
  await expect(status).toHaveText("Showing story 1 of 3");
});

test("contact validation and local success do not navigate", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.locator(".error-summary")).toBeFocused();
  await page.getByLabel(/Full name/).fill("Test User");
  await page.getByLabel(/Work email/).fill("test@example.org");
  await page.getByLabel(/Organization/).fill("Test Organization");
  await page.getByLabel(/Partnership interest/).selectOption("CSR partnership");
  await page.getByLabel(/How can we help/).fill("Local test enquiry");
  await page.getByLabel(/I agree/).check();
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByRole("status")).toContainText("captured locally");
  await expect(page).toHaveURL(/\/contact$/);
});

test("capture visual review set", async ({ page }, testInfo) => {
  const pages = [["home","/"],["programs","/programs"],["mini-science-centre","/programs/mini-science-centre"],["impact","/impact"],["presence","/presence"],["about","/about"],["contact","/contact"]] as const;
  for (const [name, route] of pages) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await page.screenshot({ path: testInfo.outputPath(`${name}.png`), fullPage: false });
  }
});
