import { useState } from 'react'
import { Provider } from 'react-redux';
import store from './store/store';
import AddTodo from "./components/AddTodo";
import TodoList from './components/TodoList';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <AddTodo/>
      <TodoList />
    </Provider>
  )
}

export default App
