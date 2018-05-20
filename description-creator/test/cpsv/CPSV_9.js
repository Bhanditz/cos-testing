var config = require('../../nightwatch.conf.js');
var fs = require('fs');
var codelist = require('../../page-objects/CPSVtemplateWithCodelists.json');
var path = require('path');
var scriptName = path.basename(__filename, '.js');
//var contents = fs.readFileSync('test-data/'+scriptName+'.rdf', { 'encoding': 'utf8'});
var test = "ALB-Albania";
var test_upload = "test2";
var time_pause = 1000;
var download_folder = "downloads/";
var testdata_folder = __dirname + '..\\..\\..\\test-data\\';
var default_file = "PublicServiceDescriptionRDFXML.xml";
var enable_screenshot = true;
var testfield = '@ca_spatial';

var languages = codelist.templates[0].content[6].choices;
var uri =languages.find(o => o.label === 'English').value;
var language = languages[Math.floor(Math.random() * languages.length)];
var lang_label = language.label;
var lang_value = language.value;

console.log(lang_label + " **** " + lang_value);

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(testfield, test)
			.click('@tab');

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'editor.png');
		}

		presenter
			.click('@tab');

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'presenter.png');
		}

		presenter
			.assert.containsText(testfield, test);

		browser
			.end();
	}
};
