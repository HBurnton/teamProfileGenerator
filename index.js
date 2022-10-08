//Import the three classes that we are building from.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const buildHTML = require('./src/buildHTML')

//Import inquirer to ask questions, file system to read and write files
const inquirer = require('inquirer');
const fs = require('fs');

//Using path for compatibility of file write 
const path = require('path');
const outputDir = path.join('dist','index.html');

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

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineer\'s name?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s employee id?',
    },
    {
        type:'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s Email Address?',
    },
    {
        type:'input',
        name: 'engineerGithub',
        message: 'What is the engineer\'s Github name?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s employee id?',
    },
    {
        type:'input',
        name: 'internEmail',
        message: 'What is the intern\'s Email Address?',
    },
    {
        type:'input',
        name: 'internSchool',
        message: 'What is the intern\'s school name?'
    }

]

const menu = [
    {
        type:'rawlist',
        name: 'menuSelection',
        message: 'Which of the following would you like to do now?',
        choices: ['Add An Engineer', 'Add An Intern', 'Finish'],
    }
]
  
const addManager= () =>{
      inquirer
        .prompt(managerFirstRunQuestions)
        .then(({managerName, managerId, managerEmail, offNumber})=>{
            const manager = new Manager(managerName, managerId, managerEmail, offNumber);
            employees.push(manager); 
            showMenu()
        });
}

const addEngineer = () =>{
    inquirer
        .prompt(engineerQuestions)
        .then(({engineerName, engineerId, engineerEmail, engineerGithub})=>{
            const engineer = new Engineer(engineerName, engineerId,engineerEmail, engineerGithub);
            employees.push(engineer);
            showMenu();
        })
}

const addIntern = () =>{
    inquirer
        .prompt(internQuestions)
        .then(({internName, internId, internEmail, internSchool})=>{
            const intern = new Intern(internName, internId, internEmail, internSchool);
            employees.push(intern);
            showMenu();
        })
}

const buildPage = () =>{
    const builtString = buildHTML(employees);
    fs.writeFile(outputDir, builtString, (err) =>
    err ? console.error(err) : console.log('Success!')
 );

}

const showMenu = () =>{
    inquirer
        .prompt(menu)
        .then(({menuSelection}) =>{
            switch(menuSelection){
                case 'Add An Intern':
                    addIntern();
                    break;
                case 'Add An Engineer':
                    addEngineer();
                    break;
                case 'Finish':
                    console.log(employees);
                    buildPage();
                    break;
                default:
                    console.log('error')

            }
        })
}

//addManager function kicks everything off
addManager()