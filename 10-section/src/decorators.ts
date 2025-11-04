// ************* ECMAScript Decorators *************
// ************* Class Decorators *************
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

// ************* Method Decorators *************
function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  console.log("Autobind decorator called");
  console.log(target);
  console.log(ctx);

  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any, ...args: any[]) {
    console.log("Function wrapper called");
    target.apply(this, ...args); // call the original function
  };
}

// ************* Field Decorators *************
function fieldLogger(target: any, ctx: ClassFieldDecoratorContext) {
  console.log("Field logger decorator called");
  console.log(target);
  console.log(ctx);

  // Return a function that will be called after the field is initialized
  return (initialValue: any) => {
    console.log(initialValue);
    return ""; // modify the initial value by returning a new value
  };
}
// ************* Factory Decorators *************
// This is a factory decorator that returns a decorator function
function replacer<T>(initValue: T) {
  // Return a decorator function that will be called when the field is initialized
  return function replacerWithDecorator(
    target: any,
    ctx: ClassFieldDecoratorContext
  ) {
    return (_: T) => {
      return initValue;
    };
  };
}

@logger
class Person {
  @fieldLogger
  @replacer("Alexander") // Execute the factory decorator function and return the decorator function
  name = "Alex";

  @autobind
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person = new Person();
const greet = person.greet;
person.greet();
// greet();
