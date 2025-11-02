type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type UserKeys = keyof User; // "name" | "age" | "email"

let validKey: UserKeys;

validKey = "name";
validKey = "age";
validKey = "isActive";
// validKey = "unknown"; // This will cause a type error in TypeScript

function getProp<T extends object, K extends keyof T>(user: T, key: K) {
  if (typeof user[key] === "undefined" || user[key] === null) {
    throw new Error(`Accessing a null or undefine property`);
  }
  return user[key];
}

let name = getProp({ name: "John", age: 30, isActive: true }, "name");

let age = getProp({ name: "John", age: 30, isActive: true }, "age");

let isActive = getProp({ name: "John", age: 30, isActive: true }, "isActive");

// console.log(getUserProperty({ name: "John", age: 30, email: "john@example.com" }, "unknown")); // This will cause a type error in TypeScript
