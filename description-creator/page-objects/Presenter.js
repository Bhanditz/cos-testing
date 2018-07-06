module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_1'
		},
		ps_identifier: {
			selector: '(//div[text()="Identifier"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ps_name: {
			selector: '(//div[text()="Name"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_name_lang: {
			selector: '(//div[text()="Name"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_description: {
			selector: '(//div[text()="Description"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_description_lang: {
			selector: '(//div[text()="Description"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_keyword: {
			selector: '(//div[text()="Keyword"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_keyword_lang: {
			selector: '(//div[text()="Keyword"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_sector: {
			selector: '(//div[text()="Sector"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_type: {
			selector: '(//div[text()="Type"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_language: {
			selector: '(//div[text()="Language"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_status: {
			selector: '(//div[text()="Status"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_spatial: {
			selector: '(//div[text()="Spatial"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_pt: {
			selector: '(//div[text()="ProcessingTime"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ps_requires: {
			selector: '(//div[text()="Requires"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_related: {
			selector: '(//div[text()="Related"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ca_identifier: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="PreferredLabel"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel_lang: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="PreferredLabel"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ca_spatial: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Spatial"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		be_identifier: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		be_name: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		be_name_lang: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		be_description: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		be_description_lang: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		be_related: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="RelatedService"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		be_type: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		le_identifier: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		le_name: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		le_name_lang: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		le_description: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		le_description_lang: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		le_related: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="RelatedService"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		le_type: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		c_identifier: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		c_name: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		c_name_lang: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		assert_ps_identifier(value){
			return this.assert.containsText('@ps_identifier', value);
		},
		assert_ps_name(value){
			return this.assert.containsText('@ps_name', value);
		},
		assert_ps_name_lang(value){
			return this.assert.containsText('@ps_name_lang', value);
		},
		assert_ps_description(value){
			return this.assert.containsText('@ps_description', value);
		},
		assert_ps_description_lang(value){
			return this.assert.containsText('@ps_description_lang', value);
		},
		assert_ps_keyword(value){
			return this.assert.containsText('@ps_keyword', value);
		},
		assert_ps_keyword_lang(value){
			return this.assert.containsText('@ps_keyword_lang', value);
		},
		assert_ps_sector(value){
			return this.assert.containsText('@ps_sector', value);
		},
		assert_ps_type(value){
			return this.assert.containsText('@ps_type', value);
		},
		assert_ps_language(value){
			return this.assert.containsText('@ps_language', value);
		},
		assert_ps_status(value){
			return this.assert.containsText('@ps_status', value);
		},
		assert_ps_spatial(value){
			return this.assert.containsText('@ps_spatial', value);
		},
		assert_ps_pt(value){
			return this.assert.containsText('@ps_pt', value);
		},
		assert_ps_requires(value){
			return this.assert.containsText('@ps_requires', value);
		},
		assert_ps_related(value){
			return this.assert.containsText('@ps_related', value);
		},
		assert_ca_identifier(value){
			return this.assert.containsText('@ca_identifier', value);
		},
		assert_ca_preferredlabel(value){
			return this.assert.containsText('@ca_preferredlabel', value);
		},
		assert_ca_preferredlabel_lang(value){
			return this.assert.containsText('@ca_preferredlabel_lang', value);
		},
		assert_ca_spatial(value){
			return this.assert.containsText('@ca_spatial', value);
		},
		assert_be_identifier(value){
			return this.assert.containsText('@be_identifier', value);
		},
		assert_be_name(value){
			return this.assert.containsText('@be_name', value);
		},
		assert_be_name_lang(value){
			return this.assert.containsText('@be_name_lang', value);
		},
		assert_be_description(value){
			return this.assert.containsText('@be_description', value);
		},
		assert_be_description_lang(value){
			return this.assert.containsText('@be_description_lang', value);
		},
		assert_be_related(value){
			return this.assert.containsText('@be_related', value);
		},
		assert_be_type(value){
			return this.assert.containsText('@be_type', value);
		},
		assert_le_identifier(value){
			return this.assert.containsText('@le_identifier', value);
		},
		assert_le_name(value){
			return this.assert.containsText('@le_name', value);
		},
		assert_le_name_lang(value){
			return this.assert.containsText('@le_name_lang', value);
		},		
		assert_le_description(value){
			return this.assert.containsText('@le_description', value);
		},
		assert_le_description_lang(value){
			return this.assert.containsText('@le_description_lang', value);
		},
		assert_le_related(value){
			return this.assert.containsText('@le_related', value);
		},
		assert_le_type(value){
			return this.assert.containsText('@le_type', value);
		},
		assert_c_identifier(value){
			return this.assert.containsText('@c_identifier', value);
		},
		assert_c_name(value){
			return this.assert.containsText('@c_name', value);
		},
		assert_c_name_lang(value){
			return this.assert.containsText('@c_name_lang', value);
		}
	}]
};