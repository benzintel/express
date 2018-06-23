const app = express()
const express = require('express')
const dotenv  = require('dotenv')
const port = 3000;

app.get('/', (req, res) => 
	res.send('Hello World!')
)

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

// Static Files
app.use('/static', express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))