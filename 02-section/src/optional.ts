function generateError(msg?: string) {
  throw new Error(msg);
}

type User = {
  name: string;
  age: number;
  role?: "admin" | "user" | "guest";
};

let input = "";

const didProvidedInput = input ?? false; // nullish coalescing operator (only works with null or undefined)

console.log(didProvidedInput);
