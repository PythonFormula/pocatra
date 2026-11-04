import express from "express";
import { pool } from "./db.js";

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get("/api/db-health", async (_req, res) => {
  const [rows] = await pool.query("SELECT 1 AS ok");
  res.json(rows);
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on ${port}`);
});
