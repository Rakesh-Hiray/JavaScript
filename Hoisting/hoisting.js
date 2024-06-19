// This file demonstrates the concept of the Javascript -> Hoisting

// Hoisting: We can access the Variables & Functions before initializing it.

// ********** Normal code **********

let x = 7;

function getHost() {
    console.log("In Host");
}

getHost();  // In Host
console.log(x); // 7

// ********** Hoisting **********

getHost();  // In Host, allcoated memory with the copy of function
console.log(y); // undefined, memory is allocated and assigned placeholder 'undefined'

let y = 7;

function getHost() {
    console.log("In Host");
}

// ********** Hoisting2 **********

getHost();  // In Host, allcoated memory with the copy of function
console.log(y); // y is not defined.

function getHost() {
    console.log("In Host");
}

// ********** Function **********

getHost();  // undfined
console.log(y); // undefined, memory is allocated and assigned placeholder 'undefined'

let y = 7;

let getHost = function getHost() {
    console.log("In Host");
}

// ********** Arrow Function **********

getHost();  // undfined
console.log(y); // undefined, memory is allocated and assigned placeholder 'undefined'

let y = 7;

let getHost = () =>  {
    console.log("In Host");
}

// ********** Arrow Function **********

getHost();  // undfined
console.log(y); // undefined, memory is allocated and assigned placeholder 'undefined'

let y = 7;

let getHost = () =>  {
    console.log("In Host");
}

// ********** Normal Function **********

getHost();  // undfined
console.log(y); // undefined, memory is allocated and assigned placeholder 'undefined'

let y = 7;

let getHost = function getHost() {
    console.log("In Host");
}