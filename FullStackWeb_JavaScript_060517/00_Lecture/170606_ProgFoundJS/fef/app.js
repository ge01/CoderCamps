// Basic Data Types
let myName = 'joe';
// console.log(myName);

let myAge = 99;
// console.log(myAge);

let person = {
  myName1: 'isaac',
  myAge1: 99
};

// console.log(person);
// console.log(person.myName1);
// console.log(person['myName1']);
// console.log(person['myAge1']);

// DOM
// console.dir(document);

// DOM manipulation
let btn = document.getElementById('myBtn');
btn.addEventListener('click', () => {
  alert('hello world!');
});
