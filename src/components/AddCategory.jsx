import React, { useState } from 'react'

function AddCategory({onNewCategory}) {


    const [inputValue,setInputValue]=useState('');

    const onAddCategory=()=>{

    }

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        
        if(inputValue.trim().length<1){
            alert('No puede ir vacio');
            return;
        }

        onNewCategory(inputValue);

        setInputValue('');
        
    }
  
return (
    <>
    
    <form onSubmit={(e)=>handleSubmit(e)}>

        <div>
            <input
            type='text'
            placeholder='Buscar Gifs...'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />

            <button onClick={onAddCategory}>Agregar</button>

        </div>

        
    </form>
    </>
  )
}

export default AddCategory