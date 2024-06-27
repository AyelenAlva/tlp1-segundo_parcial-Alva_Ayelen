const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usuarios = require('./routers/usuarios')


const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use('/usuarios', usuarios)

app.listen(3000, ()=>{
    console.log('El servidor esta escuchando en el localhost:3000')
})