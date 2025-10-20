function process(val: unknown) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  if (typeof val === "number") {
    return val.toFixed(2);
  }
  if (typeof val === "boolean") {
    return val.toString();
  }
  if (typeof val === "object" && val !== null) {
    return JSON.stringify(val);
  }
  return val;
}
