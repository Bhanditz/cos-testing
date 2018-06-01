var config = require('../../nightwatch.conf.js');
var fs = require('fs');
var codelist = require('../../page-objects/CPSVtemplateWithCodelists.json');
var path = require('path');
var scriptName = path.basename(__filename, '.js');
var contents = fs.readFileSync('test-data/'+scriptName+'.rdf', { 'encoding': 'utf8'});
var time_pause = 1000;
var download_folder = "downloads/";
var testdata_folder = __dirname + '..\\..\\..\\test-data\\';
var default_file = "PublicServiceDescriptionRDFXML.xml";
var enable_screenshot = true;
var testfield = '@ps_status';

var statuses = codelist.templates[0].content[7].choices;
var status = statuses[Math.floor(Math.random() * statuses.length)];
var status_label = status.label;
var status_value = status.value;

var first_status = statuses.find(o => o.label === 'Completed');
var first_status_label = first_status.label;
var first_status_value = first_status.value;

console.log(status_label + " **** " + status_value);
console.log(first_status_label + " **** " + first_status_value);

escapeSpecialChars = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(testfield, status_label)
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
			.assert.containsText(testfield, status_label);
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
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), contents.replace(first_status_value, status_value).replace(/[\n\r]+/g, '') );
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
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), contents.replace(/[\n\r]+/g, '') );
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
			.assert.containsText(testfield, first_status_label);
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
			.assert.value(testfield, first_status_label);
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
					this.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), download.replace(/[\n\r]+/g, '') );
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
