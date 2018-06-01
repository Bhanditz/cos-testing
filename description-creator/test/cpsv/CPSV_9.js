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
var testfield = '@ps_spatial';

var spatials = codelist.templates[0].content[8].choices;
var spatial = spatials[Math.floor(Math.random() * spatials.length)];
var spatial_label = spatial.label;
var spatial_value = spatial.value;

var first_spatial = spatials.find(o => o.label === 'ALA-Åland Islands');
var first_spatial_label = first_spatial.label;
var first_spatial_value = first_spatial.value;

console.log(spatial_label + " **** " + spatial_value );
console.log(first_spatial_label + " **** " + first_spatial_value);

module.exports = { // addapted from: https://git.io/vodU0
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.setValue(testfield, spatial_label)
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
			.assert.containsText(testfield, spatial_label);
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
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), contents.replace(first_spatial_value, spatial_value).replace(/[\n\r]+/g, '') );
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
			.assert.containsText(testfield, first_spatial_label);
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
			.assert.value(testfield, first_spatial_label);
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
