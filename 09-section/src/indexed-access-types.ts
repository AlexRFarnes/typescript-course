const appUser = {
  name: "John",
  age: 30,
  permissions: [
    { id: "1", title: "Read", description: "Can read" },
    { id: "2", title: "Write", description: "Can write" },
  ],
};

// ************* Deriving the type from the object *************
// type User = typeof appUser;

// ************* Manually defining the type *************
type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

// ************* Indexed Access Types *************
type UserPermissions = AppUser["permissions"]; // { id: string; title: string; description: string; }[]

type Permission = UserPermissions[number]; // { id: string; title: string; description: string; } extract the type of the values in the array using the index operator
