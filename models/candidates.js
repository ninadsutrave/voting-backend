import mongoose from "mongoose"

const Schema = mongoose.Schema

const candidateSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    votes: {
      type: Number,
      default: 0
    },
    post: {
      type: String,
      ref: 'positions',
      required: true
    }
});

const Candidates = mongoose.model('candidate', candidateSchema)

export default Candidates

