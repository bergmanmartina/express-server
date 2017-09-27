const express = require('express')
const app = express()
app.get('/', (req, res) => {
	console.log ('nu är vi här')
res.send('Hello cats')
})
app.get('/om-mig', (req, res) => {
	console.log ('nu är vi här')
res.send('Om mig')
})
app.listen(3000, (req, res) => {
console.log('open localhost:3000!')
})