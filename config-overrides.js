const { override, useBabelRc, addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = override(useBabelRc());