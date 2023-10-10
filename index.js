// Include packages needed for this application
const fs = require("fs"); //Imports built-in Node.js "file system." 
const inquirer = require("inquirer"); //Imports the "inquirer" library.
const path = require("path"); //Imports built-in "path" module.
const generateMarkdown = require("./utils/generateMarkdown");
// Create an array of questions for user input

//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose of your project?"
    },
    {
        type: "input",
        name:"installation",
        message:"How can users instal this program?"
    },
    {
        type: "checkbox",
        name:"license",
        message:"Which of the following license options apply to your project?",
        choices: ["MIT", "Boost1.0", "MPL2.0"],
    },
    {
        type: "input",
        name: "usage",
        message: "Please insert usage instructions"
    },
    {
        type: "input",
        name: "contributing",
        message: "what users should know to contribute to your repo?"
    },
    {
        type: "input",
        name: "testing",
        message: "Please include testing instructions"
    },
    {
        type: "input",
        name: "questions",
        message: "How can users ask you questions?"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("myproject.md", generateMarkdown({ ...response}));
    })
}

// Function call to initialize app
init();
