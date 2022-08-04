import express from 'express'
import createPasswordController from '../controllers/createPassword.js'
import updateVotesController from '../controllers/updateVotes.js'
import viewVotersController from '../controllers/viewVoters.js'

const router = express.Router()

router.post('/createPassword', createPasswordController)
router.patch('/updateVote', updateVotesController)
router.get('/viewVoters', viewVotersController)

export default router