import {Response} from "express";
import admin from "../config/firebase.config";
import {AuthRequest} from "../middlewares/auth.middleware";

export class UserController {
  public getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const userId = req.user?.uid;
      const email = req.user?.email;

      res.status(200).json({
        userId,
        email,
        message: "Profile fetched successfully",
      });
    } catch (error) {
      res.status(500).json({error: "Internal Server Error"});
    }
  };

  public createUser = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      const {email, password, displayName} = req.body;

      const userRecord = await admin.auth().createUser({
        email,
        password,
        displayName,
      });

      res.status(201).json({
        message: "User created successfully",
        userId: userRecord.uid,
      });
    } catch (error) {
      res.status(500).json({error: "Error creating user"});
    }
  };
}
