/*!
 * list-deps <https://github.com/jonschlinkert/list-deps>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var assert = require('assert');
var listDeps = require('./');

describe('list deps', function () {
  it('should return dependencies from package.json:', function () {
    listDeps().should.eql({"load-pkg": "^0.2.0"});
  });

  it('should return devDependencies from package.json:', function () {
    listDeps('devDependencies').mocha.should.equal('*');
  });

  it('should return an empty object when nothing is found:', function () {
    listDeps('foo').should.eql({});
  });

  it('should return an empty object when nothing is found:', function () {
    listDeps('name').should.eql('list-deps');
  });
});

