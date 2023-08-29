//import express
const express = require('express');

const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

//initialize express
const app = express();
const port = 5000;

//Middlewares
app.use(express.json());

app.use('/user', userRouter);
app.use('/product', productRouter);

//routes
app.get('/', (req, res) => {
    res.send("Response from Express");
});

app.get('/home', (req, res) => {
    res.send("Response from Home");
});

app.get('/add', (req, res) => {
    res.send("Response from Add");
});

app.get('/getall', (req, res) => {
    res.send("Response from GetAll");
});

// home
// add
// getall

//starting the server
app.listen(port, () => { console.log('Server started at port ' + port)});