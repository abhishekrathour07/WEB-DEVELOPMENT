import express from 'express';

const app = express();

const port = process.env.PORT || 3200;

app.get('/', (req, res) => {
    res.send("Creation of server successfully")
})

app.get('/aboutus', (req, res) => {
    res.send(`<h1>Introduction</h1> <p> this is the testing introduction of the file which name is second> script .js<p>`)
});
app.get('/contactUs/ ', (req,res)=>{
    res.send("<h1>contact number: </h1> <p>+93344824884<p>")
})
app.get('/contactUs/ ', (req,res)=>{
    res.send("<h1>contact number: </h1> <p>+93344824884<p>")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});










