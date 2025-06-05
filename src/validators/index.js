import {body} from "express-validator";

const registerUserValidator = () =>{
    
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Enter an Email")
            .isEmail().withMessage("Invalid Email"),
        body("username")
            .trim()
            .notEmpty().withMessage("Enter an Username")
            .isLength({min:3}).withMessage("Username is too short!")
            .isLength({max:13}).withMessage("Username is too Long!"),
        body("password")
            .trim()
            .notEmpty().withMessage("Enter Password!")
            .isLength({min:4}).withMessage("Password is too short!")
    ];
}


const loginUserValidator = () =>{
    
    return [
        
        body("username")
            .trim()
            .notEmpty().withMessage("Enter an Username")
            .isLength({min:3}).withMessage("Username is too short!")
            .isLength({max:13}).withMessage("Username is too Long!"),
        body("password")
            .trim()
            .notEmpty().withMessage("Enter Password!")
            .isLength({min:4}).withMessage("Password is too short!")
    ];
}


export {registerUserValidator,loginUserValidator}; 