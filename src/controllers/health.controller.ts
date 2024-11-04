import {Request, Response} from "express";

export class HealthController {
  public check = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({status: "OK"});
    } catch (error) {
      res.status(500).json({error: "Internal Server Error"});
    }
  };
}

// src/types/index.ts
export interface ErrorResponse {
  error: string;
  status: number;
}
