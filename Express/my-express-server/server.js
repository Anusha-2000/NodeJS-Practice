const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at anusha@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("<h1>My name is Anusha, and I'm trying to achieve great things in life!</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("Code, Cry, Repeat");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
