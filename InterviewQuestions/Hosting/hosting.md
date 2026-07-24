# Hosting

Hosting is concept in javascript that allow us to use the variable and classical function before declaration.
hoisting moves declarations of variables, function and class to the top of their scope during compilation phase.

or

this happened because of the nature of the javascript to run the code. as javascript run the code in two phase.

1. firstly they move all variable/functions declaration to the top of their scope during compilation time
2. then start the execution of the code.

**Crucially, only declarations are hoisted, not initializations (assignments).**

# Temporal Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) is the period in JavaScript between entering a scope and the initialization of variables declared with let or const, during which accessing them results in an error.

Note :- Const, let and classes all are hosted but if you try to access before declaration line executed, it throws a error(referenceError) due to TDz
