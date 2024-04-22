import { useState,useContext } from "react"
import userContext from "../context/Contextapi"

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState()
    const {setUser} = useContext(userContext )

    const submithandle = (e) => {
        e.preventDefault()
        setUser({username,password})




    }

    return (
        <div className="">
            <h1 className="">Login</h1>
            <div>       
                <input type="text" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="">
                <button type="submit" onClick={submithandle}>Login</button>
            </div>


        </div>
    )
}