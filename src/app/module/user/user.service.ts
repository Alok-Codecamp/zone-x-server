import { ISignup } from "./user.interface";
import { UserModel } from "./user.model";


const signUpuserInDb = async (signupData: ISignup) => {
    console.log(signupData);
    const existingUser = await UserModel.findOne({ userName: signupData.userName })
    if (existingUser) {
        throw new Error('You already have an account. Please sign in!!')
    }

    const shopnameExist = await UserModel.findOne({
        shopNames: { $in: signupData.shopNames }
    })
    console.log(shopnameExist);
    if (shopnameExist) {
        const usedShopNames = signupData.shopNames.map((newItem: string) => {
            return shopnameExist.shopNames.filter(existingItem => existingItem === newItem)
        })
        throw new Error(`This shop name ${usedShopNames} is used. please choise unique one!!`)
    }
    const result = await UserModel.create(signupData)
    // console.log(result);
    return result;
}


export const userServices = {
    signUpuserInDb,
}