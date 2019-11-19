const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
	  headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://debaudiniere-immobilier.fr/');

  await clickOnElement(page, 'a[href="#extranet"]');
  await typeOnElement(page, 'input[type="text"][name="login"]', 'TATA');
  await typeOnElement(page, 'input[type="password"][name="mdp"]', 'YOLO');
  await clickOnElement(page, 'input[type="submit"]');

  await wait();

  // await browser.close();
})();


const wait = async (timeInSecond = 30) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeInSecond * 1000);
	})
}

const clickOnElement = async (page, selector) => {
	const element = await getElement(page, selector);

	await element.click();
}

const typeOnElement = async (page, selector, value) => {
	const element = await getElement(page, selector);

	await element.type(value);
}

const getElement = async (page, selector) => {
  await page.waitFor(selector)

  return await page.$(selector);
}
