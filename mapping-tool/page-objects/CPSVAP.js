module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_mapping/CPSVAPmappings"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[2]/a[text() = "Create CPSV-AP mapping"]',
			locateStrategy: 'xpath'
		},
		select_target_model: {
			selector: '#edit-datamodellist2'
		},
		source_class_name: {
			selector: '#edit-relations-fieldset-0-source-class'
		},
		source_class_uri: {
			selector: '#edit-relations-fieldset-0-source-class-uri'
		},
		source_property_name: {
			selector: 'div.form-item-relations-fieldset-0-source-property > select'
		},
		source_property_uri: {
			selector: '#edit-relations-fieldset-0-source-property-uri'
		},
		target_property_name: {
			selector: '//div[contains(@class,"form-item-relations-fieldset-0-target-property")]/input[1]',
			locateStrategy: 'xpath'
		},
		target_property_uri: {
			selector: '//div[contains(@class,"form-item-relations-fieldset-0-target-property-URI")]/input[1]',
			locateStrategy: 'xpath'
		},
		target_class_name: {
			selector: '//div[contains(@class,"form-item-relations-fieldset-0-target-class")]/input[1]',
			locateStrategy: 'xpath'
		},
		target_class_uri: {
			selector: '//div[contains(@class,"form-item-relations-fieldset-0-target-class-URI")]/input[1]',
			locateStrategy: 'xpath'
		},
		relation: {
			selector: 'div.form-item-relations-fieldset-0-relation > select'
		},
		syntax_mapping: {
			selector: '#edit-relations-fieldset-0-syntax-mapping'
		},
		button_generate_uri: {
			selector: '#edit-generate-uri'
		},
		button_submit: {
			selector: '#edit-submit'
		},
		message_addnew: {
			selector: '//div[@id = "extra"]/div[1]/ul[1]/li[text() = "add new"]',
			locateStrategy: 'xpath'
		},
		message_mapping_submitted: {
			selector: '//div[@id = "extra"]/div[1]/ul[1]/li[2]',
			locateStrategy: 'xpath'
		}
	},
	
	commands: [{
		select() {
			return this.click('@tab');
		},
		submit() {
			return this.click('@button_submit');
		},
		set_select_target_model(value) {
			return this.selectOptionByText(this.elements.select_target_model.selector,value);
		},
		assert_select_target_model(value){
			return this.assert.optionIsSelected(this.elements.select_target_model.selector, value);
		},
		set_select_source_class_name(value) {
			return this.setValue('@source_class_name', value);
		},
		assert_source_class_name(value){
			return this.assert.value('@source_class_name', value);
		},
		set_source_class_uri(value) {
			return this.setValue('@source_class_uri', value);
		},
		assert_source_class_uri(value){
			return this.assert.value('@source_class_uri', value);
		},
		set_select_source_property_name() {
			return this.selectRandomOptionByText(this.elements.source_property_name.selector);
		},
		assert_source_property_name(value){
			return this.assert.value('@source_property_name', value);
		},
		set_source_property_uri(value) {
			return this.setValue('@source_property_uri', value);
		},
		assert_source_property_uri(value){
			return this.assert.value('@source_property_uri', value);
		},
		set_target_property_name(value) {
			return this.setValue('@target_property_name', value);
		},
		assert_target_property_name(value){
			return this.assert.value('@target_property_name', value);
		},
		set_target_property_uri(value) {
			return this.setValue('@target_property_uri', value);
		},
		assert_target_property_uri(value){
			return this.assert.value('@target_property_uri', value);
		},
		set_target_class_name(value) {
			return this.setValue('@target_class_name', value);
		},
		assert_target_class_name(value){
			return this.assert.value('@target_class_name', value);
		},
		set_target_class_uri(value) {
			return this.setValue('@target_class_uri', value);
		},
		assert_target_class_uri(value){
			return this.assert.value('@target_class_uri', value);
		},
		set_relation(value) {
			return this.selectOptionByText(this.elements.relation.selector,value);
		},
		assert_relation(value){
			return  this.assert.optionIsSelected(this.elements.relation.selector, value);
		},
		set_syntax_mapping(value) {
			return this.setValue('@syntax_mapping', value);
		},
		assert_syntax_mapping(value){
			return this.assert.value('@syntax_mapping', value);
		},
		wait_for_message_addnew_visible(value) {
			return this.waitForElementVisible('@message_addnew', value);
		},
		assert_message_mapping_submitted(){
			return this.assert.containsText('@message_mapping_submitted', "Mapping has been submitted");
		}
	}]
};