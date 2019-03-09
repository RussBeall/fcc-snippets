var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.setFullName = function(fullname) {
    firstName = fullname.split(' ')[0];
    lastName = fullname.split(' ')[1];
  }
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(name) {
    firstName = name;
  };
  this.setLastName = function(name) {
    lastName = name;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
