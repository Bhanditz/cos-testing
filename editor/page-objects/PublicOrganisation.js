module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/node/add/public-organizations"; 
	},
	elements: {
		title: {
			selector: 'h1.page-title'
		},
		identifier: {
			selector: '#edit-title'
		},
		label: {
			selector: '#edit-field-preferred-label-und-0-value'
		},
		submit: {
			selector: '#edit-submit'
		},
		edit: {
			selector: '//div[@id="post-content"]/div[1]/ul[1]/li[2]/a',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		assert_title(value) {
			return this.getText('@title', function(result){
				this.assert.equal( result.value.toLowerCase(), value);
			})
		},
		set_identifier(value) {
			return this
					.clearValue('@identifier')
					.setValue('@identifier', value);
		},
		set_label(value) {
			return this
					.clearValue('@label')
					.setValue('@label', value);
		},
		save() {
			return this.click('@submit');
		},
		edit() {
			return this.click('@edit');
		},
	}]
};