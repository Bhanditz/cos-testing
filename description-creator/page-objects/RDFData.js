module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		textarea: {
			selector: '#dijit_form_SimpleTextarea_1'
		},
		upload: {
			selector: 'input[type="file"]'
		},
		download: {
			selector: '//button[text()="download"]',
			locateStrategy: 'xpath'
		},
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit__WidgetsInTemplateMixin_0'
		}
	}
};