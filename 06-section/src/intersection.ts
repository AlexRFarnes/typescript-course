type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionString: string;
  credentials: {
    username: string;
    password: string;
  };
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

// Intersection type with the & operator (combines two types into one)
type AccessFileData = FileData & Status;
type AccessDatabaseData = DatabaseData & Status;
