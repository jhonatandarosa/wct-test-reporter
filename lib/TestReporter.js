let fs = require('fs');

class TestReporter {

    constructor(options) {
        this.options = options;
    }

    bindEvents(wct) {
        wct.on('run-start', this.onStart.bind(this));
        wct.on('run-end', this.onEnd.bind(this));
        wct.on('browser-start', this.onBrowserStart.bind(this));
        wct.on('browser-end', this.onBrowserEnd.bind(this));
        wct.on('sub-suite-start', this.onSuiteStart.bind(this));
        wct.on('sub-suite-end', this.onSuiteEnd.bind(this));
        wct.on('test-start', this.onTestStart.bind(this));
        wct.on('test-end', this.onTestEnd.bind(this));
    }

    onStart(context) {
    }

    onEnd(error) {
    }

    onBrowserStart(browser, sharedState, stats) {
    }

    onBrowserEnd(browser, sharedState, stats) {
    }

    onSuiteStart(browser, sharedState, stats) {
    }

    onSuiteEnd(browser, sharedState, stats) {
    }

    onTestStart(browser, testInfo, stats) {
    }

    onTestEnd(browser, testInfo, stats) {

    }

    writeToFile(data, file) {
        fs.writeFileSync(file, data);
    }
}

module.exports = TestReporter;
