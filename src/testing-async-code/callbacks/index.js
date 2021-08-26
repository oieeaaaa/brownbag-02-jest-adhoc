export const getTodo = (todoId, callback) => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  .then(response => response.json())
  .then(todo => callback(todo))
