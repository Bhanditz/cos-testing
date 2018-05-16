var config = require('../../nightwatch.conf.js');
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
var enable_screenshot = true;
var testfield = '@identifier';

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Public Service Description Creator': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();
		var rdfdata = browser.page.RDFData();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(testfield, test)
			.click('@tab');

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'editor.png');
		}

		presenter
			.click('@tab')
			.assert.containsText(testfield, test);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'presenter.png');
		}

		rdfdata
			.click('@tab');

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
		}

		rdfdata
			.getValue('@textarea', function(result){
				this.assert.equal(contents.replace(new RegExp( test_upload, 'g' ), test).replace(/[\n\r]+/g, ''), result.value.replace(/[\n\r]+/g, ''));
			})
			.setValue('@upload', require('path').resolve(testdata_folder + scriptName+'.rdf'));

		browser
			.pause(time_pause);

		rdfdata
			.getValue('@textarea', function(result){
				this.assert.equal(contents.replace(/[\n\r]+/g, ''), result.value.replace(/[\n\r]+/g, ''));
			});

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-upload.png');
		}

		presenter
			.click('@tab')
			.assert.containsText(testfield, test_upload);

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'presenter-upload.png');
		}

		editor
			.click('@tab');

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'editor-upload.png');
		}

		editor
			.assert.value(testfield, test_upload);

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
