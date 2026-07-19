const parent = {
    greet: () => {
        console.log('Greeting from parent')
    }
}

// prototype inheritance 
const child = Object.create(parent)  //1st way

const child1 = []
child1.__proto__ = parent  // 2 way(legacy)
// child1.[[Prototype]] = parent

const child2 = []
Object.setPrototypeOf(child2, parent) // 3rd way and recommended


child.hiSay = () => {
    console.log('Greeting from child')
}


console.log(Object.getPrototypeOf(child))
console.log(parent.__proto__);
child.greet()
child.hiSay()
child1.greet()
child2.greet()

