var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');

var time_pause = 1000;
var enable_screenshot = true;

var username = util.getUsername();
var password = util.getPassword();

console.log(username.value + " ** " + password.value);


module.exports = {
	'@tags': ['CSPV'],
	'User is logged in': function(browser) {
		var login = browser.page.Login();
		var userpage = browser.page.UserPage();

		login.navigate()
			.waitForElementVisible('body')
			.set_username(username.value)
			.set_password(password.value);
			
		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create.png');
		}
		
		login
			.login();

		browser
			.pause(5000);

		userpage
			.waitForElementVisible('body')
			.assert_username(username.value);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create2.png');
		}

		browser
			.end();
	}
};
