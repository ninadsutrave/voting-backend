import Votes from '../models/votes.js'
import Voter from '../models/voter.js'

const updateVotesController = async (req,res) => {

    const pehchaanId = req.body.pehchaanId 
    const secretToken = req.body.secretToken
    const voter = await Voter.findOne({pehchaanId})

    if(!voter)
        return res.status(401).send("Unsuccessful")

    if(voter.secretToken !== secretToken)
        return res.send("Unsuccessful")

    if(voter.voted)
        return res.send("Voted")
    
    const { president, vice, secretary } = req.body
    
    if(president === "chena") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    chenaPresident: 1
                }
            }
        )

    }
    else if(president === "tiwari") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    tiwariPresident: 1
                }
            }
        )

    }
    if(vice === "chena") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    chenaVicePresident: 1
                }
            }
        )

    }
    else if(vice === "tiwari") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    tiwariVicePresident: 1
                }
            }
        )
        
    }
    if(secretary === "chandan") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    chandan: 1
                }
            }
        )
    }
    else if(secretary === "vinit") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    vinit: 1
                }
            }
        )
        
    }

    await Voter.updateOne(
        {pehchaanId},
        {
            $set: {
                voted: true
            }
        }
    )

    res.send("Successful")
}

export default updateVotesController