import { Todo } from '../types/Todo';

export function filterTodos(todos: Todo[], value: string): Todo[] {
  switch (value) {
    case 'Active':
      return todos.filter(todo => todo.completed === false);
    case 'Completed':
      return todos.filter(todo => todo.completed === true);
    case 'All':
      return todos;
  }
}
