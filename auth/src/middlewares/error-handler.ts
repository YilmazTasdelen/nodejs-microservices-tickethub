import { Request, Response, NextFunction } from "express"
import { CustomError } from "../errors/custom-error";


// import { DatabaseConnectionError } from "../errors/database-connection-error";
// import { RequestValidationError } from "../errors/request-validation-errors";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('Somethinfg went wrong', err);

    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }


    // we turn all the errors into custom error 
    // if (err instanceof DatabaseConnectionError) {
    //     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    // }


    res.status(400).send({
        message: err.message
    });
};