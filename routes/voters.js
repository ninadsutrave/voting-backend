import express from 'express'
import addVoterController from '../controllers/createPassword.js'
import updateVoterController from '../controllers/updateVotes.js'
import viewVoterController from '../controllers/viewVoters.js'
import deleteVoterController from '../controllers/viewResults.js'

const router = express.Router()

router.post('/createPassword', createPasswordController)
router.patch('/updateVote', updateVotesController)
router.get('/viewVoters', viewVotersController)
router.get('/viewResults', viewResultsController)

export default router