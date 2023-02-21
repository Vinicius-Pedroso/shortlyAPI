import { Router } from 'express';
import signUpValidation from '../middleware/signUpValidation';

const signUpRouter = Router()

signUpRouter.post("/signup", signUpValidation)

export default signUpRouter;