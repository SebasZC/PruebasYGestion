const { selectPlanetForBooking } = require("../pageobjects/home.page");
const HomePage = require("../pageobjects/home.page");
const LoginPage = require("../pageobjects/login.page");
const CheckoutPage = require("../pageobjects/checkout.page");

describe("Creates a booking for a travel", () => {
  it("Should be able to log and fill the data for an space adventure!", async () => {
    await browser.url("http://demo.testim.io/");
    await LoginPage.login("Tom Scott", "123456");
    await HomePage.fillDestinationData(3);
    //desde aquí se escoge un planeta aleatorio
    await selectPlanetForBooking();
    //llenamos los datos del booking
    CheckoutPage.fillCheckoutData(); 
    CheckoutPage.validateCorrectPrice();
  });
});
