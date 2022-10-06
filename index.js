const fs = require('fs');


const data = fs.readFileSync('./text.txt','utf-8');
console.log(data);

const data1 = fs.appendFileSync('./text.txt','content','utf-8');
console.log(data1);

const data2 = fs.writeFileSync('./text.txt');