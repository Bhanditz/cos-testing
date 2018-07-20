var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var scriptName = path.basename(__filename, '.js');
var testdata_filename = scriptName + '.csv';
var testdata_folder = __dirname + '..\\..\\..\\test-data\\';
var testdata_file = path.resolve(testdata_folder + testdata_filename);

var testdata_file2 = fs.readFileSync('test-data/'+scriptName+'.rdf', { 'encoding': 'utf8'});

var time_pause = 1000;
var enable_screenshot = false;

var source_model = util.getSourceModel();
var target_model = util.getTargetModel();
var source_class = util.getSourceClass();
var target_class = util.getTargetClass();
var source_property = util.getSourceProperty1();
var target_property = util.getTargetProperty1();
var relation = util.getRelation1();
var relation_to_change = util.getRelation2();

console.log(source_model.value + " ** " + target_model.value);
console.log(source_class.value + " ** " + target_class.value);
console.log(source_property.value + " ** " + target_property.value);
console.log(" => " + relation.value);

module.exports = {
	'@tags': ['CSPV'],
	'~Upload appears in Mappings': function(browser) {
		var create = browser.page.Create();

		create.navigate()
			.upload(testdata_file)
			.upload2();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
		}

		browser
			.pause(10000);

		create
			.assert_source_model_name(source_model.value)
			.assert_source_model_uri(source_model.uri)
			.assert_target_model_name(target_model.value)
			.assert_target_model_uri(target_model.uri)
			.assert_source_class_name(source_class.value)
			.assert_source_class_uri(source_class.uri)
			.assert_target_class_name(target_class.value)
			.assert_target_class_uri(target_class.uri)
			.assert_source_property_name(source_property.value)
			.assert_source_property_uri(source_property.uri)
			.assert_target_property_name(target_property.value)
			.assert_target_property_uri(target_property.uri)
			.assert_relation(relation.value);
			
		create.submit();
		
		browser
			.acceptAlert();

		create
			.wait_for_message_addnew_visible(6000)
			.assert_message_mapping_submitted();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create.png');
		}
	},
	
	'Download in Edit': function(browser) {
		var edit = browser.page.Edit();

		edit.navigate()
			.waitForElementVisible('body')
			.set_select_source_datamodel(source_model.value)
			.set_select_target_datamodel(target_model.value)
			.get_relations();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'edit.png');
		}

		browser
			.pause(2000);

		edit
			.assert_source_model_name(source_model.value)
			.assert_source_model_uri(source_model.uri)
			.assert_target_model_name(target_model.value)
			.assert_target_model_uri(target_model.uri)
			.assert_source_class_name(source_class.value)
			.assert_source_class_uri(source_class.uri)
			.assert_target_class_name(target_class.value)
			.assert_target_class_uri(target_class.uri)
			.assert_source_property_name(source_property.value)
			.assert_source_property_uri(source_property.uri)
			.assert_target_property_name(target_property.value)
			.assert_target_property_uri(target_property.uri)
			.assert_relation(relation.value);

		edit
			.export_relations();

		browser
			.pause(5000);
		
		edit
			.verify_download(testdata_file2);

		edit
			.delete_model()
			.submit();

		browser
			.acceptAlert()
			.pause(6000);

		edit
			.assert_source_model_deleted(source_model.value)
			.assert_target_model_deleted(target_model.value);

		browser
			.end();
	}
};