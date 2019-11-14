const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.listen('1337')

app.get('/', (req,res) => {

  res.send('Hello World')

})
