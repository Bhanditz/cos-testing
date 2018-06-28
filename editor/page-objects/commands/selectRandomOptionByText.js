// selectOptionByText.js

exports.command = function (elementId, callback) {
    var self = this;

    this.execute(
        function(args) {
            var jSel = jQuery(arguments[0]);
            if (jSel !== null) {
				var listOptions = jQuery(arguments[0] + " > option");
				var randomOption =   listOptions[Math.floor(Math.random() *  (listOptions.length-1)) + 1];
                jSel.val(randomOption.value).change();
                jSel.blur();
                return true;
            }
            return false;
        },
        [elementId],
        function (result) {
            console.log(result.state);
        });

    return this;
};
