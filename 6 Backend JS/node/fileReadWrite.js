// import { log } from 'console';
const fs  = require('fs')

// writing a file

// fs.writeFile('text1.txt', 'hello my name is abhishek kumar singh', (err) => {
//     if (err) throw err;
//     console.log('file created succesfully');
// })

// reading a file
fs.readFile('./text1.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
