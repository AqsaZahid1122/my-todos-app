import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../store/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo === selectedTodo ? null : todo);
  };

  return (
    <div>
      <ul>
        {sortedTodos.length ? (sortedTodos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => handleTodoClick(todo)}
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.title}

            </div>
            {selectedTodo === todo &&  (
              <div>
                <p>{todo.description}</p>
              </div>
            )}
          </li>
        ))) : (<p>No Todo</p>)}
      </ul>
    </div>
  );
};

export default TodoList;
