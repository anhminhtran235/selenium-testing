const express = require('express');
const app = express();

const getSeleniumDriverForHeroku = () => {
  const webdriver = require('selenium-webdriver');
  require('chromedriver');
  const chrome = require('selenium-webdriver/chrome');

  let options = new chrome.Options();
  options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
  let serviceBuilder = new chrome.ServiceBuilder(
    process.env.CHROME_DRIVER_PATH
  );

  options.addArguments('--headless'); // This is to disable UI
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');

  return new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();
};

app.get('/selenium', async (req, res) => {
  const driver = getSeleniumDriverForHeroku();

  await driver.get('http://www.google.com');
  res.send(await driver.getTitle());
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
