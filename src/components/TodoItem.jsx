import React, { useState } from 'react';
import { toggleTodo, deleteTodo } from '../store/todoSlice';
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
        className={`todo-item br-10 ${todo.completed ? 'completed' : ''}`}
    >
        <div className='todo-head'>
            <div className='todo-title' onClick={() => handleTodoClick(todo)}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />
                {todo.title}
            </div>
            <button
                className='delete-btn'
                onClick={() => {window.confirm( 'Are you sure you want to delete this to-do item?') && dispatch(deleteTodo(todo.id))}}
            ><img src="/public/delete.svg" alt="" /></button>
        </div>
            {selectedTodo === todo && todo.description &&  (
            <div className="todo-description br-10">
                <p>{todo.description}</p>
            </div>
            )}
  </li>
  )
}

export default TodoItem
