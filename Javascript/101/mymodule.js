'use strict';
const fs = require('fs');

module.exports = function(dirName, extention, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) {
            return callback(err);
        }

        const filteredFiles = list.filter(file => file.endsWith('.' + extention));

        callback(null, filteredFiles);
    });
};  