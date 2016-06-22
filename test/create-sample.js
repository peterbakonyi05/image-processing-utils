'use strict';

const path = require('path');
const tu = require('./utils');

const { createSample } = require('../src');

describe('createSample', () => {
  it('should add a waterMark image and resize it to the desired size', () => {
    return createSample({
      sourcePath: tu.beachJpg,
      watermarkPath: tu.watermarkPng,
      destinationPath: tu.getOutputImagePath('create-sample.jpg'),
      quality: 99
    });
  });
});
