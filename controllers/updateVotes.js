import Votes from '../models/votes.js'
import Voter from '../models/voter.js'

const updateVotesController = async (req,res) => {

    const pehchaanId = req.body.pehchaanId 
    const secretToken = req.body.secretToken
    const voter = await Voter.find({pehchaanId})

    if(!voter)
        return res.status(401).send("No voter found for the credentials provided")

    if(voter.secretToken !== secretToken)
        return res.status(401).send("No voter found for the credentials provided")

}

export default updateVotesController