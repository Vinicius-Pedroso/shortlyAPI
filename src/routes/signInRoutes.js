import { Router } from 'express';
import signInValidation from '../middleware/signInValidation';

const signInRouter = Router()

signInRouter.post("/signup", signInValidation)

export default signInRouter;