import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
    message: 'Enter the URL',
    name: 'URL',
}])
    .then((answer) => {
        let url = answer.URL;
        let qrimage = qr.image(url, { type: 'png' });
        let createfile = fs.createWriteStream('qrImg1.png')
        qrimage.pipe(createfile);

        fs.writeFile('url.txt',url,(err)=>{
            if(err) throw err;
            console.log('qr created successfully');
        })
    })
    .catch((err) => {
        if (err) throw err;
    });
f