const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/',(req,res)=>{
    const {name}= req.body;
    res.status(200).send(`hello ${name}`);
});

app.get('/abc',(req,res)=>{
    res.send('Hello World 2');
});

app.listen(PORT,(error)=>{
    if(error){
        console.log('Error in starting the server');
    }else{
        console.log(`Server is running on port ${PORT}`);
    }
})
