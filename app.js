const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.env.APP_PORT || 3000
const cors = require('cors')


app.use( bodyParser.json() );       // to support JSON-encoded body
app.use(bodyParser.urlencoded({     // to support URL-encoded body
  extended: true
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())
app.use('/product',  require('./routes/ProductRouter')())
app.use('/users',  require('./routes/UserRouter')())

app.listen(port, () => {
  console.log(`Server Listening @ http://localhost:${port}`)
})