'use strict';

const gm = require('gm');

module.exports = ({
  sourcePath,
  destinationPath
}) => new Promise((resolve, reject) => {
  gm(sourcePath)
    .sepia()
    .write(destinationPath, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(destinationPath);
    });
});
