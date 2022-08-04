import Voter from '../models/voter.js'

const viewVotersController = async (req,res) => {
    
    if(!req.query.searchItem) {
        try {
            const voters = await Voter.find()
            return res.send(voters)
        }
        catch (err) {
            return res.send({"message": err.message})
        }
    }

    Voter.find({ "name" : { $regex: req.query.searchItem, $options: 'i' } },
        (err, voters) => {
            if (err) return res.send(err);
                res.send(voters)
        }
    );

}

export default viewVotersController