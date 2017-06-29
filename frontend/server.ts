const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/ping', function (req, res) {
  res.send('pong')
})

const listener = app.listen(0, function () {
  console.log(`Example app listening on port ${listener.address().port}!`)
})