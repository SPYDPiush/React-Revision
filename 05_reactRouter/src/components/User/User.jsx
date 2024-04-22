import { useParams } from "react-router-dom"

export default function User(){

    const {userid} = useParams()

    return(

    <div className="text-center p-4 bg-gray-600 m-4 text-3xl text-white">
        User : {userid} 
    </div>
    )

}