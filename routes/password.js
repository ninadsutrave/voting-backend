import express from 'express'
import createPasswordController from '../controllers/createPassword.js'
import updateVotesController from '../controllers/updateVotes.js'
const router = express.router()

router.post('/createPassword', createPasswordController)
router.patch('/updateVote', updateVotesController)

export default router