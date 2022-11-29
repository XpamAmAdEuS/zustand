// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../.eslintrc.js');
config.rules = { ...config.rules };
module.exports = config;
