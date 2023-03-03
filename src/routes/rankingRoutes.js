import { Router } from 'express';
import { rankingController } from '../controllers/rankingControllers';

const rankingRouter = Router();

rankingRouter.get("/ranking", rankingController);

export default rankingRouter;