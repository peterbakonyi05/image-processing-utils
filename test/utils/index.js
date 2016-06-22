'use strict';

const path = require('path');

module.exports = {
  beachJpg: path.join(__dirname, '../images/beach.jpg'),
  beachJpgSize: {
    width: 800, // px
    height: 450 // px
  },
  watermarkPng: path.join(__dirname, '../images/watermark.png'),
  watermarkPngSize: {
    width: 128, // px
    height: 128 // px
  },
  getOutputImagePath(name) {
    return path.join(__dirname, `../tmp/${name}`);
  }
};
