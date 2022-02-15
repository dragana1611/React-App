import React, { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay bills", id: 1 },
    { text: "Do your homework", id: 2 },
    { text: "Feed the dog", id: 3 },
  ]);

  const [count, setCount] = useState(0);
  
  const addTodo = (text)=>{
    setTodos([
      ...todos,
      { text, id: Math.random() }, // we could use uuid npm as the package to create a unique ID; ES6 shorthand text: text => key=value => text
    ]);
  };

  useEffect (()=>{
    console.log("use effect", todos);
  }, [todos]);

  useEffect(() => {
    console.log("use effect", count);
  }, [count]);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (<li key={todo.id}>{todo.text}</li>)
        })}
      </ul>
      <AddNewTodo addTodo = {addTodo} />
      <button onClick = {()=>setCount(count+1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;

//className="ui raised very padded text container segment"; className="ui list"
