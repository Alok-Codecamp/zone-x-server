import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();


app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


app.get('/', (req: Request, res: Response) => {
    res.json('zone-x server running smoothly')
})



export default app;