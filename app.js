const bodyParser = require('body-parser')
const express = require('express')
const postRoute = require('./router/posts')
const socketIo = require('socket.io')
const http = require('http') // to use the server for socket 
const app = express()
const server = http.createServer(app)
const io = socketIo(server)
// channel
io.on("connection", (client) => {
    console.log("new client connected")
    console.log(client.id)
})
app.use(bodyParser.json())
//app.use('/home', postRoute)
app.get('/b', (req, res) => {
    res.json({ msg: "API working successfully" })
})
server.listen(8080, () => {
    console.log("server is running")
})