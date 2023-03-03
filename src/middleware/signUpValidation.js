import signUpSchema from "../schemas/signUpSchema";

export default function signUpValidation (req, res, next){
    const {signUpData} = req.body;

    const signUpError = signUpSchema.validate(signUpData);

    if (signUpError){
        const errors = signUpError.error.details.map(({message}) => message);
        return res.status(409).send(errors);
    }

    next()
}