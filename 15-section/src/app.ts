import fs from "fs";
import { z } from "zod";
// import _ from "lodash";

// const numbers = [1, 2, 3, 4, 5, 6];

// const chunked = _.chunk(numbers, 3);
// console.log(chunked);

const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number(),
  genre: z.string(),
  pages: z.number(),
  keywords: z.array(z.string()),
});

type Data = z.infer<typeof bookSchema>;

const data = fs.readFileSync("data.json", "utf-8"); // read the data from the file

const parsedData = JSON.parse(data); // parse the data from the file

const compliantData = bookSchema.parse(parsedData); // validate the data against the schema

// This will throw an error because the data is not compliant with the schema
// const nonCompliantData = bookSchema.parse({
//   ...parsedData,
//   keywords: parsedData.keywords.join(", "), // This will throw an error because the keywords is not an array
// });
// console.log(nonCompliantData);

function output(data: Data) {
  console.log(data);
}

output(compliantData);
