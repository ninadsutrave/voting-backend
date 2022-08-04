import mongoose from "mongoose"

const Schema = mongoose.Schema

const VoterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pehchaanId: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    secretToken: {
        type: String
    },
    voted: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Voter = mongoose.model("voters", VoterSchema)

export default Voter