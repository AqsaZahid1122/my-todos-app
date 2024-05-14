import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addTodo({
      id: Math.random(),
      title: title,
      description: description,
      completed: false
    }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form br-10">
      <input
        type="text"
        placeholder="Title*"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="todo-input br-10"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input br-10"
      />
      <button type="submit" className="add-button br-10">ADD</button>
    </form>
  );
};

export default AddTodo;
