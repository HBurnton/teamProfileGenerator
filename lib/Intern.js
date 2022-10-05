const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';

    }
    
}

const dale = new Intern('Dale', 12, 'hburnton@gmail.com', 'UofA');
console.log(dale.getRole());
console.log(dale.getName());
