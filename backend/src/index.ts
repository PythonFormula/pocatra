import express from "express";
import { pool } from "./db.js";
import type { RowDataPacket } from "mysql2";

interface DexEntry extends RowDataPacket {
  id: number;
  gen: number;
  name: string;
}

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

app.get("/api/dex/:q", async (req, res) => {
  const query = req.params.q.trim().toLowerCase();
  const asNum = Number(query);
  const [rows] = await pool.execute<DexEntry[]>(
    "SELECT id, gen, name FROM dex ORDER BY id",
  );
  if (Number.isNaN(asNum)) {
    for (const row of rows) {
      if (row.name === query) {
        res.json({ id: row.id, gen: row.gen, name: row.name });
        return;
      }
    }
    res.json({ error: "Query is not a number, nor a pokemon name." });
    return;
  } else {
    for (const row of rows) {
      if (row.id == asNum) {
        res.json({ id: row.id, gen: row.gen, name: row.name });
        return;
      }
    }
    res.json({
      error: "Query is a number, but no pokemon has that dex number.",
    });
    return;
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on ${port}`);
});
