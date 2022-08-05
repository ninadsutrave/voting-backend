import Votes from '../models/votes.js'

const updateVotesController = async (req,res) => {

    try {
        const votes = await Votes.find()
        return res.send(votes)
    }
    catch (err) {
        return res.send({"message": err.message})
    }

}

export default updateVotesController