


export const getGifs= async (category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=RHqm7pYQsfNmpmTbVK0uc5QmjDhJxGxa&q=${category}&limit=10`;
  
    const resp=await fetch(url);

    const {data}=await resp.json();

    
    const gifs=data.map((m)=>{

        return{
            id:m.id,
            title:m.title,
            url:m.images.downsized_medium.url
            }
    });

       // console.log("Datos Separados",gifs);

        return gifs;
  }

  

