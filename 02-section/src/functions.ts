function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

// never type indicates that the function will not finish normally
function logAndThrow(errorMessage: string): never {
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const logMessage = (message: string) => {
  console.log("Log:", message);
};

function performJob(cb: (msg: string) => void) {
  console.log("Performing job...");
  cb("Job completed");
}

performJob(logMessage);
