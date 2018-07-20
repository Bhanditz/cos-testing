var structure = require('./Structure.json');
var account = structure.account;
var po = structure.publicorganization;
var ps = structure.publicservice;

module.exports = { 
	getUsername : function(string) {
		var find_object = account.find(o => o.label === 'username');
		return find_object ;
	},
	getPassword : function(string) {
		var find_object  = account.find(o => o.label === 'password');
		return find_object ;
	},
	getPOIdentifier : function(string) {
		var find_object = po.find(o => o.label === 'identifier');
		return find_object ;
	},
	getPOIdentifier2 : function(string) {
		var find_object = po.find(o => o.label === 'identifier2');
		return find_object ;
	},
	getPOLabel : function(string) {
		var find_object = po.find(o => o.label === 'name');
		return find_object ;
	},
	getPSIdentifier : function(string) {
		var find_object = ps.find(o => o.label === 'identifier');
		return find_object ;
	},
	getPSName : function(string) {
		var find_object = ps.find(o => o.label === 'name');
		return find_object ;
	},
	getPSDescription : function(string) {
		var find_object = ps.find(o => o.label === 'description');
		return find_object ;
	}
};