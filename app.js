import express from 'express'
import connect from './connection.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import apis from './routes/apis.js'

connect()

const app = express()
const PORT =  process.env.PORT || 8080

app.use(cors)
app.use(bodyParser.json())

app.get('/hey', (req,res) => {
    res.send({"message": "Hey"})
})

app.use('/admin', apis)

app.listen(PORT, () => {
    console.log('Server is up on Port: ', PORT)
})