import { launch } from '../../src';

(async () => {
  const browser = await launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
})();
