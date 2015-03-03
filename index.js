/*!
 * list-deps <https://github.com/jonschlinkert/list-deps>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var pkg = require('load-pkg');

module.exports = function listDeps(type) {
  type = type || 'dependencies';
  if (pkg.hasOwnProperty(type)) {
    return pkg[type];
  }
  return {};
};
