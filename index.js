const fs = require('fs');

// Install the `inquirer` dependency HERE
const inquirer = require('inquirer')

// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
//

inquirer
    .prompt([{
            type: "input",
            name: "fullName",
            message: "Type your full name."
        },

        {
            type: "list",
            name: "communication",
            message: "Click one",
            choices: ['phone', 'computer', 'text']
        },

        {
            type: "checkbox",
            name: "languages",
            message: "Check your known languages",
            choices: [
                new inquirer.Separator(' = Languages = '),
                {
                    name: 'English',
                },
                {
                    name: 'Spanish',
                },
                {
                    name: 'German',
                },
                {
                    name: 'Mandarin',
                },
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one language.';
                }

                return true;
            },
        },



    ])
    .then((answers) => {
        console.log(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


// Write the user response to a file by chaining the below callback method to the prompt above.
function happy(data) {

    // Bonus: Generate the name of your user file from their input
    // Your bonus code here
    //

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
};
