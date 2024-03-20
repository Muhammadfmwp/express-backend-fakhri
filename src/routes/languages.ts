import express, { Request,Response,NextFunction } from "express";
import {Router} from 'express';
import * as languages from '../services/languages';

const router: Router = express.Router();
// Get Languages
router.get('/test', async function(req:Request, res:Response, next: NextFunction) {
    try {
        const page: string = req.query.page as string
        res.json(await languages.getMultiple(parseInt(page)));
    }
    catch (err) {
        console.error(`Error while getting the languages`, (err as Error).message)
    }
})

export default router;