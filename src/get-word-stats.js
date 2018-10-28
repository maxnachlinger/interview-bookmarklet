// [word, word...] => [{word, weight} ...]
export const getWordStats = (words) => {

  // [string] -> { results: [{ word, hits }], maxHits: 37 }
  const { results, maxHits } = words.reduce((accum, word) => {
    let idx = accum.idxs.hasOwnProperty(word) ? accum.idxs[word] : -1;
    if (idx === -1) {
      idx = accum.results.push({ word, hits: 0 }) - 1;
      accum.idxs[word] = idx;
    }

    accum.results[idx].hits++;
    accum.maxHits = accum.results[idx].hits > accum.maxHits
      ? accum.results[idx].hits
      : accum.maxHits;

    return accum;
  }, { idxs: {}, results: [], maxHits: 0 });

  // weight words
  // [{ hits, word }] => [{ word, weight }]
  return results.map(({ hits, word }) => ({
    word,
    weight: Number((hits / maxHits).toFixed(2)) * 100,
  }));
};
