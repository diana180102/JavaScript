const Person = function(first, last) {
  
    this.first = first;
    this.last = last;
 
    this.getFirstName = () => {
      return this.first;
    }
    this.getLastName = () => {
      return this.last;
    }
 
   this.getFullName = function() {
     
     return `${this.getFirstName()} ${this.getLastName()}`;
   };
 
   this.setFirstName = (first) => this.first = first;
 
   this.setLastName = (last) => this.last = last;
 
   this.setFullName = (first, last)  =>{
     this.first = first;
     this.last = last;
     
 
   }
 
    return 6;
 };
 
 let person = new Person('Bob', 'Ross');

//  person.getFirstName('Bob');
//  person.getLastName('Ross');
 person.getFullName();

