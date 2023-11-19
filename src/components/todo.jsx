
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
            <input className='todoCheck' type="checkbox" name="done" onChange={()=>toggledone(todo)} checked={todo.isdone === 'DONE' ? true : false}/>
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
            <ul className="TodoContainer">
            <p>Start creating your todos</p>
            </ul>
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