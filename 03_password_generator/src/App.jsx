import { useState } from "react"

function App() {

  const [password,setPassword] = useState(null)
  const [isnumber,setIsnumber] = useState(false)
  const [ischar,setIschar] = useState(false)
  const [length,setLength] = useState(8)



  const passwordgenerator = () => {

    let pass =""
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const number = 1234567890
    const char = '!@#$%^&*()_-+={}[]:;"><,./?|'

    if(isnumber) letter+=number
    if(ischar)  letter+=char

    for(let i; i< length ; i++){
      let num = Math.round(Math.random() * (letter.length - 0) +1)
      pass+=letter[num]
      
    }
    console.log(pass);

  }


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={ (e) => setLength(e.target.value)}
              className='cursor-pointer' />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" id="numberInput"/>
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" id="numberInput"/>
              <label htmlFor="numberInput">Numbers</label>
          </div>

        </div>
      </div>
    </>

  )
}

export default App
