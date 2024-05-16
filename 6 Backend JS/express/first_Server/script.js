import express from 'express'

let app = express();

let port = process.env.PORT || 3100; 


app.get('/',(req,res)=>{
    res.send("Congratulation Server created successfully");
});

app.get('/hp', (req,res)=>{
 res.send("<h1> This is the Heading </h1><p>This is the testing paragrapg of nodemon </p> <button>Submit</button> <button>Reset</button> ");

})

// get put patch delete post 

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})