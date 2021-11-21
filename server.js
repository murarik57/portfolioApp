const express = require("express");
const PORT = process.env.PORT || 5000;
const helmet = require("helmet");
const connectDB = require("./config/db");

//routes
const authRoutes = require("./routes/api/auth");
const usersRoutes = require("./routes/api/users");
const profileRoutes = require("./routes/api/profile");
const postsRoutes = require("./routes/api/posts");

const app = express();

//db connection
connectDB();

//Define Routes
app.use(helmet());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/posts", postsRoutes);

app.get("/", (req, res) => {
  res.json("API is runnig");
});

app.listen(PORT, () => console.log(`Backend Server is runnig on Port ${PORT}`));
