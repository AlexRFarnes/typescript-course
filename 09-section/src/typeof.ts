const username = "Alex";

console.log(typeof username); // Javascript typeof operator

type Username = typeof username; // TypeScript typeof operator

const user: Username = "Alex";
// const user2: Username = "John"; // This will cause a type error in TypeScript

console.log(user);

const config = {
  apiUrl: "https://api.example.com",
  apiKey: "1234567890",
  port: 3000,
};

type Config = typeof config;

const config2: Config = {
  apiUrl: "https://otherapi.example.com",
  apiKey: "1234567890",
  port: 5000,
};

function getConfig(cfg: typeof config) {
  // typeof operator is used to get the type of the config object  (alternative cfg: Config)
  // do something with the config
}

getConfig(config);
