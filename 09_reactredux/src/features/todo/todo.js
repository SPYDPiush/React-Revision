import {createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
  todos : [{
    id:1,
    text : "hello world"
  },
{
  id:2,
  text: "how are you!"
}]
}



{/*export*/} const todoSlice = createSlice({

  name : 'todo',
  initialState,
  reducers : {
    addtodo : (state,action) => {
      const todo = {
        id : nanoid(),
        text : action.payload // text : action.payload.text in this when text property call so we neglacte the action.payload.text
      }

      state.todos.push(todo)
    },
    removetodo : (state,action) => {
      state.todos = state.todos.filter((prev) => prev.id !== action.payload)
    },
    updatetodo : (state,action) => {
      
      state.todos = state.todos.map( (prev) => prev.id == prev.action ? {...prev,mgs : action} : {prev} )
    }
  }
  

})

export const {addtodo,removetodo,updatetodo} = todoSlice.actions

export default todoSlice.reducer