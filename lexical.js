/*
Let’s dive deeper into lexical environments and how they relate to scope
and closures in JavaScript. Understanding lexical environments 
is key to understanding how variables and functions are stored, 
accessed, and persist in memory.

What is a Lexical Environment?

A lexical environment is a structure that holds variable bindings 
(associations between variable names and their values) and references 
to its parent environment. Every time a function is executed, 
a new lexical environment is created.

Lexical environments are created in two main contexts:

    Global Lexical Environment: This is created when the 
    JavaScript program starts and contains all global variables and functions.
    Function Lexical Environment: Each time a function 
    is invoked, a new lexical environment is created for that 
    function’s execution context. This environment contains all the 
    local variables and any references to outer lexical environments 
    (parent functions or global environment).

Components of a Lexical Environment

Each lexical environment has two main components:

    Environment Record: Stores the local variables, constants, 
    and functions within that scope.
    Outer Lexical Environment Reference: Points to the lexical 
    environment of its parent (the scope in which the function was created).

This setup allows for nested scopes, where 
inner functions can access variables from outer functions.
*/


let globalVar = "I'm global"; // global lexical environment

function outerFunction() {
  let outerVar = "I'm outer"; // outerFunction's lexical environment
  
  function innerFunction() {
    let innerVar = "I'm inner"; // innerFunction's lexical environment
    console.log(globalVar); // can access global scope
    console.log(outerVar);  // can access outer scope
    console.log(innerVar);  // can access its own scope
  }

  innerFunction();
}

outerFunction();


/*

Breakdown of Lexical Environments:

    Global Lexical Environment:
        Contains globalVar.
        It is the outer environment for all other functions.

    outerFunction's Lexical Environment:
        Contains outerVar and a reference to the global lexical environment.
        It is the outer environment for innerFunction.

    innerFunction's Lexical Environment:
        Contains innerVar and references both the outerFunction's lexical environment and the global lexical environment.

When innerFunction is executed, JavaScript looks for variables in the current 
lexical environment (innerVar). 

If it doesn’t find the variable, it looks to the 
outer environment, in this case, outerFunction. 

If it still doesn’t find the variable,
it moves up to the global environment. 

This process is known as lexical scoping.



*/