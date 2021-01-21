var express = require("express");

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