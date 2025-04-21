const express = require('express');

const app = express();

// app.get('/user', (req, res) => {
//     console.log(req.params)
//    res.send({firstName:'Veena' , lastName:'Biradar'})
// });

app.get('/user',(req , res) =>{
    res.send({firstName:'veena',lastName:'biradar'})
})
    
app.post('/user',(req, res) =>{
  res.send('sent successfully to database')
});

app.delete('/user', (req, res) => {
    res.send('Delete the user')
})


app.listen(3000,()=>{
    console.log(`server is succesfully listening at port 3000...`)
});