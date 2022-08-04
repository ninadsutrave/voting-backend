import express from 'express'
import connect from './connection.js'
import apis from './routes/apis.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080

//connect to database
connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/test', (req, res) => {
    res.send({"message": "Hey!"})
})

app.use('/admin', apis)

app.listen(PORT, () => {
    console.log("Server is up on Port ", PORT)
})