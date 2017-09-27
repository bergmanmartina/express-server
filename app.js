const express = require('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	console.log ('nu är vi här')
res.send('Hello cats')
})
app.get('/om-mig', (req, res) => {
	console.log ('nu är det om mig')
res.send('Om mig')
})
app.listen(3000, (req, res) => {
console.log('open localhost:3000!')
})