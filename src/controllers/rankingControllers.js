import { connectionDB } from "../database.js"

export async function rankingController (req, res){
    
    try{
        const topUsersData = await connectionDB.query(`SELECT (users.id, users.name, COUNT(urls.url) AS "linksCount), SUM(urls.timesAccessed) AS "visitCount
            FROM users LEFT JOIN urls ON users.id = urls.userId
            GROUP BY users.id ORDER BY timesAccessed DESC LIMIT 10
        `);

        if(!topUsersData){
            return res.sendStatus(404);
        }

        return res.status(200).send(topUsersData);
    }catch (err){
        return res.status(500).send(err.message);
    }
}