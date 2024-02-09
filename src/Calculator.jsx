
import { useState } from "react";

function Calculator(){

//HOOK
const [display,setDisplay] = useState("");
const [array, setArray] = useState([])
const [verdi,setVerdi] = useState("");
const [sum,setSum] = useState(0);
const regExOperator = /[0-9]/;


function updateDisplay (value){

    console.log(array)
    console.log(array[array.length-1])

    if( array.length>0 && !regExOperator.test(value) && !regExOperator.test(array[array.length-1]))
            return;
    
    setDisplay(prevDisplay => prevDisplay.concat(value)) 
    setVerdi(prevVerdi => prevVerdi.concat(value))


    if(!regExOperator.test(value))
        operator(value)
    

}

function operator(operator){

    setArray(oldArray=>[...oldArray,verdi,operator])
    console.log(display + " display")
    console.log(verdi + " verdi")


    setVerdi("")
}



function clearDisplay(){
    setDisplay(" ")
    setArray([])
}
   



function ferdig (){

    setVerdi(verdi.concat(value))
    setArray(oldArray=>[...oldArray,verdi,operator])
    console.log(array)
    console.log("ferdig funksjon")

    array.forEach(tall => {
        console.log(tall)
    });

   setDisplay(sum)
}

    return(
        <>
        <h1>Calculator</h1>
        <div className="calculator">
         <input type="text" className="display" disabled value={display}></input>
         <div className="buttons">
            <button onClick={()=>updateDisplay("7")}>7</button>
            <button onClick={()=>updateDisplay("8")}>8</button>
            <button onClick={()=>updateDisplay("9")}>9</button>
            <button onClick={()=>updateDisplay("/")}className="operator">/</button>
            <button onClick={()=>updateDisplay("4")}>4</button>
            <button onClick={()=>updateDisplay("5")}>5</button>
            <button onClick={()=>updateDisplay("6")}>6</button>
            <button onClick={()=>updateDisplay("*")} className="operator">*</button>
            <button onClick={()=>updateDisplay("1")}>1</button>
            <button onClick={()=>updateDisplay("2")}>2</button>
            <button onClick={()=>updateDisplay("3")}>3</button>
            <button onClick={()=>updateDisplay("-")}  className="operator">-</button>
            <button>0</button>
            <button onClick={clearDisplay}>C</button>
            <button onClick={ferdig} className="equal">=</button>
            <button onClick={()=>operator("+")}className="operator">+</button>
         </div>
        </div>

        </>
    );
    

}

export default Calculator