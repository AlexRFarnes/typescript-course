// ************* ECMAScript Decorators *************

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("Logger decorator called");
  console.log(target);
  console.log(ctx);

  // Return an anonymous class that extends the target class
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("Constructor called");
    }
  };
}

@logger
class Person {
  name = "Alex";

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person = new Person();
const person2 = new Person();
