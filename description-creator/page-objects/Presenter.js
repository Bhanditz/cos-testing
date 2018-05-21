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
		ca_spatial: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Spatial"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		}

	}
};