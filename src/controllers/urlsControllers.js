import { connectionDB } from "../database.js"
import {nanoid} from 'nanoid';

export async function urlShortlyGenerator (req, res){
    const {url} = req.body;
    const urlShort = nanoid()

    try{
        await connectionDB.query(`INSERT INTO urls (userId, urlShort, url) VALUES (${userId}, ${urlShort}, ${url})`)
        res.status(201).send(urlShort)
    }catch (err){
        res.status().send(err.message)
    }
}





