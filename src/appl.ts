import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/module/user/user.route';
import globalErrorhandler from './app/middleware/globalErrorHandler';
import { authRoutes } from './app/module/auth/auth.route';

const app: Application = express();


app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


app.use('/user', userRoutes)

app.use('/auth', authRoutes)


app.get('/', (req: Request, res: Response) => {
    res.json('zone-x server running smoothly')
})



app.use(globalErrorhandler)
export default app;