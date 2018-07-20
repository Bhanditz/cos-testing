var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');

var time_pause = 1000;
var enable_screenshot = true;

var username = util.getUsername();
var password = util.getPassword();

var po_identifier = util.getPOIdentifier().value;
var po_identifier2 = util.getPOIdentifier2().value;
var po_label = util.getPOLabel().value;

var ps_identifier = util.getPSIdentifier().value;
var ps_name = util.getPSName().value;
var ps_description = util.getPSDescription().value;

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
	},
	
	'User add Public Organisation': function(browser) {
		var addcontent = browser.page.AddContent();
		var po= browser.page.PublicOrganisation();
		
		addcontent
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create3.png');
		}

		addcontent
			.add_publicorganisation();

		browser
			.pause(2000);

		po
			.assert_title("create public organisation");
		
		po
			.set_identifier(po_identifier)
			.set_label(po_label);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create4.png');
		}

		po
			.save();
	
		browser
			.pause(5000);

		po
			.assert_title(po_identifier);

		po
			.edit();

		browser
			.pause(5000);

		po
			.set_identifier(po_identifier2);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create4.png');
		}

		po
			.save();

		browser
			.pause(5000);
	},

	'User add public service': function(browser) {
		var addcontent = browser.page.AddContent();
		var ps = browser.page.PublicService();
		
		addcontent
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create3.png');
		}

		addcontent
			.add_publicservice();

		browser
			.pause(2000);

		ps
			.assert_title("create public service");
		
		ps
			.set_identifier(ps_identifier)
			.set_name(ps_name)
			.set_description(ps_description)
			.set_select_hascompetentauthority(po_label);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create4.png');
		}

		ps
			.save();

		browser
			.pause(5000);
	},

	'User search public service': function(browser) {
		var browse = browser.page.Browse();
		
		browse
			.select()
			.set_search_title(ps_identifier)
			.apply();

		browser
			.pause(5000);

		browse
			.verify_title(ps_identifier);

		browse
			.set_search_title(po_label)
			.apply();

		browser
			.pause(5000);

		browse
			.verify_title(po_label);

		browser
			.end();
	}
};
