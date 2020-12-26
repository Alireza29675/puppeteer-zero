import puppeteer from 'puppeteer-core';
// @ts-ignore
import locateChrome from 'locate-chrome';

const originalPuppeteerLaunch = puppeteer.launch;

puppeteer.launch = async function launch(options?: puppeteer.LaunchOptions) {
  const executablePath = await locateChrome();

  return originalPuppeteerLaunch({
    executablePath,
    ...options,
  });
};

export default puppeteer;
