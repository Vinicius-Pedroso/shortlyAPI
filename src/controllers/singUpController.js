import { connectionDB } from "../database.js"
import bcrypt from "bcrypt";

export async function signUpController (req, res){
    const {name, email, password} = req.body
    const encryptedPassword = bcrypt.hashSync(password, 10)

    try{
        const emailValidation = await connectionDB.query(`SELECT (email) FROM users WHERE email=${email}`)
        if (emailValidation){
            return res.status(409)
        }
        await connectionDB.query(`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${encryptedPassword}) `)
        return res.sendStatus(201)
    }catch (err){
        return res.sendStatus(500)
    }
}