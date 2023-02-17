import inquirer from 'inquirer';
import fs from 'fs/promises';

const questions = await inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: "What's the title of your project?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "What's your project about?",
    
    },
    {
        type: 'input',
        name: 'Installation',
        message: "How do you install your programme?",
     
    },
    {
        type: 'input',
        name: 'Usage',
        message: "What's the usage?",
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "Who has helped contribute to the project?",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "How can you test it?",
    },
    {
        type: 'input',
        name: 'Email',
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "What is your github?",
    },
    {
        type: 'input',
        name: 'Licence',
        message: "What licence would you like your project to have?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'none']
    },
    
]);
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

function licenceBadge(licence) {
    if(licence !== 'none') {
        return `[Licence: ] (https://img.shields.io/badge/license-${questions.License}-blue.svg)`
    } else {
        return ''
    }
} 

let readMe = `
# ${questions.Title}

## ${licenceBadge(licence)}

## Description 
### ${questions.Description}

## Table of Contents
* [Installation: ](#Installation)
* [Usage: ](#Usage)
* [Licence: ](#Licence)
* [Contributing: ](#Contributing)
* [Tests: ](#Tests)
* [Questions: ](#Questions)

## Installation
### ${questions.Installation}

## Usage
### ${questions.Usage}

## Licence
### ${questions.Licence}

## Contributing
### ${questions.Contributing}

## Contributing
### ${questions.Contributing}

## Tests
### ${questions.Tests}

## Questions
### ${questions.Questions}
`
await fs.writeFile('index.html', htmlText)

console.log(questions)