export const firstLast = (items) => {
  if (items.length === 0) {
    return `No items!"`
  }
  if (items.length === 1) {
    return `Ònly item: ${item[0]}`
  }
  return `First: ${items[0]}, Last: ${items[items.length - 1]}`
}