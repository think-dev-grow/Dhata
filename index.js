const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const adminRoute = require("./routes/admin");

const app = express();
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB connected..");
    })
    .catch((err) => {
      console.log(err);
    });
};
app.use(express.json());

app.use("/dhata/api/admin", adminRoute);

const PORT = 5000;

app.listen(PORT, () => {
  connectDB();
  console.log("Server connected.");
});
