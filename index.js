/*!
 * list-deps <https://github.com/jonschlinkert/list-deps>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var loadPkg = require('load-pkg');

module.exports = function (type) {
  var deps = loadPkg[type || 'dependencies'];
  if (deps) {
    return deps;
  }
  return {};
};