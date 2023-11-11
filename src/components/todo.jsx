
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
    let todoElements = todos.map((todo) => (
        <li className="todo" key={todo.id}>
            {todo.text}
            <button onClick={() => dispact(removeTodo(todo.id))}>X</button>
            {/* As the removeTodo need a payload value */}
        </li>));
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
    return (<div className="ToDO app">
        <h1>To DO </h1>
        {todoList}
    </div>)
}

export default Todo;