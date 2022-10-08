const Engineer = require('../lib/Engineer')

describe('Engineer', () =>{

    describe("Initialization",()=>{
        it('Should return an object containing an Enigneer\'s name, id, github and role',() =>{

            let obj = new Engineer();

            expect('name' in obj);
            expect('id' in obj);
            expect('email'in obj);
            expect('github' in obj);

        })
        it('Should set name, id, email, and github to passed arguments',()=>{
            let name = 'dale';
            let id = 165;
            let email = 'dale@outlook.com'
            let github = 'dale'

            let obj = new Engineer(name, id, email, github);

            expect (obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        })
    });

    describe('getRole', () =>{
        it('should overwrite Employee getRole to return \'Engineer\'',()=>{
            let obj = new Engineer();
            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe('getName',() =>{
        it('should return an object containing the assigned name when initialized', () => {
            let name = 'mark';
            let obj = new Engineer(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should return object passes id at initialization', ()=>{
            let name = 'mark'
            let id = 59;
            let obj = new Engineer(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should return the employee email passed at initialization',()=>{
        let email = 'mark@gmail.com';
        let obj = new Engineer('Mark', 72, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getGithub',()=>{
        it('should return employee github passes at initialization', ()=>{
            let github = 'hburnton'
            let obj = new Engineer('Phil', 99, 'test@gmail.com', github);
            expect(obj.getGithub()).toEqual(github)
        });
    });
});