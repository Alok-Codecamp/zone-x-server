import { AnyZodObject } from "zod";
import wrapAsync from "../utils/wrapAsync";


const validateRequest = (zodSchema: AnyZodObject) => {
    return wrapAsync(async (req, res, next) => {
        await zodSchema.parseAsync(req.body);
        next();
    })
}

export default validateRequest;