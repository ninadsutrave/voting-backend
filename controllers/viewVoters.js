import Voter from '../../models/voter.js'

const viewVotersController = async (req,res) => {
    try {
        const voters = await Voter.find()
        res.send(voters)
    }
    catch (err) {
        res.send({"message": err.message})
    }
}

export default viewVotersController