import { Request, Response, NextFunction } from "express";
import {ErrorCodes, HttpException} from "./http-exception";

export const errorHandler = (method: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await method(req, res, next);
        } catch(err) {
            let exception: HttpException;
            if (err instanceof HttpException) {
                exception = err;
            }
            else {
                console.log(err);
                exception = new HttpException("Something went wrong", ErrorCodes.UNKNOWN_SERVER_ERROR, 500, null);
            }
            next(exception);
        }
    }
}