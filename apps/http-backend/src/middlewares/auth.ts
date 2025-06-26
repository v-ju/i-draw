import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config';

import { JWT_SECRET } from "@repo/shared/config"

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'] ?? "";

    if (!token){
        return res.status(403).json({message: "Invalid token!"})
    }

    


}


