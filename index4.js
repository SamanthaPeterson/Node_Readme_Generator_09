const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Include packages needed for this application
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
`;
}

module.exports = generateMarkdown;


const questions = [{
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation of your program'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List ways this product can be used'
    },
    {
        type: 'list',
        name: 'license',
        message: "Does your project have a license?",
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How and where can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a person test this program and code?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];



// TODO: Create a function to write README file
function writeToFile(input) {
    var readMeText = `# ${input.title}
##Table of Contents 
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Testing](#testing)
[Questions](#questions)
## Description 
${input.description}
## Installation 
${input.installation}
## Usage
${input.usage}
## License
${input.license}
## Contributing
${input.contributions}
## Testing
${input.test}
## Questions 
(${input.github})
${input.email}`

    console.log(readMeText)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile(answers)

        })

}

// Function call to initialize app
init();