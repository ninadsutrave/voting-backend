const Voter = require("../models/voter.js")

const voterSearchController = async (req, res) => {

    if(!req.query.searchItem) {
        return res.send({"message": "No search query found"})
    }

    var regex = new RegExp(req.query.searchItem, 'i');  
    
    return Voter.find({name: regex}, {pehchaanId: regex}, (err, voters) => {
        if(err)
            return res.send(err)
        else
            return res.send(voters);
    });

}  

export default voterSearchController