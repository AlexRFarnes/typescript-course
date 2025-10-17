// Enums in TypeScript allow you to define a set of named constants.
// They can be numeric or string-based.

// Numeric Enum
// enum Direction {
// Up = 1,
// Down,
// Left,
// Right,
// }

// let move: Direction = Direction.Up;
// console.log(`Moving in direction: ${move}`); // Output: Moving in direction: 1

// String Enum
// enum Color {
//   Red = "RED",
//   Green = "GREEN",
//   Blue = "BLUE",
// }
// let favoriteColor: Color = Color.Green;
// console.log(`My favorite color is: ${favoriteColor}`); // Output: My favorite color is: GREEN

// Literal Types
// let userRole: "Admin" | "Editor" | "Viewer" = "Admin";
// console.log(`The user role is: ${userRole}`);

// Types Aliases
type UserRole = "Admin" | "Editor" | "Viewer";

type User = {
  name: string;
  role: UserRole;
  age: number;
  email: string;
};

let userRole: UserRole = "Admin";

function getPermissions(role: UserRole): number {
  switch (role) {
    case "Admin":
      return 1;
    case "Editor":
      return 2;
    case "Viewer":
      return 3;
  }
}

console.log(`The user role is: ${userRole}`);
console.log(`Permissions level: ${getPermissions(userRole)}`);
