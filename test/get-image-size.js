'use strict';

const assert = require('chai').assert;
const tu = require('./utils');

const { getImageSize } = require('../src');

describe('getImageSize', () => {
  it('should resolve a promise with a correct size', () => {
    return getImageSize(tu.beachJpg)
      .then(({ width, height }) => {
        assert.equal(width, tu.beachJpgSize.width);
        assert.equal(height, tu.beachJpgSize.height);
      });
  });

  it('should accept an array of images', () => {
    return getImageSize([tu.beachJpg, tu.watermarkPng])
      .then((imageSizes) => {
        assert.equal(imageSizes[0].width, tu.beachJpgSize.width);
        assert.equal(imageSizes[0].height, tu.beachJpgSize.height);

        assert.equal(imageSizes[1].width, tu.watermarkPngSize.width);
        assert.equal(imageSizes[1].height, tu.watermarkPngSize.height);
      });
  });
});
