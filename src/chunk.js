// Split an array into fixed-size chunks.

export function chunk(items, size) {
  if (size < 1) {
    throw new RangeError("chunk size must be at least 1")
  }
  const result = []
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size))
  }
  return result
}
