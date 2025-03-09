// The basics for JAVASCRIPT ! 

/* JavaSCript has a dynamic typing, meaning you dont need to specify data types like int,float or double
like in C or Java. Instead, Javascript determines the type automatically when you assign a value to a variable. */

// Store simple values directly to your memory.

let age =25;

let name = "Alice";

let isStudent = true;

let x; //unsigned value

let big=123456789;

let sym = Symbol("id");

// REFERENCE (OBJECT) data types;

let person={name: "bob", age: 30};

let numbers=[1,2,3,4,5];

function greet(){console.log("Yo wassup")}

greet();

// Declaring variables (let, const, var)

let ageKid =10;
const PI=3.14;
var city = "paris"; // old way not recommended

/* 
Arithmetic operator in JavaScript
    +,-,*,/,%,** (exponential?)

Comparison Operators
    >,<,>=,<=,==,===,!=;

Logical operators 
    &&,||, !

Assignment Operators
    =,+=,-=,*=,=
*/


// Conditional statements
if(age>18){
    console.log("You can vote");
} else{
    console.log("You cant vote");
}

// Loops in Javascript

for(let i=0; i<5;i++){
    console.log(i);
}

let i=5;

while(i>0){
    console.log(i);
    i = i-1;
}

// Functions
function greetName(name){
    console.log("hello " + name);
}

console.log(greetName("Malaka"));

// Arrow Function for shorter Syntax 
const add=(a,b) => a+b;

console.log(add(10,10));

// Array and objects

let fruits = ["apple","orange","lemon","cherry"];

console.log(fruits[1]);

// Objects 

let person1={name : "John", age : 22};

console.log("Hello " + person1.name +" someone told me you are " + person1.age + " years old");

// Event Handling in JavaScript  

// document.querySelector("button").addEventListener("click", () =>{
//     alert("Button clicked");
// });