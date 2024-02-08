import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({
  path: "../2.env",
});

export const client = new PrismaClient();
export const token = jwt;
export function logPass() {
  console.log(process.env.SECRET);
}
