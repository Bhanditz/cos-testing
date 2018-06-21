// selectOptionByText.js

exports.command = function (elementId, data, callback) {
    var self = this;

    this.execute(
        function(args) {
            var jSel = jQuery(arguments[0]);
            var selection = arguments[1];
            if (jSel != null) {
				jQuery(arguments[0] + " > option").each(function() {
                    if (this.text.toLowerCase() === selection.toLowerCase()) {

                        jSel.val(this.value).change();
                        jSel.blur();

                        return true;
                    }
                });
            }
            return false;
        },
        [elementId, data],
        function (result) {
            console.log(result.state);
        });

    return this;
};