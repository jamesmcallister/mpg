const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

const listener = app.listen(0, () => {
  console.log(`Example app listening on port ${listener.address().port}!`)
})
