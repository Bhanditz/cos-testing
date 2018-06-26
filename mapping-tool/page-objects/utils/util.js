var structure = require('./Structure.json');
var struct = structure.structure;
var relation = structure.relation;
var CPSVAPClass = structure.CPSVAPClass;
var CPSVAPProperty = structure.CPSVAPProperty;

module.exports = { 
	getSourceModel : function(string) {
		var find_object = struct.find(o => o.value === 'testmodel1');
		return find_object ;
	},
	getTargetModel : function(string) {
		var find_object  = struct.find(o => o.value === 'testmodel2');
		return find_object ;
	},
	getSourceClass : function(string) {
		var find_object = struct.find(o => o.value === 'PublicService1');
		return find_object ;
	},
	getTargetClass : function(string) {
		var find_object  = struct.find(o => o.value === 'PublicService2');
		return find_object ;
	},
	getSourceProperty1 : function(string) {
		var find_object = struct.find(o => o.value === 'identifier1');
		return find_object ;
	},
	getTargetProperty1 : function(string) {
		var find_object  = struct.find(o => o.value === 'identifier2');
		return find_object ;
	},
	getSourceProperty2 : function(string) {
		var find_object = struct.find(o => o.value === 'description1');
		return find_object ;
	},
	getTargetProperty2 : function(string) {
		var find_object  = struct.find(o => o.value === 'description2');
		return find_object ;
	},
	getSourceProperty3 : function(string) {
		var find_object = struct.find(o => o.value === 'keyword1');
		return find_object ;
	},
	getTargetProperty3 : function(string) {
		var find_object  = struct.find(o => o.value === 'keyword2');
		return find_object ;
	},
	getSourceProperty4 : function(string) {
		var find_object = struct.find(o => o.value === 'language1');
		return find_object ;
	},
	getTargetProperty4 : function(string) {
		var find_object  = struct.find(o => o.value === 'language2');
		return find_object ;
	},
	getSourceProperty5 : function(string) {
		var find_object = struct.find(o => o.value === 'sector1');
		return find_object ;
	},
	getTargetProperty5 : function(string) {
		var find_object  = struct.find(o => o.value === 'sector2');
		return find_object ;
	},
	getRelation1: function() {
		var find_object = relation.find(o => o.value === 'Close match');
		return find_object;
	},
	getRelation2: function() {
		var find_object = relation.find(o => o.value === 'Exact match');
		return find_object;
	},
	getRelation3: function() {
		var find_object = relation.find(o => o.value === 'Narrow match');
		return find_object;
	},
	getRelation4: function() {
		var find_object = relation.find(o => o.value === 'Related match');
		return find_object;
	},
	getRelation5: function() {
		var find_object = relation.find(o => o.value === 'Broad match');
		return find_object;
	},
	getRandomRelation: function() {
		var rel = relation[Math.floor(Math.random() * relation.length)];
		return rel;
	},
	getNextRelation: function(rel) {
		var index = relation.indexOf(rel);
		var index2 = (index+1)%relation.length;
		return relation[index2];
	},
	getTargetCPSVAPModel : function(string) {
		var find_object  = struct.find(o => o.value === 'testmodel');
		return find_object ;
	},
	getRandomSourceClass: function() {
		var rel = CPSVAPClass[Math.floor(Math.random() * CPSVAPClass.length)];
		return rel;
	},
	getRandomSourceProperty: function() {
		var rel = CPSVAPProperty[Math.floor(Math.random() * CPSVAPProperty.length)];
		return rel;
	}
};