import mongoose from "mongoose"

const Schema = mongoose.Schema

const VotesSchema = new Schema({
    A: {
        type: Number,
        required: true,
        default: 0
    },
    B: {
        type: Number,
        required: true,
        default: 0
    },
    C: {
        type: Number,
        required: true,
        default: 0
    },
    D: {
        type: Number,
        required: true,
        default: 0
    },
    E: {
        type: Number,
        required: true,
        default: 0
    },
    F: {
        type: Number,
        required: true,
        default: 0
    },
    G: {
        type: Number,
        required: true,
        default: 0
    },
    H: {
        type: Number,
        required: true,
        default: 0
    },
    I: {
        type: Number,
        required: true,
        default: 0
    },
    J: {
        type: Number,
        required: true,
        default: 0
    },
    K: {
        type: Number,
        required: true,
        default: 0
    },
    L: {
        type: Number,
        required: true,
        default: 0
    },
    M: {
        type: Number,
        required: true,
        default: 0
    },
    N: {
        type: Number,
        required: true,
        default: 0
    },
    O: {
        type: Number,
        required: true,
        default: 0
    },
    P: {
        type: Number,
        required: true,
        default: 0
    },
    Q: {
        type: Number,
        required: true,
        default: 0
    }
})

const Votes = mongoose.model("votes", VotesSchema)

export default Votes