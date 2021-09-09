const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    let height = Number(req.body.height) / 100;
    let weight = Number(req.body.weight);
    let bodymassIndex = weight/(height*height);
    bodymassIndex = bodymassIndex.toFixed(1);
    console.log(bodymassIndex);
    let answer;
    if(bodymassIndex < 19){
        answer = "You are underweight!"
    } else if(bodymassIndex < 24.9) {
        answer = "Your weight is normal!";
    } else if(bodymassIndex < 29.9) {
        answer = "You are overweight!";
    } else {
        answer = "You are obese!";
    }
    res.send(answer);
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
})