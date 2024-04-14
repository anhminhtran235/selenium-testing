const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  await driver.get(
    'https://clients.mindbodyonline.com/ASP/su1.asp?studioid=184154&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=4%2f12%2f2024&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1'
  );
  // Wait until the input fields are visible
  const emailInput = await driver.wait(
    until.elementLocated(By.id('su1UserName')),
    10000
  );
  const passwordInput = await driver.wait(
    until.elementLocated(By.id('su1Password')),
    10000
  );
  const signInButton = await driver.wait(
    until.elementLocated(By.id('btnSu1Login')),
    10000
  );

  // Type the email and password
  await emailInput.sendKeys('kaathykhong@gmail.com');
  await passwordInput.sendKeys('H3q3w2H$A9NNz!');

  // Click on the sign in button
  await signInButton.click();
})();
