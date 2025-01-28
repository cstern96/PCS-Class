const fs = require('fs');

const dirName = process.argv[2];

const type = process.argv[3];

fs.readdir(dirName, (err, list) => {
    if (err) {
        console.error(err.message);
        return;
    }
    for (const file of list) {
        if (file.endsWith('.' + type)) {
            console.log(file);
        }
    }

});

