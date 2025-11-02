type ReadPermissions = "read" | "no-read";
type WritePermissions = "write" | "no-write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [K in DataFileEventNames]: () => void;
};
