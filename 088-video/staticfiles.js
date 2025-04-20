const express = require("express");
const app = express();
const port = 3000;
//no body wants to make users to know their backend code
//but if we want to show some files to the end users we 
//should keep it in a folder and use a middle ware
//to access jayanth.txt we need to put it in public folder

//this middle ware uses to show the public all the files in it
//we can keep any no of files into it
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
