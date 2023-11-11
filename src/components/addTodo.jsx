import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./addTodo.css";

function AddTODO() {
  const [input, setInput] = useState("");
  // const inputRef = useRef("")
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();

    // send value to reducer
    // let input = inputRef.current.value;
    dispatch(addTodo(input));
    // to clear input 
    setInput("");
    // inputRef.current ="";
  };

  return (
    <form className="red" onSubmit={addToDoHandler}>
      <input
      className="addToDo"
        type="text"
        placeholder="Enter a to do"
    
        value={input}
        onChange={(e)=> setInput(e.target.value)}
      />
      <button type="button" className="todo_add_btn" onClick={addToDoHandler}>Add Todo</button>
    </form>
  );
}

export default AddTODO;
