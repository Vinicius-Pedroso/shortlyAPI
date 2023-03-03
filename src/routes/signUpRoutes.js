import { Router } from 'express';
import { signUpController } from '../controllers/singUpController';
import signUpValidation from '../middleware/signUpValidation';

const signUpRouter = Router();

signUpRouter.post("/signup", signUpValidation, signUpController);

export default signUpRouter;