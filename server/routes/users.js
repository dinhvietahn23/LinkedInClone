import express from 'express'
import { getFollowing } from '../controller/User.js'


const router = express.Router()

router.get("/getFollowings/:id", getFollowing)

export default router