import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connect = async () => {
    mongoose.connect(
        process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log('Connection Successful')
    }).catch((err) => {
        console.log('Some error: ', err)
    })
}

export default connect