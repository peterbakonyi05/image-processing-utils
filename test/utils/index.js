'use strict';

const path = require('path');

module.exports = {
  beachJpg: path.join(__dirname, '../images/beach.jpg'),
  watermarkPng: path.join(__dirname, '../images/watermark.png'),
  getOutputImagePath(name) {
    return path.join(__dirname, `../tmp/${name}`);
  }
};
