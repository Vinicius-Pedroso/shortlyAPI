import cors from 'cors';
import express from 'express';
import rankingRouter from './routes/rankingRoutes';
import signInRouter from './routes/signInRoutes';
import signUpRouter from './routes/signUpRoutes';
import urlsRouter from './routes/urlsRoutes';
import usersRouter from './routes/usersRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(signInRouter);
app.use(signUpRouter);
app.use(urlsRouter);
app.use(usersRouter);
app.use(rankingRouter);

const port = process.env.PORT ||4000
app.listen(port, () => console.log(`server running on port ${port}`));

