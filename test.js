/*!
 * list-deps <https://github.com/jonschlinkert/list-deps>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var deps = require('./');

it('should return dependencies from package.json:', function () {
  deps('dependencies').should.have.property('load-pkg');
  deps().should.have.property('load-pkg');
});

it('should return devDependencies from package.json:', function () {
  deps('devDependencies').mocha.should.equal('*');
  deps('devDependencies').should.should.be.a.string;
});

it('should return an empty object when nothing is found:', function () {
  deps('foo').should.eql({});
  deps('name').should.eql('list-deps');
});
