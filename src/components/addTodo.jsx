import  { useState } from "react";
import { useDispatch } from "react-redux";
// since we are using addToDoHandler
import {addTodo} from '../features/todo/todoSlice'
import './addTodo.css'

function AddTODO(){
    const [input, setInput]= useState("");
    const dispacth = useDispatch();

    const addToDoHandler =(e)=>{
      e.preventDefault();

      //we are sending the value to the reducer 
      dispacth(addTodo(input))

      // to erase the input area
      setInput('');
    }
    return(
        <form className="red" onSubmit={addToDoHandler}>
            <input type="text"placeholder="Enter a to do" value={input}/>
        </form>
    )
}

export default AddTODO