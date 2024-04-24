import { useEffect, useState } from "react"
import Todoform from "./component/Todoform"
import { TodoContextProvider } from "./context/todocontext"
import Todoitem from "./component/Todoitem"


function App() {


  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos((prev) => [{
      id: Date.now(),
      ...todo
    }, ...prev])

  }

  const deleteTodo = (id) => {

    setTodos( (prev) => prev.filter( (todo) => todo.id != id))


  }

  const updateTodo = (id,todo) => {

    setTodos( (prev) => prev.map( (newtodo) => newtodo.id === id ? todo : prev))

  }


  const tooglecomplete = (id) => {
    setTodos( (prev) => prev.map( (prevtodo) => prevtodo.id === id ? {...prevtodo,complete : !prevtodo.complete} : prevtodo))
  }


  useEffect( () => {

    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])

  useEffect( () => {
    const internaltodos = JSON.parse(localStorage.getItem("todos"))

    if(internaltodos && internaltodos.length > 0) {
      setTodos(internaltodos)
    }


    

  },[])




  return (

    <TodoContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, tooglecomplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform />
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">

            {
              todos.map( (todo) => (
                <div className="w-full"
                key={todo.id}>
                   <Todoitem todo={todo} />

                  </div>
              ))
            }
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>



  )
}

export default App
