var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');

var time_pause = 1000;
var enable_screenshot = true;

var source_model = util.getSourceModel();
var target_model = util.getTargetModel();
var source_class = util.getSourceClass();
var target_class = util.getTargetClass();
var source_property = util.getSourceProperty1();
var target_property = util.getTargetProperty1();
var relation = util.getRandomRelation();
var relation_to_change = util.getNextRelation(relation);

console.log(source_model.value + " ** " + target_model.value);
console.log(source_class.value + " ** " + target_class.value);
console.log(source_property.value + " ** " + target_property.value);
console.log(" => " + relation.value);
console.log(" => " + relation_to_change.value);

module.exports = {
	'@tags': ['CSPV'],
	'Field appears in Mappings': function(browser) {
		var create = browser.page.Create();
		var mappings = browser.page.Mappings();

		create.navigate()
			.waitForElementVisible('body')
			.set_source_model_name(source_model.value)
			.set_source_model_uri(source_model.uri)
			.set_target_model_name(target_model.value)
			.set_target_model_uri(target_model.uri)
			.set_source_class_name(source_class.value)
			.set_source_class_uri(source_class.uri)
			.set_target_class_name(target_class.value)
			.set_target_class_uri(target_class.uri)
			.set_source_property_name(source_property.value)
			.set_source_property_uri(source_property.uri)
			.set_target_property_name(target_property.value)
			.set_target_property_uri(target_property.uri)
			.set_relation(relation.value)
			.submit();

		browser
			.acceptAlert();

		create
			.wait_for_message_addnew_visible(6000)
			.assert_message_mapping_submitted();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'create.png');
		}

		mappings
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'mappings.png');
		}

		mappings
			.waitForElementVisible('body')
			.set_select_source_datamodel(source_model.value);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'mappings2.png');
		}

		browser
			.pause(2000);

		mappings
			.assert_table_rows(1)
			.assert_table_rows_message(1)
			.assert_table_row1_source_datamodel(source_model.value)
			.assert_table_row1_target_datamodel(target_model.value)
			.assert_table_row1_source_class(source_class.value)
			.assert_table_row1_target_class(target_class.value)
			.assert_table_row1_source_property(source_property.value)
			.assert_table_row1_target_property(target_property.value)
			.assert_table_row1_relation(relation.value)
			.assert_stats_number_relations(1)
			.assert_stats_percentage(relation.value, "100%");

	},

	'Field appears in Edit': function(browser) {
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
			.set_relation(relation_to_change.value);

		edit
			.submit();

		browser
			.acceptAlert()
			.pause(5000);

	},
	'Change appears in Mapping': function(browser) {
		var mappings = browser.page.Mappings();

		mappings
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'mappings3.png');
		}

		mappings
			.waitForElementVisible('body')
			.set_select_source_datamodel(source_model.value);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'mappings4.png');
		}

		browser
			.pause(2000);

		mappings
			.assert_table_rows(1)
			.assert_table_rows_message(1)
			.assert_table_row1_source_datamodel(source_model.value)
			.assert_table_row1_target_datamodel(target_model.value)
			.assert_table_row1_source_class(source_class.value)
			.assert_table_row1_target_class(target_class.value)
			.assert_table_row1_source_property(source_property.value)
			.assert_table_row1_target_property(target_property.value)
			.assert_table_row1_relation(relation_to_change.value)
			.assert_stats_number_relations(1)
			.assert_stats_percentage(relation_to_change.value, "100%");

	},

	'Model is deleted': function(browser) {
		var edit = browser.page.Edit();
		
		edit.navigate()
			.waitForElementVisible('body')
			.set_select_source_datamodel(source_model.value)
			.set_select_target_datamodel(target_model.value)
			.get_relations();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'edit2.png');
		}
		
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
			.assert_relation(relation_to_change.value);

		edit
			.delete_model()
			.submit();

		browser
			.acceptAlert()
			.pause(4000);

		edit
			.assert_source_model_deleted(source_model.value)
			.assert_target_model_deleted(target_model.value);

		browser
			.end();
	}
};
