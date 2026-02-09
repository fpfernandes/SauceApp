const {remote} = require ('webdriverio') 
const assert = require('assert')

async function main () {
  const caps = {
  "platformName": "Android",
  "appium:platformVersion": "13.0",
  "appium:deviceName": "emulator5554",
  "appium:deviceOrientation": "portrait",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
  "appium:automationName": "UiAutomator2",
  "appium:ensureWebviewsHavePages": true,
  "appium:nativeWebScreenshot": true,
  "appium:newCommandTimeout": 3600,
  "appium:connectHardwareKeyboard": true,
  "unhandledPromptBehavior": "ignore"
}
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });

  // "Products" initial page title
  const initial_page = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
  let title = await initial_page.getText()
  await assert.strictEqual(title, "Products");

  // Click on the first backpack
  const el1 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(3)")
  await el1.click();

  // Check the first backback product name
  const product_name = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
  let title1 = await product_name.getText()
  await assert.strictEqual(title1, "Sauce Labs Backpack (red)");

  // Check the first backpack product price
  const product_price = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV")
  let price = await product_price.getText()
  await assert.strictEqual(price, "$ 29.99");

  // Swipe up from the bottom 
    await driver.action('pointer')
    .move({ duration: 0, x: 605, y: 1858 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 626, y: 1102 })
    .up({ button: 0 })
    .perform();

  // Wait and click on Add to cart button
  await driver.pause(500);
  const el5 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartBt")
  await el5.waitForDisplayed({ timeout: 5000 });
  await el5.click()
  await driver.pause(1000);

  // Click on menu
  const menu = await driver.$("id:com.saucelabs.mydemoapp.android:id/menuIV")
  await menu.click();

  // Select and click "Catalog" on menu
  const catalog = await driver.$("-android uiautomator:new UiSelector().text(\"Catalog\")");
  await catalog.click();

  // Back to inicial page
  await assert.strictEqual(title, "Products");

  //  Swipe up to see more products
  await driver.action('pointer')
  .move({ duration: 0, x: 478, y: 1971 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 518, y: 475 })
  .up({ button: 0 })
  .perform();

  // Click on the second backpack
  const el2 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(1)")
  await el2.click();

  // Check the second backback product name
  const product_name2 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
  let title2_product = await product_name2.getText()
  await assert.strictEqual(title2_product, "Sauce Labs Backpack (yellow)");

  // Check the second backpack product price
  const product_price2 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV")
  let price2 = await product_price2.getText()
  await assert.strictEqual(price2, "$ 29.99");

  // Swipe up from the bottom 
  await driver.action('pointer')
  .move({ duration: 0, x: 605, y: 1858 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 626, y: 1102 })
  .up({ button: 0 })
  .perform();

  // Wait and click on Add to cart button
  await driver.pause(500);
  const el5_second = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartBt")
  await el5_second.waitForDisplayed({ timeout: 5000 });
  await el5_second.click();
  await driver.pause(1000);

  // Verify cart icon quantity
  const cart_icon = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartTV")
  let cart_quant = await cart_icon.getText()
  await assert.strictEqual(cart_quant, "2");

  // Click on cart icon
  const el7 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartIV")
  await el7.click();

  // Title of the cart page 
  const cart_page = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
  let title2 = await cart_page.getText()
  await assert.strictEqual(title2, "My Cart");

  // first product in the cart
  const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (red)\")")
  let first_title = await el14.getText()
  await assert.strictEqual(first_title, "Sauce Labs Backpack (red)");

  // Price of the first product in the cart
  const el15 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(0)")
  let first_price = await el15.getText()
  await assert.strictEqual(first_price, "$ 29.99");

  // Quantity of the first product in the cart
  const el16 = await driver.$("id:com.saucelabs.mydemoapp.android:id/noTV")
  let first_qtt = await el16.getText()
  await assert.strictEqual(first_qtt, "1");

  // Second product in the cart
  const el17 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (yellow)\")");
  let second_title = await el17.getText()
  await assert.strictEqual(second_title, "Sauce Labs Backpack (yellow)");

  // Price of the second product in the cart
  const el18 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(1)");
  let second_price = await el18.getText()
  await assert.strictEqual(second_price, "$ 29.99");

  // Swipe up from the bottom 
  await driver.action('pointer')
    .move({ duration: 0, x: 669, y: 1287 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 649, y: 724 })
    .up({ button: 0 })
    .perform();

  // Quantity of the second product in the cart  
  const el19 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/noTV\").instance(1)")
  let second_qtt = await el19.getText()
  await assert.strictEqual(second_qtt, "1");

  // total number of items in the cart
  const el20 = await driver.$("id:com.saucelabs.mydemoapp.android:id/itemsTV")
  let total_qtt = await el20.getText()
  await assert.strictEqual(total_qtt, "2 Items");

  // total price of the items in the cart
  const el21 = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalPriceTV")
  let total_price = await el21.getText()
  await assert.strictEqual(total_price, "$ 59.98");

  // Finish session
  await driver.deleteSession();

}

main().catch(console.log);