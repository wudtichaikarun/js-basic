var person = {
  firstname: 'Ro',
  lastname: 'Mantic',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------');
}

// HOW TO USE FUNCTION LOGNAME ? ----------------------
 
// ------ solution 01 use .bind() Note: manu invocation
var logPersonName = logName.bind(person);
logPersonName('en', 'th');

// ------ solution 02 add .bind() to funtion logName
/*

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName())
}.bind(person)

logName('EN', 'TH')

*/

// ------- solution 03 use .call() Note: auto invocation
logName.call(person, 'EN', 'TH');

// ------- solution 04 use .apply() Note: auto invocation
logName.apply(person, ['En', 'Th']);

// IIFEs and apple()
(function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName())
  console.log('Arguments: ' + lang1 + ' ' + lang2)
  console.log('-------------')  
}).apply(person, ['TH', 'EN']);

/* --------------------------------------------------------
HOW TO USE CALL BIND APPLY IN REAL WORLD
---------------------------------------------------------*/
// ------- FUNCTION BOROWING ----- Note: obj person and person2 have had same property
var person2 = {
  firstname: 'Yot',
  lastname: 'Sanan'
}
// borrow method getFullName from obj person
console.log(person.getFullName.apply(person2));

// ------- FUNCTION CURRYING: creating a copy of a function but with some preset parameters 
function multiply(a, b) {
  return a*b;
}

var multipleByTwo = multiply.bind(this, 2) // preset first parameter = 2
console.log(multipleByTwo(4))
console.log(multipleByTwo(5))