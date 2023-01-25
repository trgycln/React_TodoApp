import React, { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./components/addForm";
import SingleTodo from "./components/singleTodo";


function App() {
  const [todos, setTodos] = useState([])
  const [didUpdate, setDidUpdate] = useState(false)
  
  useEffect(() => {
    axios
      .get("http://localhost:3004/todos")
      .then((res) => {
        setTodos(res.data)
      })
      .catch((err) => {
       
       })
    
  }, [didUpdate])

  return (
    <>
    <div className="container text-center">
      <h1>Todo List</h1>
      <AddForm didUpdate={didUpdate} setDidUpdate={setDidUpdate} />
      {
        todos.map((item) => (
          <SingleTodo key={item.id} item={item} didUpdate={didUpdate} setDidUpdate={setDidUpdate}  />
        ))
      }
    </div>
     
    
    </>
  );
}

export default App;
