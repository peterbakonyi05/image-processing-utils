'use strict';

const path = require('path');

const { sepia } = require('../src');

const sourceImagePath1 = path.join(__dirname, 'images/beach.jpg');

function getOutputImagePath(name) {
  return path.join(__dirname, `tmp/${name}`);
}

describe('sepia', () => {
  it('should work with jpg image', () => {
    return sepia({
      sourcePath: sourceImagePath1,
      destinationPath: getOutputImagePath('sepia.jpg')
    });
  });
});
