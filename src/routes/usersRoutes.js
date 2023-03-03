import { Router } from 'express';
import { usersDataController } from '../controllers/usersControllers';
import tokenValidation from '../middleware/tokenValidation';

const usersRouter = Router()

usersRouter.get("/users/me", tokenValidation, usersDataController)

export default usersRouter;