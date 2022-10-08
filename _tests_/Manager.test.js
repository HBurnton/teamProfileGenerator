const Manager = require('../lib/Manager')

describe('Intern', () =>{

    describe("Initialization",()=>{
        it('Should return an object containing an Intern\'s name, id, school and role',() =>{

            let obj = new Manager();

            expect('name' in obj);
            expect('id' in obj);
            expect('email'in obj);
            expect('school' in obj);

        })
        it('Should set name, id, email, and school to passed arguments',()=>{
            let name = 'dale';
            let id = 165;
            let email = 'dale@outlook.com'
            let officeNumber = '123-456-7890'

            let obj = new Manager(name, id, email, officeNumber);

            expect (obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        })
    });

    describe('getRole', () =>{
        it('should overwrite Employee getRole to return \'Manager\'',()=>{
            let obj = new Manager();
            expect(obj.getRole()).toEqual('Manager');
        });
    });

    describe('getName',() =>{
        it('should return an object containing the assigned name when initialized', () => {
            let name = 'mark';
            let obj = new Manager(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should return object passes id at initialization', ()=>{
            let name = 'mark'
            let id = 59;
            let obj = new Manager(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should return the employee email passed at initialization',()=>{
        let email = 'mark@gmail.com';
        let obj = new Manager('Mark', 72, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getOfficeNumber',()=>{
        it('should return Office Number passes at initialization', ()=>{
            let officeNumber = '123-456-7890'
            let obj = new Manager('Phil', 99, 'test@gmail.com', officeNumber);
            expect(obj.getOfficeNumber()).toEqual(officeNumber)
        });
    });
});