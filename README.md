# TO DO App React Redux

## Structure

I have my logic into `src` folder.  

My `store.js` is in  
`src\app\store.js`

Reducers and states are in  
`src/features/todo/todoSlice.js`

## error from browser console

```sh
ambiguous indirect export: AddTODO
```

I guess `src/components/addTodo.jsx` is responsible for this.  
I am importing it in `src/App.jsx`
