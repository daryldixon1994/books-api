const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const post = process.env.PORT || 5000;
const DBUSER = process.env.DBUSER;
const DBPWD = process.env.DBPWD;
mongoose
  .connect(
    `mongodb+srv://${DBUSER}:${DBPWD}@cluster0.xu8jhiq.mongodb.net/MYAPP?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use("/api/user", require("./routes/user"));

app.listen(post, (err) => {
  if (err) throw err;
  console.log("server is up and running");
});
