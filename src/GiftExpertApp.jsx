import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

//RHqm7pYQsfNmpmTbVK0uc5QmjDhJxGxa

export function GiftExpertApp() {
  
  
    const [categories,setCategories]=useState(['Goku']);
  
    
    
    const onAddCategory=(category)=>{


        categories.forEach((c)=>{

            if(c.toLowerCase()===category.toLowerCase()){
                 alert('El evento ' + category + ' ya existe');
                 return;
            }

        });

        
        setCategories([category,...categories]);
    }

    const onRemoveCategory=(categoryP)=>{

        let arrayCaregories=[];

        arrayCaregories=categories.filter((c)=>{
            

            if(c!==categoryP){
                
                return c;
            
            }
        
        });
        

        setCategories(arrayCaregories);

        alert("Eliminado de la App: "+categoryP);


    }


return (
    <>
    
    <h1>GiftExpertApp</h1>
    
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={onAddCategory}
    />
    



        {
        
        
        categories.map((c)=>{
            return <GiftGrid 
            
            category={c}
            key={c}
            onRemoveCategory={onRemoveCategory}
            
            />

        })
        
        }



    </>
  )
}


