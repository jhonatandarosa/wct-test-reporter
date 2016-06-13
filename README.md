wct-test-reporter
-----------------
Plugin to generate wct reporters

## Installation
```bash
$ npm install wct-test-reporter
```


## Usage

### Basic

```js
//wct.conf.js
module.exports = {
    plugins: {
        ...
        "test-reporter": {
            reporter: "json",
            output: "test_result.json"
        }
        ...
    }
};

```

## Reporters

- JSON Reporter ( ```reporter: 'json'``` )
options types:
```output: console``` Write results to console in json format
```output: '<filename>'``` Write results to <filename> in json format

- Customized Reporter ( ```reporter: '<filename>'```)
use a customized reporter defined at <filename>

Defining a custom reporter
```js
let TestReporter = require('wct-test-reporter').TestReporter;

class CustomReporter extends TestReporter {
    
    constructor(options) {
        super(options);
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
}
module.exports = CustomReporter;
```
