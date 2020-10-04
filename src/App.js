import React, { useState, useEffect } from "react";
import "./App.css";

// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  // states
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // filter tasks based on user selection
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>multilife</h1>
      </header>
        <h2>Ever feel like you're living a double life? Triple life? We get you. </h2>
        <h3>Efficiently manage all of your tasks in one place so you can stay on top of the game as the boss that you are. ;D</h3> 
      <Form 
        input = {input} 
        setInput = {setInput} 
        todos = {todos} 
        setTodos = {setTodos}
        setStatus = {setStatus}
      />
      <TodoList 
        todos = {todos} 
        setTodos = {setTodos} 
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;