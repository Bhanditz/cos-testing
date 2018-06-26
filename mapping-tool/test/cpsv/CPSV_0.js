var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');

var time_pause = 1000;
var enable_screenshot = true;

var target_model = util.getTargetCPSVAPModel();
var source_class = util.getRandomSourceClass();
var relation = util.getRandomRelation();
var target_property = util.getTargetProperty1();
var target_class = util.getTargetClass();

console.log(target_model.value);
console.log(source_class.value + " ** " + target_class.value);
console.log(target_property.value);
console.log(" => " + relation.value);


module.exports = {
	'@tags': ['CSPV'],
	'Field appears in Mappings': function(browser) {
		var create = browser.page.CPSVAP();
		var mappings = browser.page.Mappings();

		create.navigate()
			.waitForElementVisible('body')
			.set_select_target_model(target_model.value);
	
		browser
			.pause(2000);

		create
			.set_select_source_class_name(source_class.value);
			
		browser
			.pause(3000);
		
		create
			.set_target_class_name(target_class.value)
			.set_target_class_uri(target_class.uri)
			.set_select_source_property_name()
			.set_target_property_name(target_property.value)
			.set_target_property_uri(target_property.uri)
			.set_relation(relation.value)
			.submit()

		browser
			.pause(2000);

		browser
			.acceptAlert();

		browser
			.pause(10000);

		create
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
			.set_select_source_datamodel("cpsv-ap2.1");
		
		browser
			.pause(2000);
		
		mappings
			.set_select_target_datamodel(target_model.value);
		
		browser
			.pause(2000);
			
		mappings
			.set_select_source_class(source_class.value);

		browser
			.pause(2000);

		mappings
			.set_select_target_class(target_class.value);
		
		browser
			.pause(2000);

		mappings
			.set_select_relation(relation.value);

		browser
			.pause(2000);

		mappings
			.set_select_target_property(target_property.value);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'mappings2.png');
		}

		browser
			.pause(2000);

		mappings
			.assert_table_rows(1)
			.assert_table_rows_message(1)
			.assert_table_row1_source_datamodel("cpsv-ap2.1")
			.assert_table_row1_target_datamodel(target_model.value)
			.assert_table_row1_source_class(source_class.value)
			.assert_table_row1_target_class(target_class.value)
			.assert_table_row1_target_property(target_property.value)
			.assert_table_row1_relation(relation.value)
			.assert_stats_number_relations(1)
			.assert_stats_percentage(relation.value, "100%");

		browser
			.end();
	}
};
