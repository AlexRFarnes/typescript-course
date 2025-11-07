// ************* Decorators *************

// Decorators are a way to add metadata to a class, property, method, or parameter.
// Decorators run when the class is defined, not when the class is instantiated.

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// ************* Decorator Factory *************
// Class Decorator
function LoggerFactory(logString: string) {
  console.log("Logger Factory...");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Class Decorator
// function WithTemplate(template: string, hookId: string) {
//   console.log("Rendering Factory...");
//   return function (constructor: any) {
//     console.log("Rendering template...");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY...");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Rendering template...");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

// ************* Method Decorator *************
// Overriding the original descriptor to return a new descriptor with the bound function
function AutoBind(_: any, __: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this); // this will always refer to the instance of the class
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
