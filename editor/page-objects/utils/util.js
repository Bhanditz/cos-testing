var structure = require('./Structure.json');
var account = structure.account;

module.exports = { 
	getUsername : function(string) {
		var find_object = account.find(o => o.label === 'username');
		return find_object ;
	},
	getPassword : function(string) {
		var find_object  = account.find(o => o.label === 'password');
		return find_object ;
	}
};