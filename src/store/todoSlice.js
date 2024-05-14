import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: 1, title: 'Attend Daily Stand-ups', description: "Participate in daily stand-up meetings to understand the development team's progress and address any blockers.", completed: null },
            {id: 2, title: 'Review and Prioritize Backlog', description: "Ensure the backlog is up-to-date and contains detailed user stories and acceptance criteria.", completed: null },
            {id: 3, title: 'Communicate with Stakeholders', description: "Engage with stakeholders to gather feedback and align on priorities.", completed: null },
            {id: 4, title: 'Sprint Planning Preparation', description: "Prepare for upcoming sprint planning by ensuring that the top priority stories are ready for the team to pick up.", completed: null },
            {id: 5, title: 'Stakeholder Meetings', description: "Schedule and conduct regular meetings with key stakeholders to review progress, gather feedback, and adjust priorities as needed.", completed: null },

        ]
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id ===action.payload);
        if(todo){
            todo.completed=!todo.completed;
        }
    },
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !==action.payload);
    }
}
});

export const { addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;