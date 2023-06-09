const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    let ht = parseFloat(req.body.height);
    let wt = parseFloat(req.body.weight);

    let bmi = wt / (ht * ht);

    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});
