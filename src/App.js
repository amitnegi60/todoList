import React, { useState } from 'react';
import "./App.css";
// importing components
import Form from './components/Form'
import Todolist from './components/TodoList';

function App() {

  const[inputText, setInputText] = useState('');
  const[todos, setTodos] = useState([]);


  

  return <div className="App">
    <header>
      <h1>Amit's Todo List </h1>
    </header>
    <Form  inputText={inputText} todos= {todos} setTodos = {setTodos} setInputText= {setInputText} />
    <Todolist todos={todos} setTodos = {setTodos}/>
  </div>;
}

export default App;
