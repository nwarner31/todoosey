import { httpRegisterUser } from './user.controller';
import express, {Router} from "express";
import {errorHandler} from "../../utility/error-handler";


const userRouter: Router = express.Router();

userRouter.post('/register', errorHandler(httpRegisterUser));

export default userRouter;