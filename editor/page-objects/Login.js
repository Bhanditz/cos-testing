module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/user"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[3]/a',
			locateStrategy: 'xpath'
		},
		username: {
			selector: '#edit-name'
		},
		password: {
			selector: '#edit-pass'
		},
		login: {
			selector: '#edit-submit'
		}
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		set_username(value) {
			return this.setValue('@username', value);
		},
		set_password(value) {
			return this.setValue('@password', value);
		},
		login() {
			return this.click('@login');
		}
	}]
};