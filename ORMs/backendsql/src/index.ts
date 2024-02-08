import express, { Request, Response } from "express";
import { connectDB } from "./db/db";
import { getAllCourses } from "./utils/get-courses";
import { signUpUser } from "./utils/sign-up";

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
  try {
    const newUser = await signUpUser(req.body.email, req.body.password);
    res.json({
      msg: "User created successfully",
      userId: newUser,
    });
  } catch (error) {
    res.json({
      error: "Username already in use",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
