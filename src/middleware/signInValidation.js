import { connectionDB } from "../database";
import signInSchema from "../schemas/signInSchema";

export default async function signInValidation (req, res, next){
    const {signInData} = req.body;

    const signInError = signInSchema.validate(signInData);

    if (signInError){
        const errors = signInError.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    } else{
        res.status(200);
    }

    try {
        const userExist = await connectionDB.query(`SELECT email FROM users WHERE email = ${signInData.email}`)
        if (!userExist){
            return res.sendStatus(401)
        }

        const passwordCheck = bcrypt.compareSync(signInData.password, userExist.password);
        if (!passwordCheck) {
            return res.sendStatus(401);
        }
        res.locals.user = userExist;

        next()
    
    }catch{
        res.status(500).send(error.message);
    }
}