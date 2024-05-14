import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-list-container br-10">
      <ul className="todo-list">
        {sortedTodos.length ? (sortedTodos.map((todo, index) => (
            < TodoItem
                todo = {todo}
                key={index}
            />
        ))) : (<p>No to-do items added yet.</p>)}
      </ul>
    </div>
  );
};

export default TodoList;
