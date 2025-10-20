let a: null | string = null;
a = "hello"; // This is valid
console.log(a);

a = null; // This is valid
console.log(a);

// a = undefined; // This is not valid
// console.log(a); // This will cause a type error in TypeScript

let b: undefined | string = undefined;
b = "world"; // This is valid
console.log(b);

b = undefined; // This is valid
console.log(b);

// b = null; // This is not valid
// console.log(b); // This will cause a type error in TypeScript
