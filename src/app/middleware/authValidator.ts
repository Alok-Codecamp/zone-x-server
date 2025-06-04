import config from "../config/config";
import { UserModel } from "../module/user/user.model";
import wrapAsync from "../utils/wrapAsync"
import jwt, { JwtPayload } from 'jsonwebtoken'

const authGurd = () => {
    return wrapAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        // Check if the token is missing
        if (!token) {
            throw new Error('Unauthorized user!')
        }
        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload
        const existingUser = await UserModel.findOne({ userName: decoded.userName });


        //check if the user is missing
        if (!existingUser) {

            throw new Error('User not found!')
        }
        next();

    })
}