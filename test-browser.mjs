import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('CONSOLE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText));

    console.log('Navigating to http://localhost:8080/industries/food-boxes ...');

    // We expect the Vite server to be running on 8080 or 5173
    try {
        await page.goto('http://localhost:8080/industries/food-boxes', { waitUntil: 'networkidle2', timeout: 10000 });
    } catch (e) {
        console.log("Failed on 8080. Trying 5173...");
        try {
            await page.goto('http://localhost:5173/industries/food-boxes', { waitUntil: 'networkidle2', timeout: 10000 });
        } catch (e2) {
            console.log("Failed on 5173 too.");
        }
    }

    await new Promise(r => setTimeout(r, 2000));
    await browser.close();
})();
