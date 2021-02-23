import { readPage } from "../lib/read-page.js";
import { toArray } from "../lib/async-iterators-helpers.js";

/**
 * @typedef {Object} Flyer
 * @property {number} id
 * @property {string} title
 * @property {string} start_date
 * @property {string} end_date
 * @property {boolean} is_published
 * @property {string} retailer
 * @property {string} category
 */
/**
 * Read a `page` of `limit` flyers
 * @param page
 * @param limit
 * @return {AsyncIterable<Flyer>}
 */
const flyers = async function*(page = 1, limit = 100) {
  for await (const line of readPage('./data/flyers.csv', page, limit)) {
    const [id, title, start_date, end_date, is_published, retailer, category] = line.split(',');
    yield {
      id: Number(id),
      title,
      start_date,
      end_date,
      is_published: Boolean(is_published),
      retailer,
      category,
    }
  }
}

export const getFlyersHandler = async (req, res) => {
  const {
    query: { page = '1', limit = '100' },
  } = req
  return res
    .status(200)
    .json(await toArray(flyers(Number(page), Number(limit))))
}
