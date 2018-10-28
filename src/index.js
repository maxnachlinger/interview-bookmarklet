// assumptions, not worrying about unicode words
// evergreen browsers with es6 support
import { extractWords } from './extract-words';
import { getWordStats } from './get-word-stats';
import { createTags } from './create-tags';

const main = (win) => {
  const doc = win.document;
  const words = extractWords(doc.documentElement.innerText);
  const stats = getWordStats(words);
  createTags(doc, stats);
};

main(window);
