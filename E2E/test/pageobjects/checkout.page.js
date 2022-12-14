const Page = require("./page");

class CheckoutPage extends Page {
  get nameInputFieldForCheckout() {
    return $(
      '//body/div[@id="app"]/div[1]/div[2]/section[1]/div[3]/div[1]/form[1]/div[1]/input[1]'
    );
  }

  get emailInputFieldForCheckout() {
    return $(
      '//body/div[@id="app"]/div[1]/div[2]/section[1]/div[3]/div[1]/form[1]/div[2]/input[1]'
    );
  }

  get socialSecurityInputField() {
    return $(
      '//body/div[@id="app"]/div[1]/div[2]/section[1]/div[3]/div[1]/form[1]/div[3]/input[1]'
    );
  }

  get phoneNumberInputField() {
    return $(
      '//body/div[@id="app"]/div[1]/div[2]/section[1]/div[3]/div[1]/form[1]/div[4]/input[1]'
    );
  }

  get checkboxButton() {
    return $("//label[@data-react-toolbox='checkbox']/div");
  }

  get travelerQuantityOnCheckoutBill() {
    return $("//div[contains(text(),' traveler')]");
  }

  get checkoutPrice() {
    return $(
      "//body/div[@id='app']/div[1]/div[2]/section[1]/div[3]/div[2]/div[3]/div[2]"
    );
  }

  get totalPriceOnPage() {
    return $("//strong");
  }
  async fillCheckoutData() {
    await this.nameInputFieldForCheckout.setValue("Tom Scott");
    await this.emailInputFieldForCheckout.setValue("TomScott@gmail.com");
    await this.socialSecurityInputField.setValue("123-43-6789");
    await this.phoneNumberInputField.setValue("12345678910");
    await this.uploadHealthInsurance();
    await this.checkboxButton.click();
  }

  async uploadHealthInsurance() {
    const path = require("path");
    const filePath = path.join(__dirname, "../pageobjects/data/image.jpg");
    const remoteFilePath = await browser.uploadFile(filePath);
    await browser.execute(
      "document.querySelector('input[type=file]').style = 'true'"
    );
    await $("input[type=file]").setValue(remoteFilePath);
  }

  async validateCorrectPrice() {
    const travelers = await this.travelerQuantityOnCheckoutBill
      .getText()
      .charAt(0);
    var price = await this.checkoutPrice.getText().replace("$", "");
    var totalCalculated = travelers * price;
    var totalPag = (await this.totalPriceOnPage.getText())
      .replace("$", "")
      .replace(",", "");

    await browser.expect(totalCalculated.toString()).toEqual(totalPag.toString());
  }
}
module.exports = new CheckoutPage();
