module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_mapping/editmappings"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[4]/a[text() = "Edit and export mappings"]',
			locateStrategy: 'xpath'
		},
		select_source_datamodel: {
			selector: '#edit-datamodellist1'
		},
		select_target_datamodel: {
			selector: '#edit-datamodellist2'
		},
		source_model_name: {
			selector: '#edit-wrapper-datamodels-datamodel-fieldset1-datamodel1'
		},
		source_model_uri: {
			selector: '#edit-wrapper-datamodels-datamodel-fieldset1-uri1'
		},
		target_model_name: {
			selector: '#edit-wrapper-datamodels-datamodel-fieldset2-datamodel2'
		},
		target_model_uri: {
			selector: '#edit-wrapper-datamodels-datamodel-fieldset2-uri2'
		},
		button_get_relations: {
			selector: '#edit-get-relations'
		},
		button_export_relations: {
			selector: '#edit-export-relations'
		},
		button_submit: {
			selector: '#edit-submit'
		},
		checkbox_delete_datamodel: {
			selector: '#edit-wrapper-datamodels-deletedatamodel'
		},
		source_class_name: {
			selector: '#edit-relations-fieldset-0-source-class'
		},
		source_class_uri: {
			selector: '#edit-relations-fieldset-0-source-class-uri'
		},
		source_property_name: {
			selector: '#edit-relations-fieldset-0-source-property'
		},
		source_property_uri: {
			selector: '#edit-relations-fieldset-0-source-property-uri'
		},
		target_property_name: {
			selector: '#edit-relations-fieldset-0-target-property'
		},
		target_property_uri: {
			selector: '#edit-relations-fieldset-0-target-property-uri'
		},
		target_class_name: {
			selector: '#edit-relations-fieldset-0-target-class'
		},
		target_class_uri: {
			selector: '#edit-relations-fieldset-0-target-class-uri'
		},
		relation: {
			selector: '#edit-relations-fieldset-0-relation'
		},
		syntax_mapping: {
			selector: '#edit-relations-fieldset-0-syntax-mapping'
		},
		checkbox_delete_relation: {
			selector: '#edit-relations-fieldset-0-labels-deletemapping'
		},
		source_model_deleted: {
			selector: '//div[@id = "extra"]/div[1]/ul[1]/li[1]',
			locateStrategy: 'xpath'
		},
		target_model_deleted: {
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
		delete_model() {
			return this.click('@checkbox_delete_datamodel');
		},
		delete_relation() {
			return this.click('@checkbox_delete_relation');
		},
		get_relations() {
			return this.click('@button_get_relations');
		},
		set_select_source_datamodel(value) {
			return this.selectOptionByText(this.elements.select_source_datamodel.selector,value);
		},
		set_select_target_datamodel(value) {
			return this.selectOptionByText(this.elements.select_target_datamodel.selector,value);
		},
		set_source_model_name(value) {
			return this.setValue('@source_model_name', value);
		},
		assert_source_model_name(value){
			return this.assert.value('@source_model_name', value);
		},
		set_source_model_uri(value) {
			return this.setValue('@source_model_uri', value);
		},
		assert_source_model_uri(value){
			return this.assert.value('@source_model_uri', value);
		},
		set_target_model_name(value) {
			return this.setValue('@target_model_name', value);
		},
		assert_target_model_name(value){
			return this.assert.value('@target_model_name', value);
		},
		set_target_model_uri(value) {
			return this.setValue('@target_model_uri', value);
		},
		assert_target_model_uri(value){
			return this.assert.value('@target_model_uri', value);
		},
		set_source_class_name(value) {
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
		set_source_property_name(value) {
			return this.setValue('@source_property_name', value);
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
			return this.setValue('@relation', value);
		},
		assert_relation(value){
			return this.assert.optionIsSelected(this.elements.relation.selector, value);
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
			return this.assert.containsText('@message_mapping_submitted', "Mapping submitted");
		},
		assert_source_model_deleted(value){
			return this.assert.containsText('@source_model_deleted', value + " was deleted");
		},
		assert_target_model_deleted(value){
			return this.assert.containsText('@target_model_deleted', value + " was deleted");
		}
	}]
};