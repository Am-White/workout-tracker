const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Connecting to public
app.use(express.static("public"));

//Connecting to mongodb
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
//Connecting to route files
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});