import React from 'react';

const Todo = ({text, todos, todo, setTodos}) => {

  // events
  const deletehandeler = () => {
setTodos(todos.filter((el) => el.id !== todo.id));
  }

return(

  <div className="todo">
    <li className="todo-item">{text}</li>
    
    <button onClick={deletehandeler} className="trash-btn">
      <i className="fas fa-trash"></i>
    </button>
  </div>
);

}


export default Todo;