import { useState } from "react"


function App() {

  const letter = "abdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const number = '1234567890'
  const symbol = '!@#$%^&*(){}|":?/<>.,~`'
  
  let newpassword = ""

  let [checknumber,setChecknumber] = useState(false)
  let [checksymbol,setChecksymbol] = useState(false)
 
  
  const [inputvalue,setInputvalue] = useState('')
  let [Length,setLength] = useState(8)

  const generator = () => {

    for(let i=0 ; i < Length ; i++){
      let num = Math.round(Math.random()*(50-0) +0)

      if(checknumber == true && num %2 ==0 && num < number.length ){
        newpassword+=number[num]
      }
      else if(checksymbol == true && num%2 !=0 && num <symbol.length){
        newpassword+=symbol[num]
      }
      else{
        newpassword+=letter[num]
      }
      
    }
    setInputvalue(newpassword)
  }


  const textcopy = (newpassword) => {
    if(!newpassword){
    alert('Password Copy', newpassword)
    }
  }


  return (
    <>
      <div className="w-full h-screen bg-black m-0 p-0 flex flex-wrap justify-center items-center">
        <div className="card bg-white w-[30%] h-[35%] rounded-lg p-3 ">
          <div className="">
            <h1 className="text-3xl text-bold text-center shadow-sm">
              Password Generator
            </h1>
            <div className="flex flex-wrap justify-between mt-5">
              <input type="text" className="rounded-md px-3 py-2 text-black text-xl border-black border-2 outline-none w-[80%]" value={inputvalue} readOnly/>
              <button className="px-3 py-2 rounded-md bg-black text-white" onClick={() => textcopy(newpassword)}>Copy</button>
            </div>
            <div className="flex flex-wrap justify-between mt-5">
              <input type="range" min={0} max={20} className="w-[40%]" onChange={ (e) => setLength(e.target.valueAsNumber)} />
              <div className="">
                ({Length}) Length
              </div>
              <div className="">
                <input type="checkbox" id="number" onChange={() => setChecknumber(!checknumber)}/>
                <label htmlFor="number" className="ml-2">Number</label>
              </div>
              <div className="">
                <input type="checkbox" id="symbol" onChange={ () =>  setChecksymbol(!checksymbol)} />
                <label htmlFor="symbol" className="ml-2">Symbol</label>
              </div>

            </div>
            <div className="text-center text-3xl text-bold mt-4">
              <button className="border-black border-2 px-3 py-2 rounded-md bg-black text-white" onClick={ generator}>
                Generate
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
