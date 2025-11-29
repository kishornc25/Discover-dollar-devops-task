const express = require("express");
//const cors = require("cors");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kishornc18_db_user:yO8hczdw9c4idWwl@cluster0.g7bf1ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => {
  console.log("Connected to MongoDB Atlas!");
})
.catch(err => {
  console.log("Cannot connect to MongoDB Atlas!", err);
  process.exit();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
