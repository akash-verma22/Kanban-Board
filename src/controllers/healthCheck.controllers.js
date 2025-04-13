import {apiResponse} from "../utils/apiResponse.js"

const healthCheck = (req,res) => {
    res.status(200).json(
        new apiResponse(200,{message: "Server is running"})
    );
};

export {healthCheck};