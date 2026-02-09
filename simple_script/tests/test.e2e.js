
// "Products" initial page title
const el1 = await driver.$("accessibility id:title");
id com.saucelabs.mydemoapp.android:id/productTV
await el1.click();

--------------------------------------------------------------------------
// Red backpack 
const el2 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(3)");
await el2.click();
// Red backpack title
const el3 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
await el3.click();
// Red backpack price
const el4 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
await el4.click();

await driver.action('pointer')
  .move({ duration: 0, x: 649, y: 1906 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 546, y: 1375 })
  .up({ button: 0 })
  .perform();

// Click on Add to cart button
const el5 = await driver.$("accessibility id:Tap to add product to cart");
//id com.saucelabs.mydemoapp.android:id/cartBt
//class name 	android.widget.Button
await el5.click();

// View menu
const el6 = await driver.$("accessibility id:View menu");
//id com.saucelabs.mydemoapp.android:id/menuIV
await el6.click();

// Select Catalog from menu
const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"Catalog\")");
await el7.click();

// "Products" initial page title again
const el1 = await driver.$("accessibility id:title");
//id com.saucelabs.mydemoapp.android:id/productTV
await el1.click();

// move pointer to see more products
await driver.action('pointer')
  .move({ duration: 0, x: 478, y: 1971 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 518, y: 475 })
  .up({ button: 0 })
  .perform();

// Yellow backpack
const el8 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/productIV\").instance(1)");
await el8.click();

// Yellow backpack title
const el9 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
await el9.click();

// Yellow backpack price
const el10 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
await el10.click();

await driver.action('pointer')
  .move({ duration: 0, x: 480, y: 1919 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 536, y: 1109 })
  .up({ button: 0 })
  .perform();

-----------------------------------------------------------------

// Click on Add to cart button
const el11 = await driver.$("accessibility id:Tap to add product to cart");
//id com.saucelabs.mydemoapp.android:id/cartBt
//class name 	android.widget.Button
await el11.click();

------------------------------------------------------------------------------------

// Select cart from menu
const el12 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartTV");
await el12.click();

// Title of the cart page 
const el13 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
await el13.click();

// first product in the cart
const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (red)\")");
await el14.click();

// Price of the first product in the cart
const el15 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(0)");
await el15.click();

// Quantity of the first product in the cart
const el16 = await driver.$("id:com.saucelabs.mydemoapp.android:id/noTV");
await el16.click();

// Second product in the cart
const el17 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (yellow)\")");
await el17.click();

// Price of the second product in the cart
const el18 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(1)");
await el18.click();

// move pointer
await driver.action('pointer')
  .move({ duration: 0, x: 669, y: 1287 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 649, y: 724 })
  .up({ button: 0 })
  .perform();

// Quantity of the second product in the cart  
const el19 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/noTV\").instance(1)");
await el19.click();

// total number of items in the cart
const el20 = await driver.$("id:com.saucelabs.mydemoapp.android:id/itemsTV");
await el20.click();

// total price of the items in the cart
const el21 = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalPriceTV");
await el21.click();

// checkout button
const el22 = await driver.$("accessibility id:Confirms products for checkout");
// id com.saucelabs.mydemoapp.android:id/cartBt
// 	new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/cartBt")
await el22.click();

-------------------------------------------------------------------------
// login page title
//id com.saucelabs.mydemoapp.android:id/loginTV
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/loginTV")

// Username input field
const el23 = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET");
await el23.click();

// Password input field
const el24 = await driver.$("id:com.saucelabs.mydemoapp.android:id/passwordET");
await el24.click();


await el23.addValue("bod@example.com");
const el24 = await driver.$("id:com.saucelabs.mydemoapp.android:id/passwordET");
await el24.click();

await el24.addValue("10203040");
const el25 = await driver.$("accessibility id:Tap to login with given credentials");
await el25.click();

// Click login button
// id com.saucelabs.mydemoapp.android:id/loginBtn
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/loginBtn")

------------------------------------------------------------------------------------------

// Checkout title
const el26 = await driver.$("id:com.saucelabs.mydemoapp.android:id/checkoutTitleTV");
await el26.click();

// Enter shipping address title
// id com.saucelabs.mydemoapp.android:id/enterShippingAddressTV
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/enterShippingAddressTV")

// Full name input field
const el27 = await driver.$("id:com.saucelabs.mydemoapp.android:id/fullNameET");
await el27.click();
await el27.addValue("Rebecca Winter");

// Address line 1 input field
const el28 = await driver.$("id:com.saucelabs.mydemoapp.android:id/address1ET");
await el28.click();
await el28.addValue("Mandorley 112");

// Address line 2 input field
const el29 = await driver.$("id:com.saucelabs.mydemoapp.android:id/address2ET");
await el29.click();
await el29.addValue("Entrance 1");

// City input field
const el30 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cityET");
await el30.click();
await el30.addValue("Truro");

// State region input field
const el31 = await driver.$("id:com.saucelabs.mydemoapp.android:id/stateET");
await el31.click();
await el31.addValue("Cornwall");

// Zip code input field
const el32 = await driver.$("id:com.saucelabs.mydemoapp.android:id/zipET");
await el32.click();
await el32.addValue("89750");

// Country input field
const el33 = await driver.$("id:com.saucelabs.mydemoapp.android:id/countryET");
await el33.click();
await el33.addValue("United Kingdom");

// To payment button
const el34 = await driver.$("accessibility id:Saves user info for checkout");
// id com.saucelabs.mydemoapp.android:id/paymentBtn
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")
await el34.click();

// Checkout payment page title
const el35 = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterPaymentTitleTV");
await el35.click();

// Enter payment method title
// id com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV")

// Name on card input field
const el36 = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET");
await el36.click();

// Card number input field
await el36.addValue("Rebecca Winter");
const el37 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cardNumberET");
await el37.click();

// Card number input
await el37.addValue("5555 8888 9999 6666");
const el38 = await driver.$("id:com.saucelabs.mydemoapp.android:id/expirationDateET");
await el38.click();

// Expiration date input
await el38.addValue("05/28");
const el39 = await driver.$("id:com.saucelabs.mydemoapp.android:id/securityCodeET");
await el39.click();

// Security code input
await el39.addValue("123");

// Review order button
const el40 = await driver.$("accessibility id:Saves payment info and launches screen to review checkout data");
// id 	com.saucelabs.mydemoapp.android:id/paymentBtn
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")
await el40.click();

_________________________________________________________________

// Checkout review page title
// id 	com.saucelabs.mydemoapp.android:id/checkoutTitleTV
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/checkoutTitleTV")

// Review order title
const el41 = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterShippingAddressTV");
await el41.click();

// First product in the review order page
const el42 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (red)\")");
await el42.click();

// Price of the first product in the review order page
const el43 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(0)");
await el43.click();

// Second product in the review order page
const el44 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack (yellow)\")");
await el44.click();

// Price of the second product in the review order page
const el45 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.saucelabs.mydemoapp.android:id/priceTV\").instance(1)");
await el45.click();

// Total number of itens in the review order page 
const el46 = await driver.$("id:com.saucelabs.mydemoapp.android:id/itemNumberTV");
await el46.click();

// Total price of the order in the review order page
const el47 = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalAmountTV");
await el47.click();

// Place order button
const el48 = await driver.$("accessibility id:Completes the process of checkout");
// id 	com.saucelabs.mydemoapp.android:id/paymentBtn
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/paymentBtn")
await el48.click();

____________________________________________________________________________________________________
// Checkout complete page title
const el49 = await driver.$("id:com.saucelabs.mydemoapp.android:id/completeTV");
await el49.click();

// continue shopping button
const el50 = await driver.$("accessibility id:Tap to open catalog");
// id com.saucelabs.mydemoapp.android:id/shoopingBt
// new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/shoopingBt")
await el50.click();