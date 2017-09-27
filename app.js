const express = require('express')
const app = express()
app.get('/', (req, res) => {
	console.log ('nu är vi här')
res.send('Hello cats')
})
app.listen(3000, (req, res) => {
console.log('open localhost:3000!')
})