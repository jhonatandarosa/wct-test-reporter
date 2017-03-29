"use strict";

let TestReporter = require('./TestReporter');

class JSONReporter extends TestReporter {

    constructor(options) {
        super(options);
    }

    onStart(context) {
        this.json = {
            browsers: {},
            files: {}
        }

    }

    onBrowserStart(browser, sharedState, stats) {
        this.json.browsers[browser.id] = browser;
    }

    onTestStart(browser, testInfo, stats) {
        let files = this.json.files;
        let test = testInfo.test;
        let fileData = files[test[0]] = files[test[0]] || {
                suites: {}
        };
        let suiteData = fileData.suites[test[1]] = fileData.suites[test[1]] || {
            tests: {}
        };
        let testData = suiteData.tests[test[2]] = suiteData.tests[test[2]] || {
                file: test[0],
                suite: test[1],
                test: test[2],
                results: []
        };
        testData.results.push({
            browser: browser.id,
            start: process.hrtime()
        });
    }

    onTestEnd(browser, testInfo, stats) {
        let files = this.json.files;
        let test = testInfo.test;
        let fileData = files[test[0]];
        let suiteData = fileData.suites[test[1]];
        let testData = suiteData.tests[test[2]];
        let result = testData.results.find((element) => { return element.browser == browser.id});
        result.end = process.hrtime();
        result.time = [result.end[0] - result.start[0], result.end[1] - result.start[1]];
        result.state = testInfo.state;
    }

    onEnd(error) {
        let file = this.options.output;
        let data = JSON.stringify(this.json, undefined, 4);
        if (file === 'console') {
            console.log(data);
        } else {
            this.writeToFile(data, file);
        }
    }
}

module.exports = JSONReporter;