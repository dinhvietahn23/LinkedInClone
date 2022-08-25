import express from 'express'
import { signIn, signInWithGoogle, signUp } from '../controller/Auth.js'
import User from '../models/UserModel.js'

const router = express.Router()

// Register
router.post("/register", signUp)

//Login
router.post("/login", signIn)

// Login with google
router.post("/loginGg", signInWithGoogle)

export default router