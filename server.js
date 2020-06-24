const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.set(express.static("public"))

mongoose.connect("mongodb://localhost:27017/mybrary", {
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.once("open", () => console.log("server connected to database.."));
db.on("error", (err) => console.log(err) );

const routeIndex = require("./routes/index");
const routeAuthors = require("./routes/authors/index")

app.use("/", routeIndex);
app.use("/authors", routeAuthors);

app.listen(5000, () => console.log("server running on port 5000...") )