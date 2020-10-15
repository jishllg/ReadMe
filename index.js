const inquirer = require("inquirer");
const fs = require("fs");
const genMd = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    name: "project",
    message: "Enter your project name:"
},{
    type: "input",
    name: "description",
    message: "Enter a description of your project:"
},{
    type: "input",
    name: "installation",
    message: "Enter your installation instructions:"
},{
    type: "input",
    name: "usage",
    message: "Enter information the user should know:"
},{
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:"
},{
    type: "input",
    name: "testing",
    message: "Enter testing instructions:"
},{
    type: "list",
    name: "lisence",
    message: "Enter Lisence:",
    choices: ["APACHE 2.0", "BSD 3", "GPL 3.0", "MIT", "Unlisence", "None"]
},{
    type: "input",
    name: "gitHub",
    message: "Enter GitHub username:"
},{
    type: "input",
    name: "email",
    message: "Enter email address:"
}];

// function to write README file
function writeToFile(content) {
    fs.writeFileSync("ReadMe.md", content);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        writeToFile(genMd(answers));
    });
}

// function call to initialize program
init();
