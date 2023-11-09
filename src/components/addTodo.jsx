import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./addTodo.css";

function AddTODO() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();

    // send value to reducer
    dispatch(addTodo(input));
    // to clear input 
    setInput("");
  };

  return (
    <form className="red" onSubmit={addToDoHandler}>
      <input
        type="text"
        placeholder="Enter a to do"
        value={input}
      />
      <button type="button" className="todo_add_btn" onClick={addToDoHandler}>Add Todo</button>
    </form>
  );
}

export default AddTODO;
