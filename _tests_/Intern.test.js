const Intern = require('../lib/Intern')

describe('Intern', () =>{

    describe("Initialization",()=>{
        it('Should return an object containing an Intern\'s name, id, school and role',() =>{

            let obj = new Intern();

            expect('name' in obj);
            expect('id' in obj);
            expect('email'in obj);
            expect('school' in obj);

        })
        it('Should set name, id, email, and school to passed arguments',()=>{
            let name = 'dale';
            let id = 165;
            let email = 'dale@outlook.com'
            let school = 'Dale School'

            let obj = new Intern(name, id, email, school);

            expect (obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        })
    });

    describe('getRole', () =>{
        it('should overwrite Employee getRole to return \'Intern\'',()=>{
            let obj = new Intern();
            expect(obj.getRole()).toEqual('Intern');
        });
    });

    describe('getName',() =>{
        it('should return an object containing the assigned name when initialized', () => {
            let name = 'mark';
            let obj = new Intern(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should return object passes id at initialization', ()=>{
            let name = 'mark'
            let id = 59;
            let obj = new Intern(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should return the employee email passed at initialization',()=>{
        let email = 'mark@gmail.com';
        let obj = new Intern('Mark', 72, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getSchool',()=>{
        it('should return intern school passes at initialization', ()=>{
            let school = 'U of A'
            let obj = new Intern('Phil', 99, 'test@gmail.com', school);
            expect(obj.getSchool()).toEqual(school)
        });
    });
});