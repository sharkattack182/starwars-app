var express = require("express");
const { get } = require("http");

var app = express();
var PORT = 8080;

// Data
var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
};

var darthVader = {
    name: "Darth Vader",
    role: "Sith Lord",
    age: 22,
    forcePoints: 3000
};

var obi = {
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 38,
    focePoints: 1500
};


// Routes
app.get("/", function(req,res) {
    res.send("Welcome to the Star Wars app! May the force be with you.")
});

app.get("/yoda", function(req,res) {
    res.send(yoda);
})

app.get("/darthvader", function(req,res) {
    res.send(darthVader);
})

app.get("/obiwan", function(req,res) {
    res.send(obi)
});


app.listen(PORT, function() {
    console.log("Now listening on PORT" + PORT)
})