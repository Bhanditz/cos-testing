module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/node/add"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[2]/a',
			locateStrategy: 'xpath'
		},
		publicorganisation: {
			selector: '//a[@href = "/cpsv-ap_editor/node/add/public-organizations"]',
			locateStrategy: 'xpath'
		},
		publicservice: {
			selector: '//a[@href = "/cpsv-ap_editor/node/add/public-service"]',
			locateStrategy: 'xpath'
		},
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		add_publicorganisation() {
			return this.click('@publicorganisation');
		},
		add_publicservice(value) {
			return this.click('@publicservice');
		}
	}]
};