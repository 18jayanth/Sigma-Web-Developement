const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>This is The First Page</h1>");
});
app.get("/About", (req, res) => {
  res.send("<h1>What you Want to Know About Us!</h1>");
});
//Instead of repeating the same things we can use variables to store and pass
app.get("/Blog/:slug/:lag", (req, res) => {
    //logic to fetch data from database
    //url:http://localhost:3000/Blog/C++/c?mode=dark&region=IN
    //request parameters:parameters after ':'
    console.log(req.params)//{ slug: 'C++', lag: 'c' }
    //query parameters parameters after ? mode=dark&region=IN
    console.log(req.query) //{ mode: "dark", region: "IN" }


  res.send(`<h1>Introduction to ${req.params.slug} and ${req.params.lag}</h1>`);
});
// app.get("/Blog/Javascript", (req, res) => {
//     res.send("<h1>Intriduction to Javascript</h1>");
//   });
//   app.get("/Blog/Java", (req, res) => {
//     res.send("<h1>Introduction to Java</h1>");
//   });
app.get("/Contact", (req, res) => {
  res.send("<h1>Contact Us</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
