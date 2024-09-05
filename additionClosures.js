/*
Here’s a scenario where we use a closure to create an addition function that "remembers" a
number (from the outer function) and later adds it to another number (from the inner function).
*/

function addWithClosure(x) {
    // `x` is in the outer function's scope (lexical environment)
  
    return function(y) {
      // `y` is in the inner function's scope
      return x + y; // inner function accesses `x` from the outer scope
    };
  }
  
  const addFive = addWithClosure(5); // `x` is 5 in the lexical environment
  console.log(addFive(3)); // Output: 8 (5 + 3)
  
  const addTen = addWithClosure(10); // `x` is 10 in the lexical environment
  console.log(addTen(7)); // Output: 17 (10 + 7)
  

  /*
Breakdown:

    addWithClosure(x):
        This is the outer function, and it takes an argument x. 
        This value (x) is stored in the outer lexical environment.
        
        It returns an inner function that accepts another argument y.

    Inner Function:
        The inner function has access to both y (its own argument) and x 
        (from the parent scope) because of the closure.
        
        When the inner function is executed, it adds x 
        (from the outer scope) to y (from the inner scope).

    Closure in Action:
        When we call addWithClosure(5), it creates a closure where x is 5, and this 
        value is remembered by the inner function that is returned.

        Calling addFive(3) adds 5 (from the closure) to 3 
        (the argument passed to the inner function), giving us 8.
        
        Similarly, calling addWithClosure(10) creates a closure where 
        x is 10, and calling addTen(7) gives us 17.

Summary:

    The outer function captures the value of x and returns an inner function.
    
    The inner function "closes over" the outer function's scope, 
    preserving the value of x, and later uses it when called with a new value y.
    
    This is how closures allow you to "save" values for later use.

  */