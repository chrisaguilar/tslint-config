const { dirname, join } = require('path');
const { resolve } = require;

const microsoft_contrib = require('./src/tslint-microsoft-contrib.js');
const react = require('./src/tslint-react.js');
const tslint = require('./src/tslint.js');

module.exports = {
    defaultSeverity: 'warn',
    rulesDirectory: [
        dirname(resolve('tslint-microsoft-contrib')),
        join(dirname(resolve('tslint-react')), '/rules'),
        join(dirname(resolve('tslint')), '/rules')
    ],
    rules: Object.assign({}, microsoft_contrib, react, tslint)
};
