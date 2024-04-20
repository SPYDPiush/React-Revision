import { useState } from "react"


function App() {

  const colorset = ["blue", 'green', 'Violet', 'red', 'yellow', 'purple', 'orange', 'brown']

  const [color, setColor] = useState('black')
  return (
    <div className="w-full h-screen m-0 p-0 " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 p-3 rounded-xl bg-slate-50   inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          {
            colorset.map((color) => (
              <button key={color} className={`bg-[${color}] px-3 py-2 rounded-xl`} onClick= { () => setColor(color)}>{color}</button>
            ))
          }
        </div>

      </div>
    </div>

  )
}

export default App
