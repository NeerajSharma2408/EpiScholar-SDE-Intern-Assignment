import { NextFunction, Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    console.log("Error Handler Error:" , err)
    
    const statusCode = res.statusCode ?? 500;
    res.status(statusCode).json({
        Error: "INTERNAL SERVER ERROR",
        message: err.message,
        stack: err.stack,
        errInfo: err
    });
};

export default errorHandler;
