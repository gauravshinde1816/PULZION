const express = require("express");
const app = express();
const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

//body parsing
app.use(express.json({ extended: false }));
//database connection
const db = process.env.MONGO_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(colors.yellow("Database connected successfully")))
  .catch((err) => console.log(err.message));

// Routes
const VolunteerRouter = require("./routes/Volunteers");
const Auth = require("./routes/auth");
app.use("/volunteers", VolunteerRouter);
app.use("/auth", Auth);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(colors.green(`Server started at ${port}`));
});
