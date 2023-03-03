import { connectionDB } from "../database.js"

export async function usersDataController (req, res){
    const userData = res.locals.userData

    try{
        const userMyData = await connectionDB.query(`SELECT (users.id, users.name, SUM(urls.timesAccessed) AS visitCount),
            JSON_AGG(JSON_BUILD_OBJECT(
                'id', urls.id,
                'shortUrl', urls.urlShort,
                'url', urls.url
                'visitCount', urls.timesAccessed))
                AS "ShortenedUrls
            FROM users LEFT JOIN urls ON users.id = urls.userId
            WHERE users.id = ${userData.id}
            GROUP BY usersId`
        )
        
        return res.status(200).send(userMyData)
    }catch (err){
        return res.status(500).send(err.message)
    }
}

