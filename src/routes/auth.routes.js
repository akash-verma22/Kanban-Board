import {Router} from "express";
import {registerUser} from "../controllers/auth.controllers.js"
import {validate} from "../middlewares/validator.middlewares.js"
import {registerUserValidator} from "../validators/index.js"

const router = Router();

router.route("/register").post(registerUserValidator(),validate,registerUser);

export default router;