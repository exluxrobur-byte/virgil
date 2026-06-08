const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Scroll down by 1500px to see the horizontal section
  await page.evaluate(() => {
    window.scrollTo(0, 1500);
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'debug_scroll.png' });
  
  // Get text content of huge elements
  const h1s = await page.$$eval('.text-display', els => els.map(e => ({
    text: e.innerText,
    width: e.offsetWidth,
    height: e.offsetHeight,
    fontSize: window.getComputedStyle(e).fontSize
  })));
  
  console.log('Display texts:', JSON.stringify(h1s, null, 2));
  
  await browser.close();
})();
