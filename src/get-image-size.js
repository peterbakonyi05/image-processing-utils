'use strict';

const _ = require('lodash');
const gm = require('gm');

function getImageSize(imagePath) {
  return new Promise((resolve, reject) => {
    gm(imagePath).size((err, size) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(size);
    });
  });
}

/**
 * @param {string|[string]} imagePath
 * @returns {Promise}
 */
module.exports = (imagePath) => {
  if (_.isString(imagePath)) {
    return getImageSize(imagePath);
  }

  if (_.isArray(imagePath)) {
    return Promise.all(imagePath.map(imgPath => getImageSize(imgPath)));
  }

  throw new TypeError('Invalid argument supplied to size');
};
