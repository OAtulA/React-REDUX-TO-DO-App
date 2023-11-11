import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js'


export const store = configureStore({
    reducer: todoReducer //we can add a list of reducers when needed.
})