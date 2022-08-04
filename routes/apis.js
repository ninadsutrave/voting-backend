import express from 'express'
import createPasswordController from '../controllers/createPassword.js'
import updateVotesController from '../controllers/updateVotes.js'
import viewVotersController from '../controllers/viewVoters.js'
import viewResultsController from '../controllers/viewResults.js'

const router = express.Router()

router.post('/createPassword', createPasswordController)
router.patch('/updateVote', updateVotesController)
router.get('/viewVoters', viewVotersController)
router.get('/viewResults', viewResultsController)

export default router