// TODO: Include packages needed for this application
//Access to the local file system
const fs = require('fs');

// Install the `inquirer` dependency HERE
const inquirer = require('inquirer')

var PrettyError = require('pretty-error');
var pe = new PrettyError();

// var renderedError = pe.render(new Error('Some error message'));
// console.log(renderedError);

// try {
//     doSomethingThatThrowsAnError();
// } catch (error) {
//     console.log(pe.render(error));
// }


//const path = require('path');

//const generateMarkdownb = require('./utils/generateMarkdown.js')

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
`;
}

// module.exports = generateMarkdownb;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }






//GIVEN a command-line application that accepts user input
//WHEN I am prompted
//for information about my application repository
//THEN a high - quality, professional README.md is generated with the title 
//of my project and sections entitled Description, Table of Contents,
//Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username.',
    // We need to validate that user entered at least one word
    // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a GitHub username.");
        }
        return true;
    }
},



//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions,
//with a link to my GitHub profile

// GitHub Repository
{
    type: 'input',
    name: 'repository',
    message: 'Enter the name of your repository on GitHub.',
    // We need to validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter the name of your GitHub repository.");
        }
        return true;
    }
},



//WHEN I enter my project title
//THEN this is displayed as the title of the README
// Title of Project
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project.',
    // We need to validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter the title of your project.");
        }
        return true;
    }
},



//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README




//WHEN I enter a description, installation instructions, usage information, 
//contribution guidelines, and test instructions
//THEN this information is added to the sections of the README
//entitled Description, Installation, Usage, Contributing, and Tests

// Project Description
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project.',
    // We need to validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a description for your project.");
        }
        return true;
    }
},
// Project Installation
{
    type: 'input',
    name: 'installation',
    message: 'Explain how user would install (if necessary) for Installation Section.',
    // Validation not required if question is optional
},
// Usage of project
{
    type: 'input',
    name: 'usage',
    message: 'Enter your project instructions and examples of it in use for Usage Section.',
},
// Select license
{
    type: 'list',
    name: 'license',
    message: 'Choose your license for your project.',
    // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
    choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']

},
// Contributing to project
{
    type: 'input',
    name: 'contributing',
    message: 'Explain how users can contribute to your project (if necessary).',
    // Validation not required if question is optional
},
// Test for project
{
    type: 'input',
    name: 'tests',
    message: 'Provide tests for project, and explain how to test (if necessary).',
    // Validation not required if question is optional
},


//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, 
//with instructions on how to reach me with additional questions


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

  //  console.log(readMeText)


fs.writeFile('./test.md', readMeText, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})
}




// TODO: Create a function to initialize app
// Reference: https://www.npmjs.com/package/util.promisify
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile(answers)

        })

}

// Function call to initialize app
init();


// // Function call to initialize app

//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README 
//and a notice is added to the section of the README entitled License 
//that explains which license the application is covered under
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string