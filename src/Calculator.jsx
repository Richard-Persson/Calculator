
import { useState } from "react";
import { useEffect} from 'react';

function Calculator(){

//HOOKS
const [display, setDisplay] = useState("")

let regExNumbers = /[0-9+\-/*]/


useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);



const detectKeyDown = (e)=> {
    console.log("Key pressed:", e.key);
    if (regExNumbers.test(e.key)) 
        handleValue(e.key);
    else if (e.key === "Enter") {
        e.preventDefault();
        console.log("Enter key pressed");
        calculate();
    }
    else if (e.key === "Backspace") 
        clearDisplay();
  };


function handleValue (digit){
    if (typeof digit === 'string')
    setDisplay(prevDisplay => prevDisplay === "0" ? digit : prevDisplay + digit);

}


function clearDisplay(){
    setDisplay("")
}
   

function calculate(){
    setDisplay(eval(display))
}



    return(
        <>
        <div className="calculator">
         <input type="text" className="display" value={display}  readOnly ></input>
         <div className="buttons">
            <button onClick={()=>handleValue("7")}>7</button>
            <button onClick={()=>handleValue("8")}>8</button>
            <button onClick={()=>handleValue("9")}>9</button>
            <button onClick={()=>handleValue ("/")}className="operator">/</button>
            <button onClick={()=>handleValue("4")}>4</button>
            <button onClick={()=>handleValue("5")}>5</button>
            <button onClick={()=>handleValue("6")}>6</button>
            <button onClick={()=>handleValue("*")} className="operator">*</button>
            <button onClick={()=>handleValue("1")}>1</button>
            <button onClick={()=>handleValue("2")}>2</button>
            <button onClick={()=>handleValue("3")}>3</button>
            <button onClick={()=>handleValue("-")}  className="operator">-</button>
            <button>0</button>
            <button onClick={clearDisplay}>C</button>
            <button onClick={calculate} className="equal">=</button>
            <button onClick={()=>handleValue("+")}className="operator">+</button>
         </div>
        </div>

        </>
    );
    

}

export default Calculator