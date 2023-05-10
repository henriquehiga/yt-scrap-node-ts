import puppeteer from "puppeteer";

export class ObtemInfoMix {
  async execute(url: string) {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const videoPlaylistSelector = "a#video-title";
    const playlistTitleSelector = "yt-formatted-string#text";
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(videoPlaylistSelector);
    let playListTitle = await page.$eval(
      playlistTitleSelector,
      (e) => e.textContent
    );
    let elements = await page.$$eval(videoPlaylistSelector, (e) =>
      e.map((a) => ({
        url: a.href,
        titulo: a.textContent,
      }))
    );
    await browser.close();
    return {
      titulo_playlist: playListTitle,
      lista: elements,
    };
  }
}
