type DataStore = {
  [key: string]: boolean | number;
};

let store: DataStore = {};

store["id"] = 1;
store["isOpen"] = true;

console.log(store);

// Narrow down the type of the array to the specific values
let roles = ["admin", "user", "guest"] as const;

// Satisfies operator is used to narrow down the type of the object to the specific values
const dataEntries = {
  entry1: 1.5,
  entry2: 0.5,
  entry3: 1.1,
} satisfies Record<string, number>;

dataEntries.entry1 = 1.2; // This is valid
// dataEntries.entry4 = 1.2; // This will cause a type error in TypeScript
