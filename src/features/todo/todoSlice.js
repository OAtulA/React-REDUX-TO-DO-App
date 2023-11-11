import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  // todos: [{ id: 1, text: 'Hello man' }]
  todos: []
}

// These funcitons simply act as reducers

function add_todo(state, action) {
  const todo = {
    id: nanoid(),
    isdone: "NOT_DONE",
    text: action.payload //the payload here is a object
  }

  state.todos.push(todo);
  console.log('Action is ', action)
  console.log('todo is ', todo)
}

let remove_todo = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}

let edit_todo = (state, action) => {
  // here the payload will have id
  state.todos = [...state.todos, { id: action.payload.id, text: action.payload.text }]
}

let toggle_done = (state, action) => {
  const { id } = action.payload;
  const updatedTodos = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isdone: todo.isdone === "NOT_DONE" ? "DONE" : "NOT_DONE" };
    }
    return todo;
  });
  state.todos = updatedTodos;
};


// passing object here by convention
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: add_todo,
    removeTodo: remove_todo,
    editTodo: edit_todo,
    toggleDone: toggle_done,
  }
})

// We also export individually so that 
// we can use them in our COMPONENTS

export const { addTodo, removeTodo, toggleDone, editTodo } = todoSlice.actions

// As our store needs to know them
export default todoSlice.reducer

// If we are creating more slices then 
// from export slice and then the functions and default
// All have to be replicated.

