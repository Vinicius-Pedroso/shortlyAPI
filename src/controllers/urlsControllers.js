import { connectionDB } from "../database.js"
import {nanoid} from 'nanoid';

export async function urlShortlyGenerator (req, res){
    const {url} = req.body;
    const urlShort = nanoid()
    const userId = res.locals.user.userId

    try{
        await connectionDB.query(`INSERT INTO urls (userId, urlShort, url) VALUES (${userId}, ${urlShort}, ${url})`)
        res.status(201).send(urlShort)
    }catch (err){
        res.status(500).send(err.message)
    }
}

export async function getUrlById (req, res){
    const {id} = req.params;

    try {
        const urlData = connectionDB.query(`SELECT (id, url, urlShort) FROM urls WHERE id=${id}`)

        if (!urlData){
            return res.sendStatus(404);
        }
        return res.status(200).send(urlData)
    }catch (err){
        res.status(500).send(err.message)
    }
}

export async function accessUrlShort (req, res){
    const {urlShort} = req.params;

    try {
        const urlData = await connectionDB.query(`SELECT * FROM urls WHERE UrlShort=${urlShort}`)
        if(!urlData){
            return res.sendStatus(404)
        }

        const timesAccessed = urlData.timesAccessed +1;

        const countUpdate = await connectionDB.query(`UPDATE urls SET timesAccessed=${timesAccessed} WHERE id = ${urlData.id}`)
        if(countUpdate){
            return res.redirect(urlData.url)
        }
        
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function deleteUrl (req,res){
    const {id} = req.params;
    const userData = res.locals.userData
    const userId = userData.id

    try{
        const urlId = await connectionDB.query(`SELECT (id, userId) FROM urls WHERE id=${id} `)

        if(!urlId){
            return res.sendStatus(404)
        }

        if(userId !== urlId.userId){
            return res.sendStatus(401)
        }

        await connectionDB.query(`DELETE FROM urls WHERE id=${id}`)

        return res.sendStatus(204);
    }catch(err){

    }
}