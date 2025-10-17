import { title } from "process";

// Array
let hobbies = ["sports", "cooking"]; // implied type string[]
// hobbies.push(35); // This will cause a type error in TypeScript
hobbies.push("reading"); // This is valid

// let users: string[] = []; // explicit type annotation

// let values: (number | string)[]; // using union type
let values: Array<number | string>; // using generic array type
values = [1, 2, "three"];

// Tuple
let address: [string, number] = ["Main St", 123];
// address = [123, "Main St"]; // This will cause a type error in TypeScript
address = ["Broadway", 456]; // This is valid

// Object
let user: { name: string; age: number; hobbies: string[] } = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "traveling"],
};
// user = { name: "Bob", age: "thirty", hobbies: ["cooking"] }; // This will cause a type error in TypeScript
user = { name: "Bob", age: 25, hobbies: ["cooking"] }; // This is valid

let completeUser: {
  name: string;
  age: number;
  hobbies: string[];
  address?: { street: string; city: string }; // optional property
};
completeUser = {
  name: "Charlie",
  age: 28,
  hobbies: ["gaming", "hiking"],
}; // valid without address

completeUser = {
  name: "Diana",
  age: 32,
  hobbies: ["painting", "yoga"],
  address: { street: "Elm St", city: "Springfield" },
}; // valid with address

// Record Type (objects with dynamic keys)
let data: Record<string, number | string>;
data = {
  id: 1,
  title: "Record Example",
};

// Literal Types
let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1]; // valid
// possibleResults = [0, 1]; // This will cause a type error in TypeScript
