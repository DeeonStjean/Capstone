// bring in express for our server setup
import express from 'express'
// create our express app
const app = express()
// choosing a port 
const PORT = 5050
// at least one basic route for testing purposes
app.get('/test', (req, res) => {
    res.json('Hello (from Server)!')
})
// setup our server to listen on a specific port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})