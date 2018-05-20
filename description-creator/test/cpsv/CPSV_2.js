var config = require('../../nightwatch.conf.js');
var languages = require('../../page-objects/Languages.json').languages;
var fs = require('fs');

var path = require('path');
var scriptName = path.basename(__filename, '.js');
var contents = fs.readFileSync('test-data/'+scriptName+'.rdf', { 'encoding': 'utf8'});
var test = "test";
var test_upload = "test2";
var time_pause = 1000;
var download_folder = "downloads/";
var testdata_folder = __dirname + '..\\..\\..\\test-data\\';
var default_file = "PublicServiceDescriptionRDFXML.xml";
var enable_screenshot = false;
var testfield = '@ps_name';
var testfield_lang = '@ps_name_lang';

//var languages = lang.find(o => o.id === 'LOM-Language').content[0].choices;
var language = languages[Math.floor(Math.random() * languages.length)];

if (language.label.en == "") {
	language = languages.find(o => o.label.en === 'English');
}
var lang_label = language.label.en;
var lang_value = language.value;
var lang_string = 'xml:lang="' + lang_value + '"';

console.log(lang_label + " **** " + lang_value);

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(testfield, test)
			.setValue(testfield_lang, lang_label)
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
			.assert.containsText(testfield, test)
			.assert.containsText(testfield_lang, lang_value);

		
		
	},
	

	'Field appears in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.click('@tab');

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
		}

		rdfdata
			.getValue('@textarea', function(result){
				this.assert.equal(contents.replace(new RegExp( test_upload, 'g' ), test).replace('xml:lang="en"', lang_string).replace(/[\n\r]+/g, ''), result.value.replace(/[\n\r]+/g, ''));
			})
	},

	'Uploading in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.setValue('@upload', require('path').resolve(testdata_folder + scriptName+'.rdf'));

		browser
			.pause(time_pause);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-upload.png');
		}

		rdfdata
			.getValue('@textarea', function(result){
				this.assert.equal(contents.replace(/[\n\r]+/g, ''), result.value.replace(/[\n\r]+/g, ''));
			});

	},

	'Upload appears in Presenter': function(browser) {
		var presenter = browser.page.Presenter();

		presenter
			.click('@tab')

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'presenter-upload.png');
		}

		presenter
			.assert.containsText(testfield, test_upload)
			.assert.containsText(testfield_lang, languages.find(o => o.label.en === 'English').value);
	},
	
	'Upload appears in Editor': function(browser) {
		var editor = browser.page.Editor();

		editor
			.click('@tab');

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'editor-upload.png');
		}

		editor
			.assert.value(testfield, test_upload)
			.assert.value(testfield_lang, languages.find(o => o.label.en === 'English').label.en);;
	},

	'Download in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.click('@tab');

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-upload-2.png');
		}

		rdfdata
			.click('@download');

		browser
			.pause(time_pause);

		rdfdata
			.getValue('@textarea', function(resultarea){
				var rename = fs.renameSync(download_folder + default_file, download_folder + scriptName + '.rdf', function(err) {
					if ( err ) console.log('ERROR: ' + err);
				});
				var download = fs.readFileSync(download_folder + scriptName+'.rdf', { 'encoding': 'utf8'});
				rdfdata.getValue('@textarea', function(resultarea){
					this.assert.equal(download.replace(/[\n\r]+/g, ''), resultarea.value.replace(/[\n\r]+/g, ''));
				});
			});

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-download.png');
		}

		browser
			.end();
	}
};
