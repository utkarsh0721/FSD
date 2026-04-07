require('dotenv').config();
const connectDB = require('./src/db/db');
const app = require('./src/app');
connectDB();
app.listen(5000,()=>{
    console.log('Server started on port 5000');
})

