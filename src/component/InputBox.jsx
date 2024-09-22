/* eslint-disable react/prop-types */
import {useId} from 'react';
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {

    const id = useId();
    return(
        <div className={`${className} bg-white p-3 rounded-lg flex text-sm`}>
            <div className="w-1-2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={id}> {label} </label>
                <input id={id} type="number" className="outline-none w-full bg-transparent py-1.5" placeholder="Amount"
                disabled={amountDisabled} value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled= {currencyDisabled}>
                    {currencyOption.map((curr) => (
                        <option value="{curr}" key={curr}> {curr} </option>
                    ))}
                </select>
            </div>
        </div>

    )
}

export default InputBox;

