
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleDone } from '../features/todo/todoSlice.js'
import './todo.css'

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispact = useDispatch()

    let removeTodoHandler=(todoId)=>{
        dispact(removeTodo(todoId))
    }
    let toggledone=(todo)=>{
        dispact(toggleDone(todo));
    }
    let todoElements = todos.map((todo) => (
        <li className={"todo "+ todo.isdone} key={todo.id}>            
            <input type="checkbox" name="done" onChange={()=>toggledone(todo)}/>
            {todo.text}
            <button onClick={() => removeTodoHandler(todo.id) } className="removeBtn" >X</button>
            {/* As the removeTodo need a payload value */ }
        </li >));
    let istodoPresent = () => {
        if (todoElements.length > 0) return (
            <ul className="TodoContainer">
                {todoElements}
            </ul>
        ); else return (
            <p>Start creating your todos</p>
        );
    }
    let todoList = istodoPresent()
    return todoList;
}

function Todo() {
    //Because we want the value from the below state in the todoSlice
    /* 
    const initialState = {
    todos: [{ id: 1, text: 'Hello man' }]
    } 
    */

    
    return (<div className="ToDO app">
        <h1>To DO </h1>
        <Todos></Todos>
    </div>)
}

export default Todo;