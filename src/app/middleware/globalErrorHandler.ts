import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config/config";




const globalErrorhandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = err?.statusCode || 500;
    let message = err?.message || 'unknown error'




    if (err instanceof ZodError) {

        statusCode = 400,
            message = 'zod validation error'

    }
    else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = 'mongoose validation error';
    }
    else if (err.name === 'CastError') {
        statusCode = 400;
        message = 'invalied Id'
    }
    else if (err.code === '11000') {
        statusCode = 400;
        message = 'duplicateId';
    }


    // handler for error

    else if (err instanceof Error) {
        statusCode = 400;
        message = err.message;


    }




    res.status(statusCode).json({
        success: false,
        message,
        main: err,
        stack: config.app_mode === 'development' ? err?.stack : null
    })
}

export default globalErrorhandler;