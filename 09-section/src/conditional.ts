type Users = {
  name: string;
  age: number;
  isActive: boolean;
}[];

// ************* Utility Type *************
// type GetElementType<T extends any[]> = T[number];

// type User = GetElementType<Users>; // { name: string; age: number; isActive: boolean; }

// let user: User = { name: "John", age: 30, isActive: true };

type GetElementType<T> = T extends any[] ? T[number] : never;

// <T extends any[]> is a constraint to ensure that T is an array
// T extends any[] is a conditional type, like T === any[]

type User = GetElementType<Users>; // { name: string; age: number; isActive: boolean; }

let text = "hello";
type NotValid = GetElementType<typeof text>; // never
