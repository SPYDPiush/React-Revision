function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    selectcurrency = 'usd',
    currencyinfo = [],
    className = ""


}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                   
                    
                    
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
                    value={selectcurrency}

                >
                    {
                        currencyinfo.map((currency) => (
                            <option value={currency}>
                                {currency}
                            </option>
                        ))
                    }


                </select>
            </div>
        </div>
    );
}

export default InputBox;