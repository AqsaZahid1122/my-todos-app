import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {sortedTodos.length ? (sortedTodos.map(todo => (
            < TodoItem
                todo = {todo}
            />
        ))) : (<p>No Task</p>)}
      </ul>
    </div>
  );
};

export default TodoList;
