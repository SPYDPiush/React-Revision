import {createSlice, nanoid} from "@reduxjs/toolkit";



initialState : {
  todos : [{
    id:1,
    mgs : "hello world"
  }]
}



const todoSlice = createSlice({

  name : 'todo',
  initialState,
  reducers : {
    addtodo : (state,action) => {
      const todo = {
        id : nanoid,
        text : action.payload.text // text : action.payload.text in this when text property call so we neglacte the action.payload.text
      }

      state.todos.push(todo)
    },
    removetodo : (state,action) => {
      state.todos = state.todos.filter( (prev) => prev.action != prev.id)
    },
    updatetodo : (state,action) => {
      
      state.todos = state.todos.map( (prev) => prev.id == prev.action ? {...prev,mgs : action} : {prev} )
    }
  }
  

})