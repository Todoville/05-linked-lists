'use strict';

const { inspect } = require('util');

module.exports = (input, msg) => {
  console.log(inspect(input, { showHidden: true, depth: null }), msg || '');
};
