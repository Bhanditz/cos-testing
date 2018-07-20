module.exports = {
	url: function() { 
		return "http://cpsv-ap.semic.eu:8890/cpsv-ap_editor/browse-all-content"; 
	},
	elements: {
		tab: {
			selector: '//div[@id = "main-menu"]/ul[1]/li[3]/a',
			locateStrategy: 'xpath'
		},
		search_title: {
			selector: '#edit-title'
		},
		button_apply: {
			selector: '#edit-submit-browse-all-content'
		},
		result_title: {
			selector: '//div[@class="view-content"]/table[1]/tbody[1]/tr[1]/td[1]/span[1]/h4/a',
			locateStrategy: 'xpath'
		},
		delete: {
			selector: '//div[@class="view-content"]/table[1]/tbody[1]/tr[1]/td[1]/div[3]/span/a',
			locateStrategy: 'xpath'
		},
		sure_delete: {
			selector: '#edit-submit'
		},
		msg_item_deleted: {
			selector: '//div[@class="messages"]/em',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		apply() {
			return this.click('@button_apply');
		},
		set_search_title(value) {
			return this
				.clearValue('@search_title')
				.setValue('@search_title', value);
		},
		verify_title(value) {
			return this.getText('@result_title', function(result){
				this.assert.equal( result.value.toLowerCase(), value);
			});
		},
		delete() {
			return this.click('@delete');
		},
		sure_delete() {
			return this.click('@sure_delete');
		},
		verify_msg_item_deleted(value) {
			return this.assert.containsText('@msg_item_deleted', value);
		}
	}]
};