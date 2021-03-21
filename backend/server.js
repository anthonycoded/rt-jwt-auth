require("dotenv").config({ path: ".env" });
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth/", require("./routes/auth.route"));
app.use("/api/private/", require("./routes/private.route"));

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

connectDB();

//Error Handler last middleware
app.use(errorHandler);

//start server
const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on ${port}`));
