import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github () {

    const data = useLoaderData()


    // const [data,setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/SPYDPiush')
    //     .then( (res) => res.json())
    //     .then( (res) => console.log(res))
    // },[])
    
    return(
        <div className="text-center p-4 bg-gray-600 m-4 text-3xl text-white">
            Followers : {data.following}
            
        </div>
    )
}




export const githubloader  = async () => {

    

    const respone = await fetch('https://api.github.com/users/SPYDPiush')
    const res=  await respone.json()
    // console.log(res)
    return res
        
    }


    