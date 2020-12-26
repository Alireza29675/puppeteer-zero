import puppeteer from 'puppeteer-core';
import locateChrome from 'locate-chrome';

const originalPuppeteerLaunch = puppeteer.launch;

puppeteer.launch = function launch(options?: puppeteer.LaunchOptions) {
  return originalPuppeteerLaunch({
    executablePath: '',
    ...options,
  });
};

export default puppeteer;
