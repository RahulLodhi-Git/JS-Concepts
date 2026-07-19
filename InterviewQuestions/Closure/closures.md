# Closure

Closure is the combination of a functions and its lexical environment, which allowing the inner function to access the variable from outer function scope even outer functions has finished executing.

Or

In simple terms, a closure gives an ability to inner functions to access the variables from the outer function even outer function has finished executing.

#### Lexical Scoping

Closures rely on lexical scoping, which means a function’s scope is determined by where it is defined, not where it is executed.

---

### Advantages

1. Retain access the outer scope variable.
2. Preserve the lexical scope.
3. Allow data Encapsulation and privacy
4. Commonly used in callbacks and asynchronous code.

```
function outer(){
    let outerVariable='i m  outer function variable'
    function inner(){
        console.log( outerVariable)
    }
    return inner

}

const closureExample=outer() // its finished execution return inner function.
closureExample()  // By this we execute inner function and its log "i m  outer function variable"
```

# Lexical scope

Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code.
In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program's execution.
