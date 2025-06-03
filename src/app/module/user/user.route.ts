import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidations } from "./user.validation";
import { userController } from "./user.controller";




const router = Router();

router.post('/signup', validateRequest(userValidations.createUserValidationSchema), userController.signupUser)




export const userRoutes = router;