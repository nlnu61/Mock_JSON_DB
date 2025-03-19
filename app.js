const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");


app.get('/home', (_req, res) =>{
    res.send('Middleware Triggered');
});

//example of middleware function
app.use((_req,_res, next) =>{
    const time = Date();
    console.log(time);

    next();
});


app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`);
});
