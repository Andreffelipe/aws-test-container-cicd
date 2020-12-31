import express from 'express'

const app = express()
const PORT = 3333
const HOST = "0.0.0.0"
app.get('/', function (req, res) {
    res.send("hello word")
})

app.listen(PORT, HOST)