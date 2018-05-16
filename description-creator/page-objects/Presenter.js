module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		ps_identifier: {
			selector: '(//div[text()="Identifier"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ps_name: {
			selector: '(//div[text()="Name"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_1'
		}
	}
};