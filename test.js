const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  const result = await page.evaluate(() => {
    const hero = document.querySelector('#hero');
    if (!hero) return 'No #hero found';
    
    // Get styles of first AnimatedText span
    const span = document.querySelector('.text-display');
    const spanStyles = span ? getComputedStyle(span) : null;
    
    return {
      heroHeight: hero.clientHeight,
      heroOpacity: getComputedStyle(hero).opacity,
      spanOpacity: spanStyles ? spanStyles.opacity : null,
      spanTransform: spanStyles ? spanStyles.transform : null,
      html: hero.innerHTML.substring(0, 500)
    };
  });
  
  console.log(JSON.stringify(result, null, 2));
  
  await browser.close();
})();
