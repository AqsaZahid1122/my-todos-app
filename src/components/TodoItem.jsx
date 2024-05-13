import React, { useState } from 'react';
import { toggleTodo } from '../store/todoSlice';
import { useDispatch } from 'react-redux';


function TodoItem({todo}) {
    const dispatch = useDispatch();
    const [selectedTodo, setSelectedTodo] = useState(null);
    const handleTodoClick = (todo) => {
        setSelectedTodo(todo === selectedTodo ? null : todo);
      };
  return (
    <li
        key={todo.id}
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
        onClick={() => handleTodoClick(todo)}
    >
        <div className='todo-title'>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
        />
        {todo.title}

        </div>
        {selectedTodo === todo &&  (
        <div className="todo-description">
            <p>{todo.description}</p>
        </div>
        )}
  </li>
  )
}

export default TodoItem
