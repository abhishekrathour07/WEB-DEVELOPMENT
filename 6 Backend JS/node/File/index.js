import fs from 'fs';


// writing a data file
// fs.writeFile('index.txt', 'this is index of txt file', (err) => {
//     if (err) throw err;
//     console.log('data written successfully ');
// });


// Reading a data file

fs.readFile('./index.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
