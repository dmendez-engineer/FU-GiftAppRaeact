import React, { useState } from 'react'
import PropTypes from 'prop-types';

function CounterApp({valor}) {
  

    const [counter,setCounter]=useState(valor);
  
    const sumar=()=>{
        //alert("Sumanndo");
        setCounter(counter+1);
        //setCounter((c)=>c+1);
    }
    const resta=()=>{

        setCounter((c)=>c-1);
    }
  
    const resetear=()=>{
        setCounter(valor);
    }


    return (
    
    <>
    
    <div>CounterApp</div>
    <p>El valor es: {counter}</p>

    <button onClick={sumar}>+1</button>
    <button onClick={resta}>-1</button>
    <button onClick={resetear}>Reset</button>
    
    </>
  
  )
}

CounterApp.propTypes={
    valor:PropTypes.number.isRequired
}

export default CounterApp