import { Router } from 'express';
import { accessUrlShort, deleteUrl, getUrlById, urlShortlyGenerator } from '../controllers/urlsControllers';
import tokenValidation from '../middleware/tokenValidation';
import urlValidation from '../middleware/urlValidation';

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlValidation, tokenValidation, urlShortlyGenerator);
urlsRouter.get("/urls/:id", getUrlById);
urlsRouter.get("/urls/open/:shortUrl", accessUrlShort);
urlsRouter.delete("/urls/:id", tokenValidation, deleteUrl);

export default urlsRouter;
