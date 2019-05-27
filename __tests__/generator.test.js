/* eslint-disable */
'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-trial:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'testing',
        description: 'Simple project',
        author: 'BuildTop',
        stack: 1,
        bundler: 2,
        version: '',
        githubRepo: "",
        license: ''
      });
  });

  it('creates files', () => {
    assert.file(['dist/testing']);
  });
});
