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
        scaffold_name: 'testing',
        description: 'Simple Scaffold',
        main: 'index.js',
        github_repo: '',
        author: '',
        license: ''
      });
  });

  it('creates files', () => {
    assert.file(['webpack-scaffold-testing']);
  });
});
