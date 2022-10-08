//Import the three classes that we are building from.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Import inquirer to ask questions, file system to read and write files
const inquirer = require('inquirer');
const fs = require('fs');

//doing array as const because we can still add
const employees = []

const managerFirstRunQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s employee id?',
    },
    {
        type:'input',
        name: 'managerEmail',
        message: 'What is the manager\'s Email Address?',
    },
    {
        type: 'input',
        name: 'offNumber',
        message: 'What is the manager\'s office number?',
    }
]
  

inquirer
    .prompt(managerFirstRunQuestions)
    .then(({managerName, managerId, managerEmail, offNumber})=>{
        const manager = new Manager(managerName, managerId, managerEmail, offNumber);
        employees.push(manager);
    }) 