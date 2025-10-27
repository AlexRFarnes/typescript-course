class User {
  private _firstName: string = "";
  private _lastName: string = "";
  protected age: number = 0;

  //   Getter: property that is computed on the fly when accessed and is accessed like a regular property
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  //   Setter: property that is used to set a value and is accessed like a regular property
  //   Useful for validation
  set firstName(firstName: string) {
    if (!firstName.trim()) {
      throw new Error("First name cannot be empty");
    }
    this._firstName = firstName;
  }

  set lastName(lastName: string) {
    if (!lastName.trim()) {
      throw new Error("Last name cannot be empty");
    }
    this._lastName = lastName;
  }

  static role = "User";
}

const alex = new User();
alex.firstName = "Alex";
alex.lastName = "Reynoso";
console.log(alex.fullName);
console.log(User.role);

class Admin extends User {
  static role = "Admin";
}

const admin = new Admin();
admin.firstName = "Jane";
admin.lastName = "Doe";
console.log(admin.fullName);
console.log(Admin.role);

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }
  get jobTitleInfo(): string {
    // this._firstName; // Not accessible here, private to User class
    // this.age; // Accessible here, protected to User class and subclasses
    return `${this.fullName} is a ${this.jobTitle}`;
  }
}

const emp = new Employee("clerk");
emp.firstName = "Emily";
emp.lastName = "Clark";
console.log(emp.fullName);
console.log(emp.jobTitleInfo);

// Abstract Classes
abstract class UIElement {
  constructor(public identifier: string) {}

  clone(): UIElement {
    // Some generic clone logic
    console.log(`Cloning UI Element: ${this.identifier}`);
    return this;
  }

  abstract render(): void; // Must be implemented by subclasses
}

// class uiElement = new UIElement("base-element"); // Error: Cannot create an instance of an abstract class

class Button extends UIElement {
  render(): void {
    console.log(`Rendering Button: ${this.identifier}`);
  }
}

const button = new Button("submit-button");
console.log(button.identifier);
button.render();
const buttonClone = button.clone();
