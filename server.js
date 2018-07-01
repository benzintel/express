import express from 'express'
import dotenv  from 'dotenv'

// connection DB
import { mySqlconnection }  from './connection/mysql'

const app  = express();
const beseProject = __dirname
const basePathHTML = beseProject + '/views/'
const basePathPublic = beseProject + '/public'

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//.env
dotenv.config()
const port = process.env.START_PORT;

// GET
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// RENDER HTML
app.get('/test', (req, res) => {
	res.render(basePathHTML + 'index.html', { 
		name: "benzintel"
	})
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

app.get('/mysql', (req, res) => {
	mySqlconnection('dbname', "SELECT * FROM users", function(result) {
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(result));
	});
})

// SET Static folder
app.use('/static', express.static(basePathPublic))

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))