import express from "express"
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello API!" });
});

app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});
