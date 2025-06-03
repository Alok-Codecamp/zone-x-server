import z from 'zod'


const loginValidationSchema = z.object({
    userName: z.string({ required_error: 'User name is required!!' }),
    password: z.string({ required_error: 'Password is required' }),
    rememberMe: z.boolean().optional().default(false)
})

export const authValidations = {
    loginValidationSchema,

}