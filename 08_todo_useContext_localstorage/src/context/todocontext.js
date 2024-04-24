import { createContext, useContext } from "react";

const TodoContext = createContext(
    {
        todos : [
            {
                id : Date.now(),
                mgs : "",
                completeness : true
            }
        ],
        addTodo : () => {},
        deleteTodo : () => {},
        updateTodo : () => {},
        tooglecomplete : () => {}
        
    }
);

export const TodoContextProvider = TodoContext.Provider

export default function useTodoContext(){
    return useContext(TodoContext)
}