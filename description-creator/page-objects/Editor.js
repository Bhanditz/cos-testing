module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	getElementByXpath: function(path) {
			return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_0'
		},
		ps_identifier: {
			selector: '(//span[text()="Identifier"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_name: {
			selector: '(//span[text()="Name"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_name_lang: {
			selector: '(//span[text()="Name"])[1]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_description: {
			selector: '(//span[text()="Description"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_description_lang: {
			selector: '(//span[text()="Description"])[1]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_keyword: {
			selector: '(//span[text()="Keyword"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_keyword_lang: {
			selector: '(//span[text()="Keyword"])[1]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_sector: {
			selector: '(//span[text()="Sector"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_sector2: {
			selector: '(//span[text()="Sector"])[1]/../../div[2]/div[2]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_type: {
			selector: '(//span[text()="Type"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_language: {
			selector: '(//span[text()="Language"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_status: {
			selector: '(//span[text()="Status"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_spatial: {
			selector: '(//span[text()="Spatial"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_pt_years: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Years"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_months: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Months"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_days: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Days"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_hours: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Hours"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_minutes: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Minutes"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_requires: {
			selector: '(//span[text()="Requires"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_related: {
			selector: '(//span[text()="Related"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ca_identifier: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "PreferredLabel"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel_lang: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "PreferredLabel"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_spatial: {
			selector: '(//span[text()="HasCompetentAuthority"])[1]/../../div[2]/div[1]/div[3]/div[1]/span[text()="Spatial"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		sector_click: {
			selector: '//div[1]/span[1][text() = "Sector"]/../span[2]',
			locateStrategy: 'xpath'
		},			
		be_click: {
			selector: '(//span[text() = "IsGroupedBy: BusinessEvent"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		be_identifier: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_name: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_name_lang: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		be_description: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_description_lang: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		be_related: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "RelatedService"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_type: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},		
		le_click: {
			selector: '(//span[text() = "IsGroupedBy: LifeEvent"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		le_identifier: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_name: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_name_lang: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		le_description: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_description_lang: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		le_related: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "RelatedService"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_type: {
			selector: '//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		c_click: {
			selector: '(//span[text() = "HasCriterion"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		c_identifier: {
			selector: '//div[1]/span[1][text() = "HasCriterion"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		c_name: {
			selector: '//div[1]/span[1][text() = "HasCriterion"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		c_name_lang: {
			selector: '//div[1]/span[1][text() = "HasCriterion"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		}
	},
	
	commands: [{
		select() {
			return this.click('@tab');
		},
		set_ps_identifier(value) {
			return this.setValue('@ps_identifier', value);
		},
		assert_ps_identifier(value){
			return this.assert.value('@ps_identifier', value);
		},
		set_ps_name(value) {
			return this.setValue('@ps_name', value);
		},
		assert_ps_name(value){
			return this.assert.value('@ps_name', value);
		},
		set_ps_name_lang(value) {
			return this.setValue('@ps_name_lang', value);
		},
		assert_ps_name_lang(value){
			return this.assert.value('@ps_name_lang', value);
		},
		set_ps_description(value) {
			return this.setValue('@ps_description', value);
		},
		assert_ps_description(value){
			return this.assert.value('@ps_description', value);
		},
		set_ps_description_lang(value) {
			return this.setValue('@ps_description_lang', value);
		},
		assert_ps_description_lang(value){
			return this.assert.value('@ps_description_lang', value);
		},
		set_ps_keyword(value) {
			return this.setValue('@ps_keyword', value);
		},
		assert_ps_keyword(value){
			return this.assert.value('@ps_keyword', value);
		},
		set_ps_keyword_lang(value) {
			return this.setValue('@ps_keyword_lang', value);
		},
		assert_ps_keyword_lang(value){
			return this.assert.value('@ps_keyword_lang', value);
		},
		set_ps_sector(value) {
			return this.setValue('@ps_sector', value);
		},
		assert_ps_sector(value){
			return this.assert.value('@ps_sector', value);
		},
		set_ps_sector2(value) {
			return this.setValue('@ps_sector2', value);
		},
		assert_ps_sector2(value){
			return this.assert.value('@ps_sector2', value);
		},
		set_ps_type(value) {
			return this.setValue('@ps_type', value);
		},
		assert_ps_type(value){
			return this.assert.value('@ps_type', value);
		},
		set_ps_language(value) {
			return this.setValue('@ps_language', value);
		},
		assert_ps_language(value){
			return this.assert.value('@ps_language', value);
		},
		set_ps_status(value) {
			return this.setValue('@ps_status', value);
		},
		assert_ps_status(value){
			return this.assert.value('@ps_status', value);
		},
		set_ps_spatial(value) {
			return this.setValue('@ps_spatial', value);
		},
		assert_ps_spatial(value){
			return this.assert.value('@ps_spatial', value);
		},
		set_ps_pt_years(value) {
			return this.setValue('@ps_pt_years', value);
		},
		assert_ps_pt_years(value){
			return this.assert.value('@ps_pt_years', value);
		},
		set_ps_pt_months(value) {
			return this.setValue('@ps_pt_months', value);
		},
		assert_ps_pt_months(value){
			return this.assert.value('@ps_pt_months', value);
		},
		set_ps_pt_days(value) {
			return this.setValue('@ps_pt_days', value);
		},
		assert_ps_pt_days(value){
			return this.assert.value('@ps_pt_days', value);
		},
		set_ps_pt_hours(value) {
			return this.setValue('@ps_pt_hours', value);
		},
		assert_ps_pt_hours(value){
			return this.assert.value('@ps_pt_hours', value);
		},
		set_ps_pt_minutes(value) {
			return this.setValue('@ps_pt_minutes', value);
		},
		assert_ps_pt_minutes(value){
			return this.assert.value('@ps_pt_minutes', value);
		},
		set_ps_pt(value) {
			return this.set_ps_pt_years(value.years)
						.set_ps_pt_months(value.months)
						.set_ps_pt_days(value.days)
						.set_ps_pt_hours(value.hours)
						.set_ps_pt_minutes(value.minutes);
		},
		assert_ps_pt(value) {
			return this.assert_ps_pt_years(value.years)
						.assert_ps_pt_months(value.months)
						.assert_ps_pt_days(value.days)
						.assert_ps_pt_hours(value.hours)
						.assert_ps_pt_minutes(value.minutes);
		},
		set_ps_requires(value) {
			return this.setValue('@ps_requires', value);
		},
		assert_ps_requires(value){
			return this.assert.value('@ps_requires', value);
		},
		set_ps_related(value) {
			return this.setValue('@ps_related', value);
		},
		assert_ps_related(value){
			return this.assert.value('@ps_related', value);
		},
		set_ca_identifier(value) {
			return this.setValue('@ca_identifier', value);
		},
		assert_ca_identifier(value){
			return this.assert.value('@ca_identifier', value);
		},
		set_ca_preferredlabel(value) {
			return this.setValue('@ca_preferredlabel', value);
		},
		assert_ca_preferredlabel(value){
			return this.assert.value('@ca_preferredlabel', value);
		},
		set_ca_preferredlabel_lang(value) {
			return this.setValue('@ca_preferredlabel_lang', value);
		},
		assert_ca_preferredlabel_lang(value){
			return this.assert.value('@ca_preferredlabel_lang', value);
		},
		set_ca_spatial(value) {
			return this.setValue('@ca_spatial', value);
		},
		assert_ca_spatial(value){
			return this.assert.value('@ca_spatial', value);
		},
		be_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.be_click.selector]);
			this.assert.visible('@be_click');
			this.click('@be_click');
			return this;
		},
		set_be_identifier(value) {
			return this.setValue('@be_identifier', value);
		},
		assert_be_identifier(value){
			return this.assert.value('@be_identifier', value);
		},
		set_be_name(value) {
			return this.setValue('@be_name', value);
		},
		assert_be_name(value){
			return this.assert.value('@be_name', value);
		},
		set_be_name_lang(value) {
			return this.setValue('@be_name_lang', value);
		},
		assert_be_name_lang(value){
			return this.assert.value('@be_name_lang', value);
		},
		set_be_description(value) {
			return this.setValue('@be_description', value);
		},
		assert_be_description(value){
			return this.assert.value('@be_description', value);
		},
		set_be_description_lang(value) {
			return this.setValue('@be_description_lang', value);
		},
		assert_be_description_lang(value){
			return this.assert.value('@be_description_lang', value);
		},
		set_be_related(value) {
			return this.setValue('@be_related', value);
		},
		assert_be_related(value){
			return this.assert.value('@be_related', value);
		},
		set_be_type(value) {
			return this.setValue('@be_type', value);
		},
		assert_be_type(value){
			return this.assert.value('@be_type', value);
		},
		le_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.le_click.selector]);
			this.assert.visible('@le_click');
			this.click('@le_click');
			return this;
		},
		set_le_identifier(value) {
			return this.setValue('@le_identifier', value);
		},
		assert_le_identifier(value){
			return this.assert.value('@le_identifier', value);
		},
		set_le_name(value) {
			return this.setValue('@le_name', value);
		},
		assert_le_name(value){
			return this.assert.value('@le_name', value);
		},
		set_le_name_lang(value) {
			return this.setValue('@le_name_lang', value);
		},
		assert_le_name_lang(value){
			return this.assert.value('@le_name_lang', value);
		},
		set_le_description(value) {
			return this.setValue('@le_description', value);
		},
		assert_le_description(value){
			return this.assert.value('@le_description', value);
		},
		set_le_description_lang(value) {
			return this.setValue('@le_description_lang', value);
		},
		assert_le_description_lang(value){
			return this.assert.value('@le_description_lang', value);
		},
		set_le_related(value) {
			return this.setValue('@le_related', value);
		},
		assert_le_related(value){
			return this.assert.value('@le_related', value);
		},
		set_le_type(value) {
			return this.setValue('@le_type', value);
		},
		assert_le_type(value){
			return this.assert.value('@le_type', value);
		},
		c_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.c_click.selector]);
			this.assert.visible('@c_click');
			this.click('@c_click');
			return this;
		},
		set_c_identifier(value) {
			return this.setValue('@c_identifier', value);
		},
		assert_c_identifier(value){
			return this.assert.value('@c_identifier', value);
		},
		set_c_name(value) {
			return this.setValue('@c_name', value);
		},
		assert_c_name(value){
			return this.assert.value('@c_name', value);
		},
		set_c_name_lang(value) {
			return this.setValue('@c_name_lang', value);
		},
		assert_c_name_lang(value){
			return this.assert.value('@c_name_lang', value);
		}
	}]
};