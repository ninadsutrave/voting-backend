import uniqid from 'uniqid'
import Voters from '../models/voter.js'
import emailjs from '@emailjs/browser'
import dotenv from 'dotenv'
dotenv.config()

const createPasswordController = async (req, res) => {

    const secretToken = uniqid()

    emailjs.sendForm("service_m99ifi7", "template_7cpvt2j", {
        name: req.body.name,
        secretToken: secretToken,
        toEmail: req.body.toEmail        
    })
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }, 
    process.env.EMAILJS_TOKEN);

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

    res.send({"message": "Password successfully assigned"})

}

export default createPasswordController