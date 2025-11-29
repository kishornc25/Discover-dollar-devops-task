const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Atlas Connection
mongoose
  .connect(
    "mongodb+srv://kishornc18_db_user:yO8hczdw9c4idWwl@cluster0.g7bf1ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.log("Cannot connect to MongoDB Atlas!", err);
    process.exit();
  });

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// Test route
app.get("/test", (req, res) => {
  res.json({ status: "OK", message: "Test route working" });
});

// Tutorial API routes
require("./app/routes/tutorial.routes")(app);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
