import puppeteer from "puppeteer-core";

const browser = await puppeteer.connect({
    browserURL: "http://127.0.0.1:9222",
    defaultViewport: null
});

const pages = await browser.pages();

await Promise.all(pages.map(async (page) => await page.reload()));

browser.disconnect();

