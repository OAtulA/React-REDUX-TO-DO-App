import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  // todos: [{ id: 1, text: 'Hello man' }]
  todos:[]
}

// These funcitons simply act as reducers

function add_todo(state, action) {
  const todo = {
    id: nanoid(),
    text: action.payload //the payload here is a object
  }

  state.todos.push(todo);
}

let remove_todo = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}
let edit_todo = (state, action) => {
  // here the payload will have id
  state.todos = [...state.todos, { id: action.payload.id, text: action.payload.text }]
}

// passing object here by convention
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: add_todo,
    removeTodo: remove_todo,
    editTodo: edit_todo
  }
})

// We also export individually so that 
// we can use them in our COMPONENTS

export const {addTodo, removeTodo} = todoSlice.actions

// As our store needs to know them
export default todoSlice.reducer

// If we are creating more slices then 
// from export slice and then the functions and default
// All have to be replicated.

