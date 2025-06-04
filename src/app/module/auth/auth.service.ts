import config from "../../config/config";
import { UserModel } from "../user/user.model";
import { ISignIn } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt, { SignOptions } from 'jsonwebtoken'
const signInUserIntoDb = async (signInData: ISignIn) => {

    const isUserExist = await UserModel.findOne({ userName: signInData.userName });

    if (!isUserExist) {
        throw new Error('No account found with this username. Please sign up first.');
    }

    const isPaswordMatched = await bcrypt.compare(signInData.password, isUserExist.password);
    if (!isPaswordMatched) {
        throw new Error('Access denied. The password you provided is incorrect');
    }


    const payload = {
        userName: isUserExist.userName,
        shopName: isUserExist.shopNames,
    }
    const expiresIn = signInData.rememberMe ? config.jwt_remember_expireIn : config.jwt_default_expireIn
    const expiresInoptions: SignOptions = {
        expiresIn: expiresIn as SignOptions['expiresIn']
    }
    const accessToken = jwt.sign(payload, config.jwt_access_secret as string, expiresInoptions)

    return accessToken;
}


export const authServices = {
    signInUserIntoDb,
}