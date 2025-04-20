//to send static html files to user store them in a template folder
//and use 'sendFile' make sure to have root
const express = require("express");
const app = express();
const port = 3000;
const blogs = require('./routes/blogs.js')
app.use('/blogs', blogs)
app.use(express.static("public"));
//to send normal string
app.get("/", (req, res) => {
    console.log("Hey It is a Get Request");
    res.send("Hello World!Get");
  });
//to send static files
app.get("/index", (req, res) => {
    console.log("Hey It is a index");
    res.sendFile("template/index.html",{root:__dirname});
  });
  //to send json data
  app.get("/api", (req, res) => {
    console.log("Hey It is a Get Request");
    res.json({a:1,b:2});
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });