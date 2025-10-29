// Function overloading

// Function overloading is a way to define multiple functions with the same name but different parameters
function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    return `${val.split(" ").length} words`;
  }

  return val.length;
}

console.log(getLength("Hello, world!"));
console.log(getLength(["Hello", "world!"]));
