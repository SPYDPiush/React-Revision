import Login from "./Component/Login"
import Profile from "./Component/Profile"
import Contextprovider from "./context/Contextprovider"


function App() {
  

  return (
   <Contextprovider>
    <Login />
    <Profile />
    
   </Contextprovider>
  )
}

export default App
