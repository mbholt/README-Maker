
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project_title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a project description."
    },
    {
        type: "input",
        name: "install",
        message: "Please provide any installation instructions."
    },
    {
        type: "input",
        name: "use",
        message: "Please provide any relevant usage instructions/examples."
    },
    {
        type: "input",
        name: "contributions",
        message: "Please include any rules and guidelines for project contribution."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide any instructions for testing procedures."
    },
    {
        type: "list",
        message: "Choose license.",
        name: "license",
        choices: [ 
            "Apache License 2.0",
            "GNU General Public License",
            "MIT License",
            "Creative Commons Zero Universal",
            "Eclipse Public License 2.0",
        ]},
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address."
    }
];

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer
        .prompt(questions)

        // return projectData;
        .then((projectData) => {
            console.log(projectData);
            const markdown = generateMarkdown(projectData);

    fs.writeFile('./readme.md', markdown, err => {
        if (err) throw new Error(err);

        console.log('README created! Check out readme.md in this directory to see it!');
    });
        })
}

// Function call to initialize app
promptUser();