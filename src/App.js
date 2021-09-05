import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  function addTodo(newTodo){
    setTodos([...todos, newTodo])
  }
  function handleTodo(todo){
    setTodos(todos.filter((items) => items != todo))
  }
  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo}/>
        <TodoList todos={todos} handleTodo={handleTodo}/>
      </div>
    </div>
  );
}

export default App;
