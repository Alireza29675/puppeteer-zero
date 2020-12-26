import puppeteer from 'puppeteer-core';
// @ts-ignore
import locateChrome from 'locate-chrome';

export async function launch(options: puppeteer.LaunchOptions = {}) {
  const executablePath = await locateChrome();

  return await puppeteer.launch({
    executablePath,
    ...options,
  });
}

export default puppeteer;
