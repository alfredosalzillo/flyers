import fs from "fs";
import readline from "readline";

/**
 * Read a `page` of `limit` element from `file`
 * @param file {string}
 * @param page
 * @param limit
 * @return {AsyncIterable<string>}
 */
export const readPage = async function*(file, page = 1, limit = 100) {
  const to = (page * limit);
  // +1 as the first line contain the column names
  const from = (page - 1) * limit + 1;
  const fileStream = fs.createReadStream(file);
  const lines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let index = 0;
  for await (const line of lines) {
    if (index >= from && index <= to) {
      yield line
    }
    // avoid cycle after reach the last element of the page
    if (index >= to) {
      break;
    }
    index++
  }
  lines.close()
}
