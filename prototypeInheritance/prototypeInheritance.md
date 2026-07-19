# Prototype Inheritance in JavaScript

Prototype inheritance in JavaScript allows objects to inherit properties and methods from other objects.
Each object in JavaScript has an internal link to another object called its prototype. This chain of prototypes forms the prototype chain.

When you access a property or method on an object, JavaScript first checks the object itself.
If the property or method isn’t found, it moves up the prototype chain until it finds the property or reaches the end of the chain (null).

In JavaScript, **prototypes** are a fundamental concept that underpins inheritance and object relationships. Every JavaScript object has an internal [[Prototype]]/**proto** property that links it to another object, enabling property and method sharing.

### Prototype Chain

The prototype chain is the mechanism that JavaScript uses to resolve properties and methods. If an object doesn’t have a requested property, the JavaScript engine searches up the prototype chain.

```javascript
const parent = {
  greet: () => {
    console.log("Greeting from parent");
  },
};

// prototype inheritance
const child = Object.create(parent); //1st way

const child1 = [];
child1.__proto__ = parent; // 2 way(legacy)
// child1.[[Prototype]] = parent

const child2 = [];
Object.setPrototypeOf(child2, parent); // 3rd way and recommended

child.hiSay = () => {
  console.log("Greeting from child");
};

console.log(Object.getPrototypeOf(child));
console.log(parent.__proto__);
child.greet();
child.hiSay();
child1.greet();
child2.greet();
```
