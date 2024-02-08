import express, { Request, Response } from "express";
import { connectDB } from "./db/db";
import { getAllCourses } from "./utils/get-courses";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET endpoint
app.get("/", async (req: Request, res: Response) => {
  const courses = await getAllCourses();
  res.json(courses);
});

// POST endpoint
app.post("/post", (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) {
    return res
      .status(400)
      .json({ error: "Message is required in the request body" });
  }

  res.json({ received: true, message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
