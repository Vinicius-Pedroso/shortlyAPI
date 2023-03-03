import { urlsSchema } from "../schemas/urlSchema";

export default async function urlValidation(req, res, rext){
    const {url} = req.body;

    const urlError = urlsSchema.validate(url);

    if (urlError){
        const errors = urlError.error.details.map(({message}) => message);
        return res.status(422).send(errors);
    }

    next()
}