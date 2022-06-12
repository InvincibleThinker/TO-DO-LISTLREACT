import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todolist';

function App() {
  
  //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos ] = useState([]);
//  only runs once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos =() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
