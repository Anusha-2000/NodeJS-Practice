const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result);
});

app.post("/bmiCalculator", function(req, res) {
    var ht = parseFloat(req.body.ht);
    var wt = parseFloat(req.body.wt);
    var bmi = Math.round(wt / (ht * ht));

    res.send("Your bmi is " + bmi);
});

app.listen(port, function() {
    console.log("Server has started on port 3000");
});