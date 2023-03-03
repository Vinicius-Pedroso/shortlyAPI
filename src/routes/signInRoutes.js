import { Router } from 'express';
import { signInController } from '../controllers/singInController';
import signInValidation from '../middleware/signInValidation';

const signInRouter = Router()

signInRouter.post("/signup", signInValidation, signInController)

export default signInRouter;