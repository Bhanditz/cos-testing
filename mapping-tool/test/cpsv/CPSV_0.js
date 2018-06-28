var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');

var time_pause = 1000;
var enable_screenshot = false;

var target_model = util.getTargetCPSVAPModel();
var source_class = util.getRandomSourceClass();
var relation = util.getRandomRelation();
var target_property = util.getTargetProperty1();
var target_class = util.getTargetClass();
var random_source_property = "";

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
			.set_relation(relation.value);
		
		browser.getValue('div.form-item-relations-fieldset-0-source-property > select', function(result) {
									random_source_property = result.value;
								});
		browser
			.perform(function() {
				console.log("SOURCE:" + random_source_property);
		});
		

		
		create
			.submit()

		browser
			.pause(2000);

		browser
			.acceptAlert();

		browser
			.pause(7000);

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
			.set_select_source_datamodel("CPSV-AP 2.1");
		
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
			
		browser
			.perform(function(){
				console.log("SOURCE:"+ random_source_property);
				mappings.set_select_source_property(random_source_property);
			});
		
		

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
			.assert_table_row1_source_datamodel("CPSV-AP 2.1")
			.assert_table_row1_target_datamodel(target_model.value)
			.assert_table_row1_source_class(source_class.value)
			.assert_table_row1_target_class(target_class.value)
			.assert_table_row1_target_property(target_property.value)
			.assert_table_row1_relation(relation.value)
			.assert_stats_number_relations(1)
			.assert_stats_percentage(relation.value, "100%");

	},
	'Field appears in Edit': function(browser) {
		var edit = browser.page.Edit();

		edit.navigate()
			.waitForElementVisible('body')
			.set_select_source_datamodel("CPSV-AP 2.1")
			.set_select_target_datamodel(target_model.value)
			.get_relations();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'edit.png');
		}

		browser
			.pause(2000);

		edit
			.assert_source_model_name("CPSV-AP 2.1")
			.assert_target_model_name(target_model.value)
			.assert_target_model_uri(target_model.uri)
			.assert_source_class_name(source_class.value)
			.assert_target_class_name(target_class.value)
			.assert_target_class_uri(target_class.uri);
			
		browser
			.perform(function(){
				console.log("SOURCE:"+ random_source_property);
				edit.assert_source_property_name(random_source_property);
			});
			
		edit
			.assert_target_property_name(target_property.value)
			.assert_target_property_uri(target_property.uri)
			.assert_relation(relation.value);
		
		edit
			.delete_relation()
			.submit();

		browser
			.acceptAlert()
			.pause(4000);

		browser
			.end();
	}
};
