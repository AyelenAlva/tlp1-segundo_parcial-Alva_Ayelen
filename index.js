const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const products = require('./routers/products')


const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use('/', products)

app.listen(4000, ()=>{
    console.log('El servidor esta escuchando en el localhost:4000')
})