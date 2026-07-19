
/*
In JavaScript, string methods are built-in functions used to manipulate, inspect, and format text. Because JavaScript strings are immutable, these methods never alter the original string; they always return a brand-new string or value.
*/
const myString = "JavaScript."

console.log(myString.slice(0, 6))
console.log(myString.slice(0, -6))
console.log(myString.slice(-6))
console.log(myString.substring(2, -6))
console.log(myString.includes("Rahul"))
console.log(myString.includes("dolor"))
console.log(myString.indexOf('p'));