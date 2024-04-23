
import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/contextapi"
import useTheme from "./context/contextapi"
import Buttontheme from "./components/Button"
import Card from "./components/Cards"
function App() {

  const [thememode,setThememode] = useState("light")

  const themelight = () => {
    setThememode("light")
  }

  const themedark = () => {
    setThememode("dark")
  }


  useEffect( () => {
    let htmlelement = document.querySelector('html');
    htmlelement.classList.remove('dark','light')
    htmlelement.classList.add(thememode)

  },[thememode])



  return (
    <ThemeProvider value= {{thememode,themelight,themedark}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
{/* toggle */}
<Buttontheme />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
{/* card */}
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
