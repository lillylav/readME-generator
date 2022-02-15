// requirepackages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
    { 
        type: "input",
        name: "title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project."
    },
    {
        type: "checkbox",
        name: "technologies",
        message: "Please select the technologies used.",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "API", "Node.js"]
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your application."
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage for this application?"
    },
    {
        type: "list",
        name: "license",
        message: "What license was used for this project?",
        choices: ["MIT License", "GNU GPLv3 License", "Other"]
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any text suites or test code if applicable."
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for this application?"
    },
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email address?"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide instructions on how best to reach you with questions."
    }
];

// function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync("readME10.md", generateMarkdown(data));
    });
}

// function call to initialize app
init();