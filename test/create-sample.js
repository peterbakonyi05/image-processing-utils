'use strict';

const path = require('path');
const tu = require('./utils');

const { createSample } = require('../src');

describe('createSample', () => {
  it('should add a waterMark image and resize it to the desired size', () => {
    return createSample({
      sourcePath: tu.beachJpg,
      watermarkPath: tu.watermarkPng,
      destinationPath: tu.getOutputImagePath('create-sample-watermark-200height.jpg'),
      quality: 99,
      newSize: {
        height: 200
      }
    });
  });

  it('should not add a watermark when omitted', () => {
    return createSample({
      sourcePath: tu.beachJpg,
      destinationPath: tu.getOutputImagePath('create-sample-no-watermark-400width.jpg'),
      quality: 99,
      newSize: {
        width: 400
      }
    });
  });

  it('should set the quality correctly', () => {
    return createSample({
      sourcePath: tu.beachJpg,
      watermarkPath: tu.watermarkPng,
      destinationPath: tu.getOutputImagePath('create-sample-small-poor-quality.jpg'),
      quality: 50,
      newSize: {
        height: 100
      }
    });
  });
});
