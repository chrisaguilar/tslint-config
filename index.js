const eslint = require('./src/tslint-eslint-rules');
const msft = require('./src/tslint-microsoft-contrib');
const react = require('./src/tslint-react');
const tslint = require('./src/tslint');

module.exports = {
  "rulesDirectory": [
    "node_modules/tslint-eslint-rules/dist/rules",
    "node_modules/tslint-microsoft-contrib",
    "node_modules/tslint-react/rules",
    "node_modules/tslint/lib/rules"
  ],
  "rules": Object.assign({}, eslint, msft, react, tslint)
}
