import { connectionDB } from "../database.js"
import { v4 as uuidV4 } from "uuid";

export async function signInController (req, res){
    const userData = res.locals.user;
    const token = uuidV4();

    try{
        const existSession = await connectionDB.query(`SELECT userId FROM sessions WHERE userId=${userData.id}`);
        if (!existSession){
            await connectionDB.query(`INSERT INTO sessions (userId, token) VALUES (${userData.id}, ${token})`);
        }else {
            await connectionDB.query(`UPDATE sessions SET token=${token} WHERE userId=${userData.id};`);
            return res.status(200).send(token);
        };
        
    }catch (err){
        return res.status(500).send(err.message);
    }
    
}
