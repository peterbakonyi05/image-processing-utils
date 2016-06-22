'use strict';

const gm = require('gm');

const getImageSize = require('./get-image-size');

// NOTE: this function adds the watermark once to the top center of the image
//       other watermarking strategy can be added if needed,
//       just return another array with this format
function getDefaultWatermarkDrawings(sourceSize, watermarkSize, watermarkPath) {
  if (sourceSize.width < watermarkSize.width || sourceSize.heigth < watermarkSize.height) {
    throw new Error('Watermark cannot be larger than the source image');
  }

  const x0 = sourceSize.width * 0.2;
  const y0 = sourceSize.height * 0.05;
  const w = sourceSize.width * 0.6;
  const h = w * watermarkSize.height / watermarkSize.width;

  // image operator x0,y0 w,h filename
  return [`image over ${x0},${y0} ${w},${h} "${watermarkPath}"`];
}

/**
 * @param {string} sourcePath
 * @param {string} destinationPath
 * @param {string} [watermarkPath=null]
 * @param {number} [quality=100] 0-100
 * @param {{width: [number], height: [number]}} [newSize]
 */
module.exports = ({
  sourcePath,
  destinationPath,
  watermarkPath = null,
  quality = 100,
  newSize = null
}) => new Promise((resolve, reject) => {
  getImageSize(watermarkPath ? [sourcePath, watermarkPath] : [sourcePath])
    .then(sizes => {
      let s = gm(sourcePath);

      if (watermarkPath) {
        s = s.draw(getDefaultWatermarkDrawings(sizes[0], sizes[1], watermarkPath));
      }

      if (quality) {
        s = s.quality(quality);
      }

      if (newSize) {
        s = s.resize(newSize.width || null, newSize.height || undefined);
      }

      s.write(destinationPath, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(destinationPath);
      });
    });
});
