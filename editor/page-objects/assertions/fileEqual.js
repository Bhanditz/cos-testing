// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
var fs = require('fs');

exports.assertion = function (testdata_file) {
  var downloaded_file = fs.readFileSync('downloads/export.rdf', { 'encoding': 'utf8'}).replace(/[\n\r]+/g, '');
  this.message = 'Testing if file ' + testdata_file + ' is the same as ' + 'downloads/export.rdf';
  this.expected = downloaded_file;
  this.pass = function (val) {
    return val === this.expected;
  };
  this.value = function (res) {
    return res.value;
  };
  this.command = function (cb) {
    var self = this;
    return this.api.execute(function (testdata_file) {
		return testdata_file.replace(/[\n\r]+/g, '');
    }, [testdata_file], function (res) {
      cb.call(self, res);
    });
  };
};
