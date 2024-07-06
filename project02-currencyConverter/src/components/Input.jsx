function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "USD",
    currencyDisabled = false,
    amountDisabled = false,
    currencyOptions = [],
    className = ""
}){

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor="inputId" className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id="inputId"
                className="outline-none w-full bg-transparent py-1.5"
                type="number" 
                disabled= {amountDisabled}
                value = {amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                 className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                 value = {selectCurrency}
                disabled = {currencyDisabled}
                onChange = {(e)=> {
                   onCurrencyChange && onCurrencyChange(e.target.value)
                   
                }}>
                    {currencyOptions.map((curr) => (
                        <option value={curr} key={curr}>
                            {curr}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}
export default Input;