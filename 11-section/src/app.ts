// ************* Decorators *************

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// ************* Decorator Factory *************
function LoggerFactory(logString: string) {
  console.log("Logger Factory...");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Rendering Factory...");
  return function (constructor: any) {
    console.log("Rendering template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @LoggerFactory("LOGGING - PERSON")
@LoggerFactory("LOGGING - PERSON")
@WithTemplate("<h1>Hello World</h1>", "app")
class Person {
  name = "Alex";

  constructor() {
    console.log("Creating a new person...");
  }
}

const person = new Person();
console.log(person.name);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target, propertyName, descriptor);
}

function Log3(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target, propertyName, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target, name, position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Price must be positive");
    }
  }

  constructor(title: string, _price: number) {
    this._price = _price;
    this.title = title;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}
