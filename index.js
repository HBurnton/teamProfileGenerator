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

//doing array as const because we can still push
const employees = []

//Array of questions for manager
const managerFirstRunQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s employee id?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type:'input',
        name: 'managerEmail',
        message: 'What is the manager\'s Email Address?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type: 'input',
        name: 'offNumber',
        message: 'What is the manager\'s office number?',
        validate(ans){
            return isValid(ans)
        },
    }
]

//Array of questions for engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineer\'s name?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s employee id?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type:'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s Email Address?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type:'input',
        name: 'engineerGithub',
        message: 'What is the engineer\'s Github name?',
        validate(ans){
            return isValid(ans)
        },
    }
]

//array of questions for Intern
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s employee id?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type:'input',
        name: 'internEmail',
        message: 'What is the intern\'s Email Address?',
        validate(ans){
            return isValid(ans)
        },
    },
    {
        type:'input',
        name: 'internSchool',
        message: 'What is the intern\'s school name?',
        validate(ans){
            return isValid(ans)
        },
    }

]

//array with single menu selection
const menu = [
    {
        type:'rawlist',
        name: 'menuSelection',
        message: 'Which of the following would you like to do now?',
        choices: ['Add An Engineer', 'Add An Intern', 'Finish'],
    }
]

//function to start process of adding manager which is run at bottom. This kicks of everything and leads to menu
const addManager= () =>{
      inquirer
        .prompt(managerFirstRunQuestions)
        .then(({managerName, managerId, managerEmail, offNumber})=>{
            const manager = new Manager(managerName, managerId, managerEmail, offNumber);
            employees.push(manager); 
            showMenu()
        });
}

//function adds engineer using engineer question array above and then re-displays menu
const addEngineer = () =>{
    inquirer
        .prompt(engineerQuestions)
        .then(({engineerName, engineerId, engineerEmail, engineerGithub})=>{
            const engineer = new Engineer(engineerName, engineerId,engineerEmail, engineerGithub);
            employees.push(engineer);
            showMenu();
        })
}

//function adds Intern utilizing intern array questions above and re-displays menu
const addIntern = () =>{
    inquirer
        .prompt(internQuestions)
        .then(({internName, internId, internEmail, internSchool})=>{
            const intern = new Intern(internName, internId, internEmail, internSchool);
            employees.push(intern);
            showMenu();
        })
}

//run at the end, this uses the buildHTML function from buildHTML.js
const buildPage = () =>{
    const builtString = buildHTML(employees);
    //has a long string that is then written to the output directory location
    fs.writeFile(outputDir, builtString, (err) =>
    err ? console.error(err) : console.log('Success!')
 );

}

//showMenu displays a menu and allows for selection of adding Intern or Engineer or to finish
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

const isValid = (ans) =>{
    if(ans.trim().length){
        return true
    }
    return 'Please do not leave field empty'
}

//addManager function kicks everything off
addManager()