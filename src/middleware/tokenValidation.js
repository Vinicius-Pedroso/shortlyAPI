import { connectionDB } from "../database";

export default async function tokenValidation (req, res, next){
    const {Authorization} = req.headers;
    const token = Authorization?.replace("Bearer ", "");

    if(!token){
        return res.sendStatus(401);
    }

    try {
        const authorizationCheck = await connectionDB.query(`SELECT * FROM Sessions WHERE userToken=${token} `);
        if (!authorizationCheck){
            return res.status(401);
        }

        saveUserData();

        next()
    } catch(err){
        return res.status().send(err.message);
    }
}

async function saveUserData (){
    const userData = await connectionDB.query(`SELECT * FROM users WHERE token=${token} `);
    if (!userData){
        return res.sendStatus(404);
    }

    res.locals.user = user.userData;
}