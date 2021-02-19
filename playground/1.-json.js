
const fs = require('fs');

const fileData = fs.readFileSync('./1-json.json');
console.log(fileData);
const fileObj = JSON.parse(fileData);

fileObj.name = 'new Dilip';
fileObj.age = 37;

fs.writeFileSync('./1-json.json' ,JSON.stringify(fileObj));
