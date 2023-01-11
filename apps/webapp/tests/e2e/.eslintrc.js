/* eslint-disable */
const path = require('path');
const synpressPath = path.join(process.cwd(), '/apps/webapp/node_modules/@synthetixio/synpress');

module.exports = {
  extends: `${synpressPath}/.eslintrc.js`
};
