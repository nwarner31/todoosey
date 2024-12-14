import userRouter from './routers/users/user.router';
import { PrismaClient } from '@prisma/client';

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import {errorMiddleware} from "./utility/error-middleware";
import genFunc from 'connect-pg-simple';
require("dotenv").config()

const PSQLStore = genFunc(session);
const sessionStore = new PSQLStore({conString: process.env.DATABASE_URL, tableName: "sessions", createTableIfMissing: true})

const app: Express = express();
app.use(express.json());
app.use(cors({credentials: true, origin: ['http://localhost:3000']}));
app.use(helmet());
app.use(session({
    secret: process.env.SESSION_SECRET!,
    store: sessionStore
}))

export const prisma = new PrismaClient();

app.use('/user', userRouter);

app.use(errorMiddleware);

export default app;



declare module 'express-session' {
    interface SessionData {
        userId: number,
    }
}