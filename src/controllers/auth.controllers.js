import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req,res)=>{
    
    //Getting User Data
    const {email,username,password,role} = req.body;

    //Validations
      
})

export {registerUser};