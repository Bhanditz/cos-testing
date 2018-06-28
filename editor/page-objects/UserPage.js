module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/user/2"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[3]/a',
			locateStrategy: 'xpath'
		},
		username: {
			selector: '//div[@id = "post-content"]/h1[1]',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		assert_username(value) {
			return this.getText('@username', function(result){
				this.assert.equal( result.value.toLowerCase(), value);
			})
		}
	}]
};