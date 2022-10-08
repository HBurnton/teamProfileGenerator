const Employee = require('../lib/Employee');

describe('Employee', () => {

  describe("Initialization", () => {
    it("should return an object containing an employee name, id and email", () => {
    
        let obj = new Employee();

      expect('name' in obj && 'id' in obj && 'email' in obj).toEqual(true);
    });

    it('Should set name, id and email to passed arguments',()=>{
        let name = 'bob'
        let id = 4;
        let email = 'bob@gmail.com'
        let obj = new Employee(name,id,email);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
      });
  })

    describe('getName',() =>{
        it('should return an object containing the assigned name when initialized', () => {
            let name = 'mark';
            let obj = new Employee(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should return object passes id at initialization', ()=>{
            let name = 'mark'
            let id = 59;
            let obj = new Employee(name,id);
            expect(obj.getId()).toEqual(id)
        });
    })

    describe('getEmail',()=>{
      it('should return the employee email passed at initialization',()=>{
        let email = 'mark@gmail.com';
        let obj = new Employee('Mark', 72, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });

    describe('getRole', ()=>{
      it('should return role of Employee for initialized object',()=>{
        let obj = new Employee();
        expect(obj.getRole()).toEqual('Employee');
      });
    });
});