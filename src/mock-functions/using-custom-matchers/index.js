export const getSpelledLike = (spelling, limit) =>
  fetch(`https://api.datamuse.com/words?sp=${spelling}&max=${limit}`).then(
    (res) => res.json()
  );
