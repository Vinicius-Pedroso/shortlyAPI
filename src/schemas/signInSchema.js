import joi from 'joi';

const signInSchema = {
    email: joi.string().email().required(),
    password: joi.string().required(),
}

export default signInSchema