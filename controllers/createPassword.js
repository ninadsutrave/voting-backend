import uniqid from 'uniqid'
import Voters from '../models/voter.js'

const createPasswordController = async (req, res) => {

    const secretToken = uniqid()

    emailjs.sendForm("service_m99ifi7","template_7cpvt2j", {
        name: req.body.name,
        secretToken: secretToken,
        toEmail: req.body.toEmail        
    })
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    const pehchaanId = req.body.pehchaanId

    try {
        await Voters.updateOne({pehchaanId}, 
            {
                $set: {
                    secretToken: secretToken
                }
            }
        )
    }
    catch(err) {
        res.send({"message": err.message})
    }

}

export default createPasswordController