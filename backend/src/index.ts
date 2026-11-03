import express from "express";

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on ${port}`);
});
