import cors from 'cors';
import express from 'express';
import signInRouter from './routes/signInRoutes';
import signUpRouter from './routes/signUpRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(signInRouter);
app.use(signUpRouter);

const port = process.env.PORT ||4000
app.listen(port, () => console.log(`server running on port ${port}`));
