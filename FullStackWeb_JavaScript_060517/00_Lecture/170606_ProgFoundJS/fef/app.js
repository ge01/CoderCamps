// // Basic Data Types
// let myName = 'joe';
// // console.log(myName);
//
// let myAge = 99;
// // console.log(myAge);
//
// let person = {
//   myName1: 'isaac',
//   myAge1: 99
// };

// console.log(person);
// console.log(person.myName1);
// console.log(person['myName1']);
// console.log(person['myAge1']);

// DOM
// console.dir(document);

// DOM manipulation
// let btn = document.getElementById('myBtn');
// btn.addEventListener('click', () => {
//   alert('hello world!');
// });

// Conditionals
// let myName2 = 'kevin';
//
// if(myName2 === 'isaac') {
//   alert('my name is ' + myName2);
// } else if(myName2 === 'john') {
//   alert('my name is john');
// } else {
//   alert('my name is other');
//   }

// Arrays
// let friends = ['jack', 'jill', 'joe', 'jane'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
//
// for(let i = 0; i < friends.length; i++){
//   console.log(friends[i]);
// }

// Funcitons Statement
// let myName = 'isaac';
//
// function sayName(n) {
//   alert(n);
// }
//
// sayName(myName);

// Function Expression
// let myName = 'isaac';
//
// let sayName = function(n) {
//   alert(n);
// }
//
// sayName(myName);

// Scope
// let counter = 0;
//
// function add() {
//   counter += 1;
//   console.log(counter);
// }

// Function Scope
// function add() {
//   let counter = 0;
//   counter += 1;
//   console.log(counter);
// }
//
// // Block Scope
// function scopeTest() {
//   var x = 1;
//   if(true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
//
// scopeTest();

// let argument = 'foo';
//
// function test(a) {
//   alert(a);
// }
//
// test(argument);

// jQuery Library
// $(document).ready(() => {
//   console.log('ready');
// });

// Generic JavaScript
// let myInput = document.getElementById('myInput');
// function display() {
//   console.log(myInput.value);
// }

// let myInput = $('#myInput')
// function display() {
//   console.log(myInput.val());
// }

let btn = $('#myBtn');

btn.click(() => {
  alert('hello world');
})
