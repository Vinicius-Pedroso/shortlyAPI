import { connectionDB } from "../database.js"
import { v4 as uuidV4 } from "uuid";

export async function signInController (req, res){
    const {email, password} = req.body
    const token = uuidV4();

    try{
        await connectionDB.query(`SELECT (email, password) FROM users WHERE email=${email}, password=${password} `)
        return res.sendStatus(201)
    }catch (err){
        return res.sendStatus(500)
    }
}
