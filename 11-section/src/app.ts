// ************* Decorators *************

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// ************* Decorator Factory *************
function LoggerFactory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @LoggerFactory("LOGGING - PERSON")
@WithTemplate("<h1>Hello World</h1>", "app")
class Person {
  name = "Alex";

  constructor() {
    console.log("Creating a new person...");
  }
}

const person = new Person();
console.log(person.name);
