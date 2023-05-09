import puppeteer from "puppeteer";

export class ObtemInfoMix {
  async execute(url: string) {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const selector = "a#video-title";
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    let elements = await page.$$eval(selector, (e) =>
      e.map((a) => ({
        url: a.href,
        titulo: a.innerText,
      }))
    );
    await browser.close();
    return elements;
  }
}
