require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth.route"));

//start server
const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on ${port}`));

//connect to MongoDB Atlas
const mongoUri = process.env.MONGODB_URI;
const connectDB = async () => {
  await mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch(() => {
      console.log("Unable to connect to MongoDB Atlas!");
    });
};

connectDB()

