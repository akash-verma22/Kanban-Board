import { validationResult } from "express-validator";
import { apiError } from "../utils/apiError.js";

const validate = (req,res,next) => {
    const errors = validationResult(req);

    if(errors.isEmpty){
        return next();
    }

    const extractedErrors = [];

    errors.array().map((err)=>extractedErrors.push({
        [err.path]: err.msg
    }));

    throw new apiError(422,"Recieved Data is invalid!",extractedErrors);
}

export {validate};

