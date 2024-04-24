import { useState } from "react"
import useTodoContext from "../context/todocontext"



export default function Todoform() {

    const {addTodo} = useTodoContext()


    const [inputvalue,setInputvalue] = useState("")


    function submitform(e){
        e.preventDefault()

        if(!inputvalue) return

        addTodo({
            mgs:inputvalue,
            complete:false
        })
        

        setInputvalue("")



    } 



    return (
        <form  className="flex" onSubmit={submitform}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e) => setInputvalue(e.target.value)}
                value={inputvalue}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}