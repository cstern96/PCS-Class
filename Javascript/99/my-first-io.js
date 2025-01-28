const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2], 'utf-8');

const numLines = fileContents.split('\n');

console.log(numLines.length - 1);

