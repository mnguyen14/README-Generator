const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
        type: "input",
        message:"What is the project title?",
        name: "title",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },

        {
        type: "input",
        message:"Please enter a description of Project",
        name: "description",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },


        {
        type: "input",
        message:"What are the installation instructions for this project. write NONE if no instructions",
        name: "installation",
     
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},

        },

        {  
        type: "input",
        message:"How would you like your application to be used",
        name: "usage",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },

        {  
        type: "input",
        message:"What are the instructions for your application?",
        name: "test",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },
     
        {  
        type: "checkbox",
        message:"Which license did you use?",
        name: "license",
        choices: ['MIT','ISC','Apache','GNU GPLv3','N/A'],
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },

        {  type: "input",
        message:"Please enter Github Username",
        name: "git",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},
        },

        {  type: "input",
        message:"Please enter your E-mail",
        name: "email",
        validate:(value)=>{if(value){return true} else{return "Please enter valid information"}},     
        },
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve({
                ok:true,
                message: "README file created"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(questionsData => {
        writeToFile("./README.md", generateMarkdown(questionsData))
    })
}

init();
