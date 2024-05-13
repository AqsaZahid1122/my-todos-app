import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        dispatch(addTodo({
            id: Math.random(),
            title: title,
            description: description,
            completed: false
        }));
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default AddTodo;