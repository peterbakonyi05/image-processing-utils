'use strict';

const createSample = require('./create-sample');
const sepia = require('./sepia');
const getImageSize = require('./get-image-size');

/**
 * @module main
 */
module.exports = {

  /**
   * @type {module:create-sample}
   */
  createSample,

  /**
   * @type {module:sepia}
   */
  sepia,

  /**
   * @type {module:get-image-size}
   */
  getImageSize
};
