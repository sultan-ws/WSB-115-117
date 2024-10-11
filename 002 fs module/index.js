const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'files');

//create file
// fs.writeFileSync(`${filepath}/index.txt`, '<h1>hello everyone</h1>');

//read file
// fs.readFile(`${filepath}/index.html`, 'utf-8', (error, data)=>{
//     if(error) return console.log(error);

//     console.log(data);
// });

//append file

// fs.appendFile(`${filepath}/index.txt`, ' and updated now', (error)=>{
//     if(error) return console.log(error);
//     console.log('file updated');
// });

//delete

// fs.unlinkSync(`${filepath}/index.txt`);