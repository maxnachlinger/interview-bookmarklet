export const extractWords = (input = '') => input
  .trim()
  .split(' ')
  .map((s) => s.trim().toLowerCase())
  .filter((w) => {
    return w.length > 4
      && /^[a-zA-Z]+$/ig.test(w) // sadly won't work with non-ascii
  })
  .sort((a, b) => a.localeCompare(b));
