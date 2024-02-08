import { client } from "../constants/constants";
import { Request, Response, NextFunction } from "express";

export async function adminAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const adminId: number = parseInt(req.headers.id as string, 10);
    await client.admin.findMany({
      where: {
        id: adminId,
      },
    });
    next();
  } catch (error) {
    res.json({
      error: "Admin auth failed",
    });
  }
}
