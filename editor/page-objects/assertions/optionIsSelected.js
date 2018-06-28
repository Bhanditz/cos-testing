// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector, selected_value) {
  this.message = 'Testing if element <' + selector + '> has selected: ' + selected_value;
  this.expected = selected_value;
  this.pass = function (val) {
    return val === this.expected;
  }
  this.value = function (res) {
    return res.value;
  }
  this.command = function (cb) {
    var self = this;
    return this.api.execute(function (selector) {
		return  jQuery(selector + " option:selected").text();
    }, [selector], function (res) {
      cb.call(self, res);
    });
  }
}
