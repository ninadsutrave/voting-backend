import shortid from 'shortid'
import Voters from '../models/voter.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const createPasswordController = async (req, res) => {

    const secretToken = shortid.generate().substring(0,5)

    const {name, pehchaanId} =  req.body

    const voter = await Voters.findOne({pehchaanId})
    const toEmail = voter.emailId
    //const toEmail = 'ninadsutrave@gmail.com'
    console.log(req.body)
    console.log(req.body.toEmail)
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: `Pehchaan Ek Safar <${process.env.EMAIL_ID}>`, 
        to: toEmail, 
        subject: "Pehchaan Ek Safar - Elections 2022",  
        html: `<p style="font-size: 20px">
                Hello ${name}, <br><br>
                Welcome to Pehchaan Ek Safar - Elections 2022! Please find below your one time secret token for casting a vote.<br>
                </p>
                <h2>Secret Token: ${secretToken}</h2>
                <p style="font-size: 20px">
                Note that sharing this information with anyone else, member or non member of Pehchaan, can lead to your debarment from the elections.<br><br>
                Best Wishes,<br>
                Pehchaan Election Committee 
                </p>
            `,
      });

      console.log("Message sent: %s", info.messageId);

        console.log(pehchaanId)
        console.log(secretToken)

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
            return res.send({"message": err.message})
        }

        res.send({"message": "Password successfully assigned"})

}

export default createPasswordController