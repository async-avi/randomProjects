import express, { Request, Response } from "express";
import { connectDB } from "./db/db";
import { getAllCourses } from "./utils/get-courses";
import { signUpUser } from "./utils/users/sign-up";
import { createAdmin } from "./utils/admin/admin-sign-up";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET endpoint
app.get("/", async (req: Request, res: Response) => {
  const courses = await getAllCourses();
  res.json(courses);
});

// POST endpoint
app.post("/signup", async (req: Request, res: Response) => {
  const newUser = await signUpUser(req.body.email, req.body.password);
  res.json(newUser);
});

// admin signUp

app.post("/admin/signup", async (req: Request, res: Response) => {
  const newAdmin = await createAdmin(req.body.email, req.body.password);
  res.json(newAdmin);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
