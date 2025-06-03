import sendResponse from "../../utils/sendRes"
import wrapAsync from "../../utils/wrapAsync"
import { UserModel } from "./user.model"
import { userServices } from "./user.service"


const signupUser = wrapAsync(async (req, res) => {
    const result = await userServices.signUpuserInDb(req.body)
    sendResponse(res, {
        status: 200,
        success: true,
        message: 'Signup Successfully',
        data: result
    })
})



export const userController = {
    signupUser,
}