// const inputEl = document.getElementById("name")!; // "!" is used to tell TypeScript that the element is not null, it is a non-null assertion operator (use carefully)
const inputEl = document.getElementById("name") as HTMLInputElement | null;

// if (!inputEl) {
//   throw new Error("Input element not found");
// }

console.log(inputEl?.value);
