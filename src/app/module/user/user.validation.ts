import z from 'zod';

const createUserValidationSchema = z.object({
    userName: z.string().nonempty("Name is required!"),
    password: z.string().min(8, "Password must be at least 8 characters long").regex(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain at least one number and one special character"
    ),
    shopName: z.array(z.string().nonempty("Shop name can't be empty")).min(3, "At least 3 shop names are required!"),
});

export const userValidations = {
    createUserValidationSchema,
}