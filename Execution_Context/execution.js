// This file demonstrate the basic concept of javascript -> Execution Context

// ** Eyerything in JavaScript happens inside execution context

let n = 2;

function square(num) {
    let result = num * num;
    return result;
}

let square1 = square(n); // Function Invocation
console.log(square1); // Output: 4
let square2 = square(4);
console.log(square2); // Output: 16

/*
---------------------------------------------------
| Memory (Variable env) | Code (Thread of exec.) |
---------------------------------------------------
|   Key: Value          |    *                   |
|    a:10               |    *      Code         |
|    fun: {...}         |    *                   |
---------------------------------------------------

*/

// Ex: Simple Program to print the Hello world program

let Msg = "Hello...From JavaScript";

function printGreet(msg) {
    console.log(msg);
}

printGreet(Msg); // Hello...From JavaScript