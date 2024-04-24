import { useState } from "react";
import useTodoContext from "../context/todocontext";


function Todoitem({todo}) {

    console.log(todo)

    const {
        deleteTodo,
        updateTodo,
        tooglecomplete
    } = useTodoContext()

    const [isTodoEditable,setIsTodoEditable] = useState(true)
    
    const  [updatemgs,setUpdatemgs] = useState("")

    const editTodo = () => {
        updateTodo(todo.id,{...todo, mgs : updatemgs })
        setIsTodoEditable( (prev) => !prev)
    }

    const toggleCompleted = () => {

        tooglecomplete(todo.id)

    }
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completeness? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked= {todo.complete}
                onChange={toggleCompleted}
            />

            
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.complete ? "line-through" : ""}`}
                
                value={todo.mgs}
                onChange={ (e) => setUpdatemgs(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"

                
                onClick={() => {
                    if (todo.complete) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Todoitem;
