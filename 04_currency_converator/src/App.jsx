import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from "./component/InputBox";
import { useState } from "react";


function App() {

  const [amount,setAmount] = useState(0)
  const [selectcurrency,setSelectcurrency] = useState("usd")

  

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            // backgroundImage: `url('https://images.pexels.com/photos/17731677/pexels-photo-17731677/free-photo-of-a-red-parachute-flying-through-the-air-in-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountchange= {(amount) => setAmount(amount)}
                            selectcurrency
                            onCurrencychange={(currency) => setSelectcurrency(currency)}


                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App;