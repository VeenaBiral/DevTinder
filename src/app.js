const express = require('express');

const app = express();

app.use('/',( req, res)=>{
   res.send('Hello World!')
});

app.use('/test',(req, res)=>{
   res.send('Testing the server')
})

app.use('/home',(req, res) =>{
    res.send('welcome to home page')
})

app.listen(3000,()=>{
    console.log(`server is succesfully listening at port 3000...`)
});