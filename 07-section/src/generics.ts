// let names: string[] = ["Alice", "Bob", "Charlie"];

// Generic Array
let namesArray: Array<string> = ["Alice", "Bob", "Charlie"];

// Generic types are a way to create reusable code that can work with different types.

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | number> = {
  name: "Shop 1",
  location: "New York",
  employees: 10,
};

let store2: DataStore<string | boolean> = {
  name: "Shop 2",
  isActive: false,
  location: "Los Angeles",
};

// Generic Functions
function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);
const names = merge("Alice", "Bob"); // merge<string>("Alice", "Bob") is the same as merge("Alice", "Bob") and Typescript will infer the type of the parameters

// Multiple Generic Types
function merge2<T, U>(a: T, b: U) {
  return [a, b];
}

const ids2 = merge2(1, "2");
const names2 = merge2("Alice", "Bob");

// Generic Constraints
function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const mergedObj = mergeObj(
  { name: "Alice", age: 30 },
  { city: "New York", street: "Main St", zip: "10001" }
);
// const invalidMergedObj = mergeObj(1, 2); // This will cause a type error in TypeScript
// const invalidMergedObj = mergeObj(1, "2"); // This will cause a type error in TypeScript

// Generic Classes
class User<T> {
  constructor(public name: string, public id: T) {}
}

const user = new User("Alice", "123");
const user2 = new User("John", 123);
