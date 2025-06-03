import sendResponse from "../../utils/sendRes";
import wrapAsync from "../../utils/wrapAsync";
import { authServices } from "./auth.service";

const signInUser = wrapAsync(async (req, res) => {
    const result = await authServices.signInUserIntoDb(req.body)

    sendResponse(res, {
        status: 200,
        success: true,
        message: 'Sign In successfully',
        data: result
    })
})

export const authController = {
    signInUser,
}