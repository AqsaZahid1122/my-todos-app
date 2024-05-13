import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.unsift(action.payload);
    },
    toggleTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id ===action.payload);
        if(todo){
            todo.completed=!todo.completed;
        }
    }
}
});

export const { addTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;