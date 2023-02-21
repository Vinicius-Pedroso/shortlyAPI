import signInSchema from "../schemas/signInSchema";

export default function signInValidation (req, res, next){
    const {signInData} = req.body;

    const signInError = signInSchema.validate(signInData);

    if (signInError){
        // config errors
        // 
        return;
    } else{
        res.status(200);
    }

    next()
}