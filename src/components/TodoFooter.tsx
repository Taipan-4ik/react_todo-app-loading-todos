import { useState } from 'react';
import { filterTodos } from '../utils/filterTodos';
import { Todo } from '../types/Todo';

type TodoFooterProps = {
  todos: Todo[];
  setVisibleTodos: (filteredList: Todo[]) => void;
};

export const TodoFooter: React.FC<TodoFooterProps> = ({
  todos,
  setVisibleTodos,
}) => {
  const [linkIsActive, setLinkIsActive] = useState({
    all: true,
    active: false,
    completed: false,
  });

  return (
    /* Hide the footer if there are no todos */
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${todos.filter(todo => todo.completed === false).length} items left`}
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={`filter__link ${linkIsActive.all ? 'selected' : ''}`}
          data-cy="FilterLinkAll"
          onClick={() => {
            const filteredList = filterTodos(todos, 'All');

            setVisibleTodos(filteredList);
          }}
          onFocus={() => {
            setLinkIsActive({ all: true, active: false, completed: false });
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${linkIsActive.active ? 'selected' : ''}`}
          data-cy="FilterLinkActive"
          onClick={() => {
            const filteredList = filterTodos(todos, 'Active');

            setVisibleTodos(filteredList);
          }}
          onFocus={() => {
            setLinkIsActive({ all: false, active: true, completed: false });
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${linkIsActive.completed ? 'selected' : ''}`}
          data-cy="FilterLinkCompleted"
          onClick={() => {
            const filteredList = filterTodos(todos, 'Completed');

            setVisibleTodos(filteredList);
          }}
          onFocus={() => {
            setLinkIsActive({ all: false, active: false, completed: true });
          }}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
