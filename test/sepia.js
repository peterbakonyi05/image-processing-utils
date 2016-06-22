'use strict';

const path = require('path');
const tu = require('./utils');

const { sepia } = require('../src');

describe('sepia', () => {
  it('should work with jpg image', () => {
    return sepia({
      sourcePath: tu.beachJpg,
      destinationPath: tu.getOutputImagePath('sepia.jpg')
    });
  });
});
