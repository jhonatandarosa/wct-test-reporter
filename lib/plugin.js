let reporters = require('./reporters');
let path = require('path');

function initPlugin(wct, pluginOptions, plugin) {
    if (pluginOptions === undefined) {
        return;
    }
    let reporter = pluginOptions.reporter;
    let ReporterType = reporters[reporter];

    if (ReporterType === undefined) {
        if (reporter.endsWith('.js')) {
            console.info('Using custom reporter [' + reporter + ']');
            let fullPath = path.resolve(process.cwd(), reporter);
            ReporterType = require(fullPath);
        } else {
            throw new Error('Unknown reporter! \n' + JSON.stringify(pluginOptions, undefined, 4));
        }
    }

    if (ReporterType) {
        let instance = new ReporterType(pluginOptions);
        instance.bindEvents(wct);
    }
}

module.exports = initPlugin;

module.exports.TestReporter = require('./TestReporter');
module.exports.reporters = reporters;