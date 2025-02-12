'use strict';
const mymodule = require('./mymodule.js');

const dirName = process.argv[2];

const type = process.argv[3];

mymodule(dirName, type, (err, list )=> {
    if(err){
        return console.error('There was an error:', err);
    }
    list.forEach((file) => {
        console.log(file);
    });
});