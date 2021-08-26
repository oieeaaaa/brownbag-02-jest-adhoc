export const initializeTodos = () => new Promise((resolves) => resolves([
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
]));

export const getIncompleteTodos = (todos) => todos.filter(todo => !todo.completed);

export const addTagToTodo = (todo, tag) => ({ ...todo, tag });
