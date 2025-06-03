import wrapAsync from "../../utils/wrapAsync";
import { authServices } from "./auth.service";

const signInUser = wrapAsync(async (req, res) => {
    const result = await authServices.signInUserIntoDb(req.body)
})

export const authController = {
    signInUser,
}