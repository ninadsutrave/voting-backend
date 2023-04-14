import Votes from '../models/votes.js'
import Voter from '../models/voter.js'

const updateVotesController = async (req,res) => {

    const secretToken = req.body.secretToken
    const voter = await Voter.findOne({secretToken})

    console.log(voter)
    console.log(secretToken)

    if(!voter)
        return res.send("Couldn't recognise voter")

    if(voter.secretToken !== secretToken)
        return res.send("Invalid Secret Token")

    if(voter.voted)
        return res.send("Voted")
    
    const { president, vice, secretary1, secretary2, treasurer } = req.body
    
    if(president === "A") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    A: 1
                }
            }
        )

    } else if(president === "B") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    B: 1
                }
            }
        )

    } else if(president === "C") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    C: 1
                }
            }
        )

    }
    if(vice === "D") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    D: 1
                }
            }
        )

    } else if(vice === "E") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    E: 1
                }
            }
        )
        
    } else if(vice === "F") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    F: 1
                }
            }
        )
        
    } else if(vice === "G") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    G: 1
                }
            }
        )
        
    } 

    if(secretary1 === "H") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    H: 1
                }
            }
        )
    } else if(secretary1 === "I") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    I: 1
                }
            }
        )
        
    } else if(secretary1 === "J") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    J: 1
                }
            }
        )
        
    }
    if(secretary2 === "K") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    K: 1
                }
            }
        )
    } else if(secretary2 === "L") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    L: 1
                }
            }
        )
        
    } else if(secretary2 === "M") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    M: 1
                }
            }
        )
        
    } else if(secretary2 === "N") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    N: 1
                }
            }
        )
        
    }

    if(treasurer === "O") {

        await Votes.updateOne(
            {index:0},
            {
                $inc: {
                    O: 1
                }
            }
        )
    }
    
    await Voter.updateOne(
        {secretToken},
        {
            $set: {
                voted: true
            }
        }
    )

    res.send("Successful")
}

export default updateVotesController