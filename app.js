const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || process.env.APP_PORT || 3000
const cors = require('cors')
require('dotenv').config()


app.use( bodyParser.json() );       // to support JSON-encoded body
app.use(bodyParser.urlencoded({     // to support URL-encoded body
  extended: true
}));


app.get('/', (req, res) => {
  res.json({
    message: `Serve API Listening on http://localhost:${port}${process.env.PREFIX}`
  })
})


app.use(cors())
app.use(`${process.env.PREFIX}/product`,  require('./routes/ProductRouter')())
app.use(`${process.env.PREFIX}/users`,  require('./routes/UserRouter')())

app.listen(port, () => {
  console.log(`Server Listening @ http://localhost:${port}`)
  console.log(`Serve API Listening on http://localhost:${port}${process.env.PREFIX}`)
})