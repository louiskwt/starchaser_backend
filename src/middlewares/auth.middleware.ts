import {NextFunction, Request, Response} from "express";
import admin from "../config/firebase.config";

export interface AuthRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

export const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1] || null;
    if (!token) return res.status(401).json({error: "Unauthorized: No token provided"});

    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({error: "Unauthorized: Invalid token"});
  }
};
