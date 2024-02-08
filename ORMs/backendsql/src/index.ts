import express, { Request, Response } from "express";
import { connectDB } from "./db/db";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is a GET request!");
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
