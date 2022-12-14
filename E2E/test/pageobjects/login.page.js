

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get loginButton() {
        return $(".NavButton__nav-button___34wHC");
      }

    get inputUsername () {
        return $('//form/div/input');
    }

    get inputPassword () {
        return $('(//form/div/input)[2]');
    }

    get btnSubmit () {
        return $('//button[@type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.loginButton.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
