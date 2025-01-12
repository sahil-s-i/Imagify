import express from 'express'
import { loginUser, registerUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

export default userRouter

// localhost : 4000/api/user/register
// localhost : 4000/api/user/login