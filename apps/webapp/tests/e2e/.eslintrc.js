/* eslint-disable */
const path = require('path');
const synpressPath = path.join(process.cwd(), '/node_modules/@synthetixio/synpress');

console.log('synpress PATH', synpressPath);

module.exports = {
  extends: `${synpressPath}/.eslintrc.js`
};
