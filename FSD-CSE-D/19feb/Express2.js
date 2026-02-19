// Import express
const express = require('express');
const app = express();

const port = 9090;

//Respond to GET request on the root route
app.get('/',(req,res) =>{
    res.send('GET request to homepage');
});

// Respond to POST request on the root route
app.post('/',(req,res) =>{
    res.send('POST request to homepage');
});

//Respond to GET request on the /abort route
app.get('/about',(req,res) =>{
    res.send('About page');
});

//Catch all other routes
// app.all('*',(req,res) =>{
//     res.status(404).send('404-Page Not Found');
// });
app.use((req,res)=>{
    res.status(404).send("page not found || route  not found")
})

app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`);
});