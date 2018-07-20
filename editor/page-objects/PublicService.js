module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/node/add/public-service"; 
	},
	elements: {
		title: {
			selector: 'h1.page-title'
		},
		identifier: {
			selector: '#edit-title'
		},
		name: {
			selector: '#edit-field-name-en-0-value'
		},
		description: {
			selector: '#edit-field-description-und-0-value'
		},
		select_hascompetentauthority: {
			selector: '#edit-field-competent-authority-und'
		},
		submit: {
			selector: '#edit-submit'
		}
	},

	commands: [{
		assert_title(value) {
			return this.getText('@title', function(result){
				this.assert.equal( result.value.toLowerCase(), value);
			})
		},
		set_identifier(value) {
			return this.setValue('@identifier', value);
		},
		set_name(value) {
			return this.setValue('@name', value);
		},
		set_description(value) {
			return this.setValue('@description', value);
		},
		set_select_hascompetentauthority(value) {
			return this.selectOptionByText(this.elements.select_hascompetentauthority.selector,value);
		},
		save() {
			return this.click('@submit');
		}
	}]
};