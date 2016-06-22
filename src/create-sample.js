'use strict';

const gm = require('gm');

module.exports = ({
  sourcePath,
  destinationPath,
  watermarkPath,
  quality = 99
}) => new Promise((resolve, reject) => {
  gm(sourcePath)
    .draw([`image over 0,0 0,0 "${watermarkPath}"`])
    .quality(quality)
    .write(destinationPath, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(destinationPath);
    });
});
