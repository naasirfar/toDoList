import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import ToDoInput from './ToDoInput.js';
import TaskList from './TaskList.js'

function App() {
  const [todos, setTodos] = React.useState([]) // list 

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <ToDoInput addTodo={addTodo}></ToDoInput> 
      <TaskList tasks={todos}></TaskList>
    </div>
  );
}

export default App;