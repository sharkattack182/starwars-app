var express = require("express");
const { get } = require("http");
const { send } = require("process");

var app = express();
var PORT = 8080;

// Data
var characters = [
    {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
},
{
    routeName: "darthvader",
    name: "Darth Vader",
    role: "Sith Lord",
    age: 22,
    forcePoints: 3000
},
{
    routeName: "obiwan",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 38,
    focePoints: 1500
}]

console.log(characters.length)
// Routes
app.get("/", function(req,res) {
    res.send("Welcome to the Star Wars app! May the force be with you.")
});
app.get("/api/characters", function(req,res) {
    return res.json(characters)
})

app.get("/api/characters/:character", function(req,res) {
    var chosen = req.params.character

    console.log(chosen);
    for(let i = 0; i < characters.length; i++) {
        console.log(characters[i]);
        if(chosen === characters[i].routeName) {
            return res.json(characters[i])
        }
    }
})

app.listen(PORT, function() {
    console.log("Now listening on PORT" + PORT)
})