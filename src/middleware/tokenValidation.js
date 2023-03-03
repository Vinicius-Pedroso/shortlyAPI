import { connectionDB } from "../database";

export default async function tokenValidation (req, res, next){
    const {Authorization} = req.headers;
    const token = Authorization?.replace("Bearer ", "");

    try {
        const authorizationCheck = await connectionDB.query(`SELECT * FROM Sessions WHERE userToken=${token} `)
        if (!authorizationCheck){
            return res.status()
        }

        next()
    } catch(err){
        res.status().send(err.message);
    }
}