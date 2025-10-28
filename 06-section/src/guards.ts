type FileSource = { type: "file"; path: string };

const fileSource: FileSource = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource = { type: "db"; connectionUrl: string };

const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

// Union type with the | operator (can be one of the two types)
// Discriminated union type because the type property is used to discriminate the type (both types have the same property type but different values)
type Source = FileSource | DBSource;

// Non-discriminated union type
function loadData(source: Source) {
  // Open + read file OR reach out to database server
  // Using type guards to check the type of the source
  if ("path" in source) {
    // source is a FileSource
    console.log("Loading file data from", source.path);
    return;
  }

  if ("connectionUrl" in source) {
    // source is a DBSource
    console.log("Loading database data from", source.connectionUrl);
    return;
  }

  throw new Error("Invalid source type");
}

// Discriminated union type with the type property
function loadDataDiscriminated(source: Source) {
  // Open + read file OR reach out to database server
  // Using type guards to check the type of the source
  if (source.type === "file") {
    // source is a FileSource
    console.log("Loading file data from", source.path);
    return;
  }

  if (source.type === "db") {
    // source is a DBSource
    console.log("Loading database data from", source.connectionUrl);
    return;
  }

  throw new Error("Invalid source type");
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(public permissions: string[]) {}

  scan() {
    // ...
  }
}
