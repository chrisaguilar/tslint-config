const { dirname, join } = require('path');
const { resolve } = require;

const eslint = require('./src/tslint-eslint-rules');
const microsoft_contrib = require('./src/tslint-microsoft-contrib');
const react = require('./src/tslint-react');
const tslint = require('./src/tslint');

module.exports = {
  "rulesDirectory": [
    join(dirname(resolve("tslint-eslint-rules")), '/dist/rules'),
    dirname(resolve("tslint-microsoft-contrib")),
    join(dirname(resolve("tslint-react")), '/rules'),
    join(dirname(resolve("tslint")), '/rules')
  ],
  "rules": Object.assign({}, eslint, microsoft_contrib, react, tslint)
}
