
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import './todo.css'

function Todo() {
    //Because we want the value from the below state in the todoSlice
    /* 
    const initialState = {
    todos: [{ id: 1, text: 'Hello man' }]
    } 
    */
    const todos = useSelector(state => state.todos)
    const dispact = useDispatch() 
    return (<div className="ToDO app">
        <h1>To DO </h1>
        <ul className="TodoContainer">
        {todos.map( (todo)=>(
            <li className="todo" key={todo.id}>
                {todo.text}
                <button onClick={()=>dispact(removeTodo(todo.id))}>X</button>
                {/* As the removeTodo need a payload value */}
            </li>
        ))}
        </ul>
    </div>)
}

export default Todo;