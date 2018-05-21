module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
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
		ca_spatial: {
			selector: '(//span[text()="HasCompetentAuthority"])[1]/../../div[2]/div[1]/div[3]/div[1]/span[text()="Spatial"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		}
	}
};