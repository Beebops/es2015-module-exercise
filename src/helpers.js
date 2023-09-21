/** Returns a randomly selected item from an array of items */
function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/** Removes the first matching item from items array if item exists and returns that item
 *  Returns undefined if item is not in items array
 */
function remove(items, item) {
  const index = items.indexOf(item)
  return index > -1 ? items.splice(index, 1)[0] : undefined
}

export { choice, remove }
