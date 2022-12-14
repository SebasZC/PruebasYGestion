const Page = require("./page");

class HomePage extends Page {


  get departingDateList() {
    return $('//input[@type="text"]');
  }

  get todayDate() {
    return $("//div[@class='theme__day___3cb3g']/span");
  }

  get okButton() {
    return $("//button[contains(text(),'Ok')]");
  }

  get passengersQuantityList() {
    return $("(//input[@tabindex='-1'])[1]");
  }

  get passengerSelection() {
    return $("(//ul/li[contains(text() ,'3')])[1]");
  }

  get selectDestinationButton() {
    return $("//button[contains(text(),'Select Destination')]");
  }

  async fillDestinationData(passengerQuantity) {
    await this.departingDateList.click();
    await this.todayDate.click();
    await this.okButton.click();

    await this.passengersQuantityList.click();
    await $("//ul/li[contains(text(),'" + passengerQuantity + "')]").click();
    await this.selectDestinationButton.click();
  }

  async selectPlanetForBooking() {
    function getRandomBooking(max) {
      return Math.floor(Math.random() * max);
    }

    await $(
      '(//div[@class = "Box__box___2XzJ2 Gallery__items-box___2hOZl"]/div/div/button)[' +
        getRandomBooking(7) +
        "]"
    ).click();
  }
}
module.exports = new HomePage();
