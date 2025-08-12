import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GiftGridItem from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



  

function GiftGrid({category,onRemoveCategory}) {
    
    const {gifs,isLoading}=useFetchGifs(category);


  const handleRemoveCategory=(categoryP)=>{

        onRemoveCategory(categoryP);

  }


    return (
    <>
        
      <h3>{category}</h3> - 
      <button onClick={()=>handleRemoveCategory(category)}>Eliminar categoria</button>

        {
            
        }


        <div className='card-grid'>
        {
            gifs.map((g)=>(

                <GiftGridItem 
                
                key={g.id}
                {...g}
                />

            ))
        
        
        }
        </div>
      

    </>
  )
}

export default GiftGrid