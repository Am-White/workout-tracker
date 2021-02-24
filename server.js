const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Connecting to public
app.use(express.static("public"));

//Connecting to route files
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

//Connecting to mongodb
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});