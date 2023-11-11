import Todo from './components/todo.jsx'
import AddTODO from './components/addTodo.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="todoapp">
    <h1> Working Great </h1>
    <AddTODO />
    <Todo />    
    </div>    
  )
}

export default App
