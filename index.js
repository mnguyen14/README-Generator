// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        message: "What is your project's title?",
        name: "title",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
    },

    {
        type: "input",
        message: "Please write a description of your project.",
        name: "description",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
    },
    {
        type: "input",
        message: "What command should be run to install the application?",
        name: "installation",
        default: "Run 'npm install' in your terminal"
    },
    {
        type: "input",
        message: "Description on how to use your application.",
        name: "usage"
    },
    {
        type: "list",
        message: "License",
        name: "license",
        choices: [
            "MIT",
            "GNU",
            "Apache",
            "None"  
        ]
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "Github",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}}
    },
    {
        type: "input",
        message: "Guidelines for other users to contribute.",
        name: "contribute"
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success!')
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();