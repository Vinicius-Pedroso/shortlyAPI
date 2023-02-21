import { connectionDB } from "../database.js"

export async function signInController (req, res){
    const {email, password} = req.body

    try{
        await connectionDB.query(`SELECT (email, password) FROM users WHERE email=${email}, password=${password} `)
        return res.sendStatus(201)
    }catch (err){
        return res.sendStatus(500)
    }
}