import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { authValidations } from "./auth.validation";
import { authController } from "./auth.controller";

const router = Router();

router.post('/signIn', validateRequest(authValidations.loginValidationSchema), authController.signInUser)

export const authRoutes = router;