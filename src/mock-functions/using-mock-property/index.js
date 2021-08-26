export const whatsTheWords = (phrase, limit) => fetch(`https://api.datamuse.com/words?ml=${phrase}&max=${limit}`)
  .then(response => response.json())
