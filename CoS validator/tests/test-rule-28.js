var testid = "28", testname = casper.cli.get("testname") + testid;
casper.test.begin(testname, 2, function suite(test) {
    casper.start(casper.cli.get("url") + '/' + casper.cli.get("page"), function() {
        var file = '.\\' + casper.cli.get("testdata") + '\\' + testname + '.rdf';
        this.page.uploadFile('input[type="file"]', file);
        this.click('div.more');
        this.wait(300, function() {
            this.sendKeys('input#tab1endpoint', casper.cli.get("url") + '/' + casper.cli.get("endpoint"), {reset: true});
            //if (casper.cli.has("output")) {this.capture(casper.cli.get("output") + '/' + testname + '-0.png'); }
            this.click('button[id="tab1validate"]');
        });
    });

    casper.then(function() {
        this.waitForResource(casper.cli.get("url") + '/sparql', function() {
            //if (casper.cli.has("output")) {this.capture(casper.cli.get("output") + '/' + testname + '-1.png'); }
			this.page.injectJs('.\\' + casper.cli.get("testdata") + '\\jquery.js');
            var results, violationid;
			var results= this.evaluate(function () {
				return $("#results tbody tr").length; // jquery here
			});
			//this.echo(results);
            test.assertEquals(results, 1);
			var violationid= this.evaluate(function () {
				return $("#results tbody tr:nth-child(1) td:nth-child(2) a").text(); // jquery here
			});
            //this.echo(violationid);
            test.assertEquals(violationid, testid);
        }, 3000);
    });

    casper.run(function() {
        test.done();
    });
});