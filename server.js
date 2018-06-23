const express = require('express')
const dotenv  = require('dotenv')
const app = express()

const beseProject = __dirname
const basePathHTML = beseProject + '/views/'
const basePathPublic = beseProject + '/public'


//.env
dotenv.config()
const port = process.env.START_PORT;

// GET
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// RENDER HTML
app.get('/test', (req, res) => {
	res.sendFile(basePathHTML + 'index.html');
})

// POST
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

// PUT
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

// DELETE
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

// SET Static folder
app.use('/static', express.static(basePathPublic))

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))