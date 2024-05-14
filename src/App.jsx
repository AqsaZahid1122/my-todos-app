import { Provider } from 'react-redux';
import store from './store/store';
import AddTodo from "./components/AddTodo";
import TodoList from './components/TodoList';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="container br-10">
        <h1>My Todo-s</h1>
        <AddTodo />
        <div className="separator"></div>
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
