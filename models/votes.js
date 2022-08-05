import mongoose from "mongoose"

const Schema = mongoose.Schema

const VotesSchema = new Schema({
    tiwariPresident: {
        type: Number,
        required: true,
        default: 0
    },
    tiwariVicePresident: {
        type: Number,
        required: true,
        default: 0
    },
    chenaPresident: {
        type: Number,
        required: true,
        default: 0
    },
    chenaVicePresident: {
        type: Number,
        required: true,
        default: 0
    },
    chandan: {
        type: Number,
        required: true,
        default: 0
    },
    vinit: {
        type: Number,
        required: true,
        default: 0
    }
})

const Votes = mongoose.model("votes", VotesSchema)

export default Votes