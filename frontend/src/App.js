// Import the necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the Todo component
const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <span>{todo.title}</span>
    </div>
  );
};

// Define the TodoList component
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Get all todos from the backend API
    axios.get("http://localhost:8080/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

// Define the App component
const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
};

// Render the App component
export default App;
