type Operations = {
  add: (x: number, y: number) => number; // can add the readonly modifier
  subtract: (x: number, y: number) => number;
  multiply: (x: number, y: number) => number;
  divide: (x: number, y: number) => number;
};

let operations: Operations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

// ************* Mapped Types *************
type Results<T> = {
  [K in keyof T]?: number; // can add the readonly modifier to the mapped type or the optional modifier ?
};

// -? -> remove the optional modifier
// -readonly -> remove the readonly modifier

let results: Results<Operations> = {
  add: operations.add(1, 2),
  subtract: operations.subtract(1, 2),
  multiply: operations.multiply(1, 2),
  divide: operations.divide(1, 2),
};

let addResult: Results<Operations> = {
  add: operations.add(1, 2),
};
