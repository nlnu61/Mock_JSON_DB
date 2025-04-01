const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/users.js');

//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");

//rate limiter
const fixedwindowLimiter = rateLimit({
    windowMS: 1 * 15 * 1000,
max: 10,
message: 'Too many requests. Please try again later',

})

app.use(fixedwindowLimiter);

app.use(express.static('public'));
app.use(userRoutes);

app.listen(PORT, ()=>{
    console.log(`Connected to port: ${PORT}`);
});


