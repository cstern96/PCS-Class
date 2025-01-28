const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) {
        console.error(err.message);
        return;
    }
    const lines = data.split('\n').length - 1;

    console.log(lines);
});
