const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at anu@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("<h1I am Anusha, and I am an aspiring full-stack developer.</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("Code, Pray, Play");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
