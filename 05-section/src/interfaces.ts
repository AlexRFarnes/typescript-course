interface Authenticatable {
  email: string;
  password: string;

  login(email: string, password: string): boolean;
  logout(): void;
}

// Interface merging
interface Authenticatable {
  username: string;
}

// Extending interfaces
interface AuthenticatableAdmin extends Authenticatable {
  role: "admin";
}

interface AuthenticatableUser extends Authenticatable {
  role: "user";
}

interface AuthenticatableGuest extends Authenticatable {
  role: "guest";
}

// Implementing interfaces
// Using interfaces as classes
class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public username: string
  ) {}

  login(email: string, password: string): boolean {
    // implement login logic here
    return true;
  }

  logout(): void {
    // implement logout logic here
    console.log("Logged out");
  }
}

// Using interfaces as objects
let user: Authenticatable = {
  email: "test@test.com",
  password: "password",
  username: "test",

  login: (email: string, password: string) => {
    // implement login logic here
    return true;
  },

  logout: () => {
    // implement logout logic here
    console.log("Logged out");
  },
};

// Using interfaces as function parameters
function authenticate(user: Authenticatable) {
  user.login("test@test.com", "password");
  user.logout();
}
