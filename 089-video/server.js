const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
//all requests are working fine while testing
app.get("/", (req, res) => {
  console.log("Hey It is a Get Request");
  res.send("Hello World!Get");
});
app.post("/", (req, res) => {
  console.log("Hey It is a post request");
  res.send("Hello World!Post");
});
app.put("/", (req, res) => {
  console.log("Hey It is a put request");
  res.send("Hello World!Put");
});
app.delete("/", (req, res) => {
  console.log("Hey It is a delete request");
  res.send("Hello World!Delete");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
