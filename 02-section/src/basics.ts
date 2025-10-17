let age = 35; // implicit type inference as number

let name: string = "Alice"; // explicit type annotation

// age = "thirty five"
name = "Bob";
age = 40;

// function parameter with type annotation
function greet(userName: string) {
  console.log("Hello, " + userName);
}

// explicit param num1 and return type annotations and implicit param num2 type inference from default value
function add(num1: number, num2 = 0): number {
  return num1 + num2;
}
