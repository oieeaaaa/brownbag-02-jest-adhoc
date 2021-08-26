import { initializeTodos, addTagToTodo, getIncompleteTodos } from './index';

describe('filterCompletedTodos', () => {
  let todos;
  let incompleteTodos;

  beforeAll(async () => {
    todos = await initializeTodos();
  });

  beforeEach(() => {
    incompleteTodos = todos.filter(todo => !todo.completed);
  });

  it('should add the tag', () => {
    expect(addTagToTodo(todos[0], 'EASY')).toEqual({ ...todos[0], tag: 'EASY' });
  })

  it('should filter the completed todos', () => {
    expect(getIncompleteTodos(todos)).toEqual(incompleteTodos);
  });
});
