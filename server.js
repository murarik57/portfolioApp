const express = require("express");

const PORT = process.env.PORT || 5000;
const helmet = require("helmet");
const connectDB = require("./config/db");

const app = express();

//db connection
connectDB();

//middleware call
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req);
  res.json("API is runnig");
});

app.listen(PORT, () => console.log(`Backend Server is runnig on Port ${PORT}`));
