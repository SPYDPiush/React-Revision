import { useState } from "react";

function Usestate() {

    const [counter,setCounter] = useState(15)

    const addcounter = () => {
        if(counter === 20){
            return alert("counter goes more than 20")
        }
        setCounter(counter+1)
    }

    const minuscounter = () => {
        if(counter === 0) alert("counter goes less than 0")
        setCounter(counter-1)
    }

    

    return (
        <>
            <h1>
                chai aur react
            </h1>
            <button onClick={addcounter}>counter add {counter}</button>
            <br />
            <br />
            <br />
            <br />

            <button onClick={minuscounter}>counter minus {counter}</button>
        </>
    )

}

export default Usestate;