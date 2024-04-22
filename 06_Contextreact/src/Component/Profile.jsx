import React,{useContext,useState} from "react";
import userContext from "../context/Contextapi";




export default function Profile() {

    const {user} = useContext(userContext)

    return(
        <div className="">
            <h1>Profile</h1>
            <div className="">
                {user ? <div>
                    Welcome {user.username}
                </div>: <div>User does not exits</div>}
            </div>
        </div>
    )
}