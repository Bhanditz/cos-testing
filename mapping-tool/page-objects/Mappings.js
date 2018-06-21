module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_mapping/mapped_relations"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[3]/a[text() = "Mappings"]',
			locateStrategy: 'xpath'
		},
		select_source_datamodel: {
			selector: '#edit-did1-selective'
		},
		select_source_class: {
			selector: '#edit-coreclass-selective'
		},
		select_relation: {
			selector: '#edit-relation-selective'
		},
		select_target_datamodel: {
			selector: '#edit-did2-selective'
		},
		select_target_class: {
			selector: '#edit-mappedclass-selective'
		},
		select_target_property: {
			selector: '#edit-mappedproperty-selective'
		},
		table_rows: {
			selector: '#datatable-1 > tbody > tr'
		},
		table_rows_message: {
			selector: '#datatable-1_info'
		},
		table_row1_source_datamodel: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[1]',
			locateStrategy: 'xpath'
		},
		table_row1_target_datamodel: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[2]',
			locateStrategy: 'xpath'
		},
		table_row1_source_class: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[3]',
			locateStrategy: 'xpath'
		},
		table_row1_source_property: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[4]',
			locateStrategy: 'xpath'
		},
		table_row1_relation: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[5]',
			locateStrategy: 'xpath'
		},
		table_row1_target_property: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[6]',
			locateStrategy: 'xpath'
		},
		table_row1_target_class: {
			selector: '//table[@id = "datatable-1"]/tbody/tr[1]/td[7]',
			locateStrategy: 'xpath'
		},
		statistics: {
			selector: '//h2[text() = "Statistics"]/../div[1]',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		set_select_source_datamodel(value) {
			return this.click('@select_source_datamodel',()=>{
				this.click("option[value='" + value + "']");
			});
		},
		set_select_target_datamodel(value) {
			return this.click('@select_source_datamodel',()=>{
				this.click("option[value='" + value + "']");
			});
		},
		wait_for_table_row1_source_datamodel_visible(value) {
			return this.waitForElementVisible('@table_row1_source_datamodel', value);
		},
		assert_table_rows(value){
			//return this.assert.elementPresent('#datatable-1 > tbody > tr:nth-of-type(' + value + ')');
			return this.assert.elementCount(this.elements.table_rows.selector, value);
		},
		assert_table_rows_message(value){
			return this.assert.containsText('@table_rows_message', "Showing 1 to " + value + " of " + value + " entries");
		},
		assert_table_row1_source_datamodel(value){
			return this.assert.containsText('@table_row1_source_datamodel', value);
		},
		assert_table_row1_target_datamodel(value){
			return this.assert.containsText('@table_row1_target_datamodel', value);
		},
		assert_table_row1_source_class(value){
			return this.assert.containsText('@table_row1_source_class', value);
		},
		assert_table_row1_source_property(value){
			return this.assert.containsText('@table_row1_source_property', value);
		},
		assert_table_row1_relation(value){
			return this.assert.containsText('@table_row1_relation', value);
		},
		assert_table_row1_target_property(value){
			return this.assert.containsText('@table_row1_target_property', value);
		},
		assert_table_row1_target_class(value){
			return this.assert.containsText('@table_row1_target_class', value);
		},
		assert_stats_number_relations(value){
			var that = this;
			return this.getText('@statistics', function(result) {
				var relations = result.value.split("\n")[0];
				var num_rels = relations.split(" = ")[1];
				console.log(num_rels);
				that.assert.equal(parseInt(num_rels), value );
				//return stats;
				//expect(result.value).to.equal("Gmail");
				//console.log(msg.toString()+result.value);
			});
		},
		assert_stats_percentage_close_match(value){
			var that = this;
			return this.getText('@statistics', function(result) {
				var close_matches = result.value.split("\n")[2];
				var num_close_matches = close_matches.split(" = ")[1];
				console.log(num_close_matches);
				that.assert.equal(num_close_matches, value );
				//return stats;
				//expect(result.value).to.equal("Gmail");
				//console.log(msg.toString()+result.value);
			});
		}
	}]
};