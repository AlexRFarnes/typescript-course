// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  public hobbies: string[] = [];
  private id: string;
  readonly createdAt: Date = new Date();

  constructor(public name: string, public age: number) {
    this.id = new Date().toISOString();
  }

  getId() {
    return this.id;
  }
}

const alex = new User("Alex", 35);
alex.hobbies.push("Reading", "Traveling");
const john = new User("John", 30);
console.log(alex, john);
console.log(alex.getId(), john.getId());
// console.log(alex.id); // Error: Property 'id' is private and only accessible within class 'User'.
console.log(alex.createdAt);
// alex.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property.
