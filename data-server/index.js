const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

handler = require("./routes");

mongoose
  .connect(
    "mongodb+srv://ayu:1234@cluster0.6by5r.mongodb.net/record?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/records", handler);

const PORT = 3000;

app.listen(PORT, console.log(`Listening at ${PORT}`));
