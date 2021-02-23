/**
 * Collect an `AsyncIterable` to `Array`
 * @template T
 * @param asyncIterable {AsyncIterable<T>}
 * @return {Promise<T[]>}
 */
export const toArray = async (asyncIterable) => {
  let accumulator = []
  for await (const value of asyncIterable) {
    accumulator.push(value)
  }
  return accumulator
}
