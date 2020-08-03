// Node.js file system and HTTP modules required to work
const fs = require("fs");
const http = require("http");

//npm inquirer file
const inquirer = require("inquirer");

// allows userInput to call greeting
const greeting = require("./greeting.js");

//console log greeting from the greeting.js file
console.log(greeting)


function userQuestions(){
    inquirer
    //questions prompt the user for their input
    .prompt([
        {
            type: "input",
            message: "What is your username?",
            name: "username"
        },

        {
            type: "password",
            message: "Create your password?",
            name:"password"
        },

        {
            type: "password",
            mesage: "Re-enter password to confirm",
            name: "confirm"
        },
    ])

    //If the password is correct or incorrect, the response below will follow
    .then (function(data){
        if (data.password != data.confirm){
            console.log("Oops,try again!");
            userQuestions();
        } else {
            var fs = require("fs");
    //Sorting users information entered into userPassword.txt
            fs.writeFile("./userPassword.txt", data.username + " : "+ data.password ,function(err){
                if (err){
                    return console.log("err");
                } else {
                    console.log("Success!")
                }  
            });
        }
    })
}

//Run userQuestion
userQuestions();