const express = require('express');
const app = express();
const port = 8080;

// Middleware function to log request details
app.use(express.json()); // Middleware to parse JSON bodies

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(express.static('public')); // Middleware to serve static files from the 'public' directory

app.post('/api/users',(req,res)=>{
    console.log(req.body);
    res.status(201).json({ message: 'User created successfully', user: req.body });
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})