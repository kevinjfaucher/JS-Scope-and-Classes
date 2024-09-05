let a = "global";

function outer() {
  let b = "outer";
  
  function middle() {
    let c = "middle";
    
    function inner() {
      let d = "inner";
      console.log(a, b, c, d); // can access all outer variables
    }
    
    inner();
  }
  
  middle();
}

outer();


/*
Lexical Environment Breakdown:

    Global Lexical Environment:
        Stores a = "global".
        Is the parent environment for all functions.

    outer Function’s Lexical Environment:
        Stores b = "outer".
        Has a reference to the global lexical environment.

    middle Function’s Lexical Environment:
        Stores c = "middle".
        Has a reference to outer's lexical environment and the global lexical environment.

    inner Function’s Lexical Environment:
        Stores d = "inner".
        Has access to middle's, outer's, and the global lexical environments.

When inner is called, it can access a, b, c, and d because each function 
can reference its own lexical environment and its parent environments.

Key Takeaways:

    Lexical Environments are created whenever a function is executed. 

    They store variable bindings and maintain references 
    to their parent environment, enabling nested scopes.

    Closures occur when an inner function "closes over" 
    its parent’s lexical environment, keeping it alive 
    even after the parent function has finished executing.

    Lexical scoping allows inner functions to access 
    variables defined in their outer environments, 
    but not the other way around.

*/