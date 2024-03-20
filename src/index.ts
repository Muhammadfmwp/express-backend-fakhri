import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import languagesRouter from './routes/languages'

dotenv.config();

const app: Express = express();
const port = 3000;

app.use(express.json);
app.use(
  express.urlencoded({
    extended: true
  })
);
app.get("/", (req:Request, res: Response) => {
  res.json({ message: "ok"});
});

app.use("/languages", languagesRouter);

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  const statusCode = err instanceof Error ? 500 : err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message : err.message});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});