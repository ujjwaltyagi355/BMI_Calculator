//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({entended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/BMICalculator.HTML")
});

app.post("/", function(req, res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);
  var result= weight/height;
  res.send("The BMI is: " + result);
});

app.listen(3000, function(){
  console.log("The server is running on port 3000");
});
