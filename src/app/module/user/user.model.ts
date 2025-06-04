import { model, Model, Schema } from "mongoose";
import { ISignup } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config/config";
// all file and module imported above


// schema for new user signup 
export const UserSchema = new Schema<ISignup>({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    shopNames: {
        type: [String],
        required: true,
    }
}, { timestamps: true, versionKey: false })


UserSchema.pre('save', async function (next) {

    try {
        this.password = await bcrypt.hash(this.password, Number(config.salt_rounds))
        next()
    }
    catch (err: any) {
        next(err)
    }
})
UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        return ret;
    }
})

export const UserModel = model<ISignup>('user', UserSchema)