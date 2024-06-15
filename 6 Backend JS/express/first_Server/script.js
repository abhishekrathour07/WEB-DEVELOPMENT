import express from 'express'

let app = express();

let port = process.env.PORT || 3100;


app.get('/', (req, res) => {
    // console.log(req.rawHeaders); --> this is used to get the details about the server
    res.send("Congratulation Server created successfully"); //--> this is what display on server
});

app.get('/hp', (req, res) => {
    res.send("<h1> This is the Heading </h1><p>This is the testing paragrapg of nodemon </p> <button>Submit</button> <button>Reset</button> ");
})

// get --> getting the resource
// put --> replace the resource
// patch --> patchup the resouce ex:- cycle 
// delete--> delete the resouce frome server
// post  send the resource to server

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})