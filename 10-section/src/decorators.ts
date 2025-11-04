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

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any, ...args: any[]) {
    console.log("Function wrapper called");
    target.apply(this, ...args); // call the original function
  };
}

@logger
class Person {
  name = "Alex";

  @autobind
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person = new Person();
const greet = person.greet;
person.greet();
greet();
