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
var ps_pt_years = '@ps_pt_years';
var ps_pt_months = '@ps_pt_months';
var ps_pt_days = '@ps_pt_days';
var ps_pt_hours = '@ps_pt_hours';
var ps_pt_minutes = '@ps_pt_minutes';
var ps_pt = '@ps_pt';

var years = Math.floor((Math.random() * 100) + 1);
var months = Math.floor((Math.random() * 12) + 1);
var days = Math.floor((Math.random() * 31) + 1);
var hours = Math.floor((Math.random() * 24) + 1);
var minutes = Math.floor((Math.random() * 60) + 1);
var processingtime = "P" + years + "Y" + months + "M" + days + "D" + "T" + hours + "H" + minutes + "M";

var first_years = "1";
var first_months = "1";
var first_days = "1";
var first_hours = "1";
var first_minutes = "1";
var firstprocessingtime = "P" + first_years + "Y" + first_months + "M" + first_days + "D" + "T" + first_hours + "H" + first_minutes + "M";

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(ps_pt_years, years)
			.setValue(ps_pt_months, months)
			.setValue(ps_pt_days, days)
			.setValue(ps_pt_hours, hours)
			.setValue(ps_pt_minutes, minutes)
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
			.assert.containsText(ps_pt, processingtime);
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
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), contents.replace(firstprocessingtime, processingtime).replace(/[\n\r]+/g, '') );
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
			.assert.containsText(ps_pt, firstprocessingtime);
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
			.assert.value(ps_pt_years, first_years)
			.assert.value(ps_pt_months, first_months)
			.assert.value(ps_pt_days, first_days)
			.assert.value(ps_pt_hours, first_hours)
			.assert.value(ps_pt_minutes, first_minutes);
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
