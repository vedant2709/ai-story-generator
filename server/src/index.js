import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to AI Story app" });
});

const PORT = process.env.PORT || 5000;

await connectDB(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
