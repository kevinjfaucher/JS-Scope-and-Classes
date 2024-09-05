/*
Closures in JavaScript

A closure is created when a function retains access to variables 
from its outer scope even after that outer function has finished executing. 
This happens when an inner function
is returned from an outer function or passed to another function.

*/


function outerFunction() {
    let outerVar = "I'm from the outer function"; // local scope of outerFunction
  
    // returning the inner function
    return function innerFunction() {
      console.log(outerVar); // closure, accessing the outer function's variable
    };
  }
  
  const closureExample = outerFunction(); // outerFunction has finished execution, but returns innerFunction
  closureExample(); // Output: I'm from the outer function
  

  /*
Let’s walk through this step by step:

    outerFunction is called, and it creates a local variable outerVar.

    Inside outerFunction, there is an innerFunction, which is returned. 
    This returned function (innerFunction) still has access to the variables of 
    outerFunction, even though outerFunction has finished executing.

    When outerFunction finishes, the function innerFunction is 
    assigned to the variable closureExample.

    When closureExample() is called, innerFunction runs and 
    logs outerVar to the console. Even though outerVar was declared in outerFunction, 
    which has already returned and finished, the variable persists inside the closure, 
    allowing innerFunction to access it.

Key Points About Closures:

    Closure occurs when an inner function remembers and accesses variables 
    from the outer function even after the outer function has finished execution.

    This happens because JavaScript functions maintain a reference to 
    their lexical environment, meaning the scope in which they were created.

    Closures are very powerful and allow you to do things like create 
    private variables, partial function application, and more.

  */