import { Request, Response, NextFunction } from "express";
import {HttpException} from "./http-exception";

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction)=> {
    res.status(error.statusCode).json({message: error.message, errorCode: error.errorCode});
}