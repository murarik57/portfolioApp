const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//Browser display
app.get("/", (req, res) => res.send("Backend API Server is Running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
