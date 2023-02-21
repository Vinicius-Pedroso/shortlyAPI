import joi from 'joi';

const signUpSchema = {
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
}

export default signUpSchema